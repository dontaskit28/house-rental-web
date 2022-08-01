import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./../context/AuthContext";
import { useRouter } from "next/router";

export default function Signup() {
  const { createUser, signup } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    role: "tenant",
  });
  const Register = async (e) => {
    e.preventDefault();
    try {
      await signup(data.email,data.password);
      await createUser(data);
      router.push("/");
    } catch (err) {
      console.log("Error: ", err);
      alert(err)
    }
  };
  return (
    <div className="w-full max-w-sm m-auto mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={Register}
      >
        <div className="block text-center text-gray-800 text-2xl font-bold mb-4">
          Register
        </div>
        <div className="space-y-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                confirmPass: e.target.value,
              })
            }
          />
          <div className="flex items-center justify-around mb-4 py-2 px-3">
            <div className="flex space-x-2">
              <input
                type="radio"
                value="landloard"
                checked={data.role == "landloard"}
                onChange={(e) => {
                  setData({ ...data, role: e.target.value });
                }}
              />
              <p>Landloard</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="radio"
                value="tenant"
                checked={data.role == "tenant"}
                onChange={(e) => {
                  setData({ ...data, role: e.target.value });
                }}
              />
              <p>Tenant</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link href="/login">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Sign In
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
