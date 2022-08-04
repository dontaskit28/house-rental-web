import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";

export default function Card({ details }) {
  const router = useRouter();
  const [fav, setFav] = useState(false);
  const viewHouse = useCallback(
    (houseId) => {
      router.push(`/house/${houseId}`);
    },
    [router]
  );
  const wishlist = () => {
    setFav(!fav);
  };
  return (
    <div className="flex justify-center hover:shadow-lg group ">
      <div className="rounded-lg shadow-md bg-white max-w-sm">
        <Image
          className="rounded-t-lg group-hover:scale-[102%] hover:cursor-pointer"
          onClick={() => viewHouse(details.id)}
          src={details.image}
          alt=""
          height={250}
          width={390}
        />
        <div className="p-6">
          <div className="flex justify-between">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {details.location}
            </h5>
            <div onClick={wishlist} className="hover:cursor-pointer">
              {fav ? (
                <MdFavorite fill="red" size={30} />
              ) : (
                <MdFavoriteBorder size={30} />
              )}
            </div>
          </div>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build
          </p>
          <div className="flex justify-evenly">
            <div>{"Buy : " + details.buy + "/-"}</div>
            <div>{"Rent : " + details.rent + "/-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
