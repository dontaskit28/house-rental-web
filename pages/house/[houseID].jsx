import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import HouseById from "./../components/HouseById";
import Card from "../components/Card";
import { isEqual } from "lodash";

const houseid = () => {
  const {
    query: { houseid },
  } = useRouter();
  const [house, setHouse] = useState({});
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    (async () => {
      if (!houseid) return false;
      const docRef = doc(db, "houses", houseid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        data.id = docSnap.id;
        const houseSnaps = await getDocs(collection(db, "houses"));
        let temp = [];
        houseSnaps.docs.map((hou) => {
          const data2 = hou.data();
          data2.id = hou.id;
          if (!isEqual(data2, data)) {
            if (
              hou.data().location.toLowerCase() === data.location.toLowerCase()
            ) {
              temp.push(data2);
            }
          }
        });
        setHouse(data);
        setHouses(temp);
      } else {
        alert("Not Found");
      }
    })();
  }, [houseid]);
  return (
    <div className="min-h-[720px] bg-gray-200 flex flex-col items-center justify center">
      <div className="bg-gray-200 flex items-center justify center">
        {house && <HouseById house={house} houseid={houseid} />}
      </div>
      {houses.length ? (
        <div>
          <div className="text-2xl font-bold">
            People also watch these Houses in {house.location}
          </div>
          <div className="mb-10 mt-10 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
            {houses.map((house, i) => (
              <Card details={house} key={i} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default houseid;
