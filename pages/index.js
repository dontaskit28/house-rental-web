import { getAllHouses } from "../lib/allHouses";
import Card from "./components/Card";

export default function House({ houses }) {
  return (
    <div className="mt-10 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3">
      {[houses.map((house) => <Card details={house} key={house._id} />)]}
    </div>
  );
}

export const getServerSideProps = async () => {
  const houses = await getAllHouses();
  return {
    props: {
      houses,
    },
  };
};
