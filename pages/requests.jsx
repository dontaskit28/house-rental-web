import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useAuth } from "./../context/AuthContext";
import { useEffect,useState } from "react";

const requests = () => {
  const { user } = useAuth();
  const [owner, setOwner] = useState(null);
  useEffect(() => {
    if(!user)return;
    const getUsers = async () => {
      const query = collection(db, "users");
      const users = await getDocs(query);
      users.docs.map((doc) => {
        if (doc.data().email == user.email) return setOwner(doc);
      });
    };
    getUsers();
  }, [user]);
  return <div>
    {owner && <div>
        {owner.data().friends.map((dat,i)=>(
            <div key={i}>{dat.accepted?"":dat.user_id}</div>
        ))}
    </div>
}
  </div>;
};

export default requests;
