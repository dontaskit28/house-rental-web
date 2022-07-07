import { getHouseById } from "../../lib/allHouses";
import Image from "next/image";

const HouseId = ({ house }) => {
  return (
    <div className="flex justify-center border-2 border-black-500">
      <div className="flex">
        <Image
          src={house.image}
          alt={house.location}
          width={350}
          height={350}
        />
        <div className="flex flex-col">
          <div>Buy: ${house.buy}</div>
          <div>Rent: ${house.rent}</div>
          <div>Location: {house.location}</div>
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
