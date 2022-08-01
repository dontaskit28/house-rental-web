
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import UploadHouse from "./components/UploadHouse";

const uploadHouse = () => {
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        user.isSeller ? (
          <UploadHouse />
        ) : (
          <div className="flex flex-col space-y-2 items-center justify-center mt-10">
            <h1 className="text-2xl font-bold">
              You Dont't Have Permission to Upload a House
            </h1>
            <Link href="/">
              <a className="px-10 py-3 bg-gray-300 rounded-md">Home</a>
            </Link>
          </div>
        )
      ) : (
        <div className="flex flex-col space-y-2 items-center justify-center mt-10">
          <h1 className="text-2xl font-bold">You are Not Signed In</h1>
          <Link href="/login">
            <a className="px-10 py-3 bg-gray-300 rounded-md">Login</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default uploadHouse;
