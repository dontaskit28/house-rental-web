import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [{ email, password, confirmPass }, setData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  return (
    <div className="w-full max-w-sm m-auto mt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="block text-center text-gray-800 text-2xl font-bold mb-4">
          Register
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setData({ email: e.target.value, password, confirmPass })
            }
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="*********"
            onChange={(e) =>
              setData({ password: e.target.value, email, confirmPass })
            }
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="*********"
            onChange={(e) =>
              setData({ confirmPass: e.target.value, password, email })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign Up
          </button>
          <Link href="/login">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Sign In
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
  // return (
  //   <div className="w-2/4 mt-24 m-auto">
  //     <form className="flex flex-col items-center p-2 space-y-4">
  //       <label className="text-2xl font-bold">Register</label>
  //       <input
  //         className=" md:w-2/4 p-2 border-gray-300 border-2 rounded"
  //         type="email"
  //         placeholder="Email"
  //         required
  //         onChange={(e) =>
  //           setData({ email: e.target.value, password, confirmPass })
  //         }
  //       />
  //       <input
  //         className="md:w-2/4 p-2 border-gray-300 border-2 rounded"
  //         type="password"
  //         placeholder="Password"
  //         required
  //         onChange={(e) =>
  //           setData({ password: e.target.value, email, confirmPass })
  //         }
  //       />
  //       <input
  //         className="md:w-2/4 p-2 border-gray-300 border-2 rounded"
  //         type="password"
  //         placeholder="Confirm Password"
  //         required
  //         onChange={(e) =>
  //           setData({ confirmPass: e.target.value, email, password })
  //         }
  //       />
  //       <button className="md:w-2/4 w-3/4 p-2 bg-gray-400 rounded">
  //         Signup
  //       </button>
  //       <div className="md:w-2/4 flex justify-between">
  //         <span className="p-2">Already registered?</span>
  //         <Link href="/login">
  //           <a className="hover:bg-slate-300 rounded p-2">Login</a>
  //         </Link>
  //       </div>
  //     </form>
  //   </div>
  // );
}
