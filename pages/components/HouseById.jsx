import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection,getDocs,updateDoc,doc } from "firebase/firestore";
import { useAuth } from "./../../context/AuthContext";

const HouseById = ({ house }) => {
  const { user } = useAuth();
  const [owner, setOwner] = useState(null);
  useEffect(() => {
    const getUsers = async () =>{
        const query = collection(db, "users");
        const users = await getDocs(query);
        users.docs.map((doc) => {
            if (doc.data().email==house.owner) return setOwner(doc)
        });
    }
    getUsers();
  },[]);
  const Request = async() => {
    // const userRef = doc(db,"users",owner.id)
    // await updateDoc(userRef)
  };
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={house.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {"House  in " + house.location}
              </h1>
              <div className="flex mb-4"></div>
              <div className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </div>
              <div className="flex justify-around mt-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Buy - &#x20b9; {house.buy}
                </span>
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rent - &#x20b9; {house.rent}
                </span>
              </div>
              <button className="flex mt-8 m-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={Request} >
                Send Request to Owner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseById;
