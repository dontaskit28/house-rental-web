import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Card({ details }) {
  const router = useRouter();
  const viewHouse = useCallback(
    (houseId) => {
      router.push(`/house/${houseId}`);
    },
    [router]
  );
  return (
    <div>
      <div
        className="w-80 p-2 h-72 rounded flex flex-col justify-evenly hover:cursor-pointer"
        onClick={() => viewHouse(details._id)}>
        <Image
          className="rounded"
          src={details.image}
          alt="Some image"
          width={300}
          height={200}
        />
        <div className="flex justify-evenly">{details.location}</div>
        <div className="flex justify-evenly">
          <div>
            Buy: <span className="font-bold">${details.buy}</span>
          </div>
          <div>
            Rent: <span className="font-bold">${details.rent}/mon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
