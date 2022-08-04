import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { doc,getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import HouseById from "./../components/HouseById";

const houseid = () => {
  const {query:{houseid}} = useRouter();
  const [house, setHouse] = useState({});
  useEffect(() => {
    ;(async()=>{
      if (!houseid) return false;
      const docRef = doc(db,'houses',houseid)
      const docSnap = await getDoc(docRef) 
      if (docSnap.exists()){
        const data = docSnap.data();
        setHouse(data)
      }else{
        console.log("no data")
      }
    })()
  },[houseid]);
  return (
    <div className="max-h-[100vh] min-h-[720px] bg-gray-200 flex items-center justify center">
      {house && <HouseById house={house} houseid={houseid} />}
      
    </div>
  );
};

export default houseid;
