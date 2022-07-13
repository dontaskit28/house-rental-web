import { useState } from "react";

const UploadHouse = () => {
  const styles = "p-2 border-2 border-gray-300 rounded";
  const [data, setData] = useState({
    location: "",
    buy: "",
    rent: "",
    description: "",
    image: "",
  });
  const upload = () => {};
  return (
    <div className="w-2/3 flex justify-center text-center m-auto mt-10">
      <form className="flex flex-col space-y-2 ">
        <div className="text-2xl font-semibold text-center">Upload House</div>
        <input
          className={styles}
          type="text"
          required
          placeholder="Location"
          onChange={(e) => setData({ location: e.target.value })}
        />
        <input
          className={styles}
          s
          type="text"
          required
          placeholder="Buying Price"
          onChange={(e) => setData({ buy: e.target.value })}
        />
        <input
          className={styles}
          type="text"
          required
          placeholder="Rent Price"
          onChange={(e) => setData({ rent: e.target.value })}
        />
        <input
          className={styles}
          type="text"
          required
          placeholder="Description"
          onChange={(e) => setData({ description: e.target.value })}
        />
        <input className={styles} type="file" accept="image/*" />
        <input
          className="bg-gray-300 p-2 rounded hover:cursor-pointer"
          type="submit"
          onClick={upload}
        />
      </form>
    </div>
  );
};

export default UploadHouse;
