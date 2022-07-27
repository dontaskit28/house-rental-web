import { getHouseById } from "../../lib/allHouses";

const HouseId = ({house}) => {
  return (
    <>
    <div>Rent: {house.rent}</div>
    <div>Buy: {house.buy}</div>
    </>
  )
}

export default HouseId;

export const getServerSideProps = async (context) => {
    const houseId = context.params.houseId;
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