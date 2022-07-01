import Card from "./components/Card";

export default function Home() {
  const details = {
    image: "/../public/a.jpg",
    location: "RGUKT, Nuzvid",
    buy: 9999,
    rent: 999,
  };
  let arr = [];
  for (var i = 0; i < 8; i++) arr.push(details);
  return (
    <div className="mt-10 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3">
      {[
        arr.map((details, i) => (
          <div key={i}>
            <Card details={details} />
          </div>
        )),
      ]}
    </div>
  );
}
