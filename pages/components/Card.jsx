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
    <div className="flex justify-center">
      <div
        className="rounded-lg shadow-lg bg-white max-w-sm hover:cursor-pointer"
        onClick={() => viewHouse(details._id)}>
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <Image
            className="rounded-t-lg hover:scale-125"
            src={details.image}
            alt=""
            height={250}
            width={390}
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {details.location}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <div className="flex justify-evenly">
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              {"Buy : " + details.buy + "/-"}
            </button>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              {"Rent : " + details.rent + "/-"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="rounded-xl shadow-md hover:scale-110">
  //     <div
  //       className="w-80 p-4 h-96 rounded flex flex-col justify-evenly hover:cursor-pointer"
  //       onClick={() => viewHouse(details._id)}>
  //       <Image
  //         className="rounded"
  //         src={details.image}
  //         alt="Some image"
  //         width={300}
  //         height={200}
  //       />
  //       <div className="flex justify-evenly">{details.location}</div>
  //       <div className="flex justify-evenly font-semibold">
  //         {details.bhk + " BHK"}
  //       </div>
  //       <div className="flex justify-evenly">
  //         <div>
  //           Buy:{" "}
  //           <span className="font-bold">
  //             {details.buy == "NA" ? "NA" : "$" + details.buy}
  //           </span>
  //         </div>
  //         <div>
  //           Rent: <span className="font-bold">${details.rent}/mon</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
