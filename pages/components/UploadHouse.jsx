import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from 'next/router';

const UploadHouse = () => {
  const [data, setData] = useState({
    location: "",
    buy: "",
    rent: "",
    description: "",
    image: "",
  });
  const {uploadHome} = useAuth()
  const router = useRouter();
  const handleUpload = async(e) => {
    e.preventDefault();
    console.log(data);
    try {
      await uploadHome(data);
      alert("Uploaded House Successfully...");
      router.push("/")
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="flex flex-col mt-10 items-center justify-center">
      <form
        className="bg-white shadow-md w-full md:w-2/3 xl:w-1/3 rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleUpload}
      >
        <div className="block text-center text-gray-800 text-2xl font-bold mb-4">
          Upload House
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location"
            required
            onChange={(e) => setData({ ...data, location: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Buy
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="price for buy"
            required
            onChange={(e) => setData({ ...data, buy: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rent
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="price for rent"
            required
            onChange={(e) => setData({ ...data, rent: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
            required
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Image"
            required
            accept="image/*"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};
export default UploadHouse;
