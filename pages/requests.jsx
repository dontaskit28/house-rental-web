import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useAuth } from "./../context/AuthContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

const requests = () => {
  const { user } = useAuth();
  const [owner, setOwner] = useState(null);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    if (!user) {
      return;
    };
    if (!user.isSeller){
      return;
    }
    (async () => {
      const query = collection(db, "users");
      const users = await getDocs(query);
      users.docs.map((doc) => {
        if (doc.data().email == user.email) {
          setOwner(doc);
          setFriends(doc.data().friends)
        }
      });
    })();
  }, [user]);
  return (
    <div>
      {friends && (
        <div>
          {
            friends.map((friend,i)=>(
              <div key={i}>{friend.house}</div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default requests;
