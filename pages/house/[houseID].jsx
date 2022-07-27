import { getHouseById } from "../../lib/allHouses";
import Image from "next/image";
import Link from "next/link";

const HouseId = ({ house }) => {
  return (
    <div className="flex h-96 w-3/5 m-auto items-center border-2 shadow-md border-black-500 rounded-md mt-20 p-4">
      <div className="flex items-center gap-10">
        <Image
          src={house.image}
          alt={house.location}
          width={800}
          height={800}
          className="rounded-md"
        />
        <div className="flex flex-col gap-5">
          <div className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            voluptatum iste totam ullam reprehenderit non repudiandae,
            reiciendis voluptatem magni quae ea sint. At sapiente suscipit quo
            qui iste explicabo commodi?
          </div>
          <div className="text-2xl font-bold">
            Buy: {house.buy == "NA" ? "NA" : "$" + house.buy}
          </div>
          <div className="text-2xl font-bold">Rent: ${house.rent}/month</div>
          <div className="text-2xl font-bold">Location: {house.location}</div>
          <Link href={`/checkout/${house._id}`}>
            <button className="bg-gray-300 p-2 border-0 rounded-md">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseId;

export const getServerSideProps = async (context) => {
  const houseId = context.params.houseID;
  const house = await getHouseById(houseId);
  let notFound = false;
  if (!house) {
    notFound = true;
  }
  return {
    notFound,
    props: {
      house,
    },
  };
};
