import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-xs m-auto mt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="block text-center text-gray-800 text-2xl font-bold mb-4">
          Login
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign In
          </button>
          <Link href="/signup">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Sign Up
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
  // return (
  //   <div className="w-2/4 mt-24 m-auto">
  //     <form className="flex flex-col items-center p-2 space-y-4">
  //       <label className="text-2xl font-bold">Login</label>
  //       <input
  //         className=" sm:w-2/4 p-2 border-gray-300 border-2 rounded"
  //         type="email"
  //         placeholder="Email"
  //         required
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         className="sm:w-2/4 p-2 border-gray-300 border-2 rounded"
  //         type="password"
  //         placeholder="Password"
  //         required
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button className="sm:w-2/4 w-full p-2 bg-gray-400 rounded">
  //         Login
  //       </button>
  //       <div className="sm:w-2/4 flex justify-between">
  //         <span className="p-2">Dont have an account?</span>
  //         <Link href="/signup">
  //           <a className="hover:bg-slate-300 rounded p-2"> Sign up</a>
  //         </Link>
  //       </div>
  //     </form>
  //   </div>
  // );
}
