import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [{ email, password, confirmPass }, setData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  return (
    <div className="w-2/4 mt-24 m-auto">
      <form className="flex flex-col items-center p-2 space-y-4">
        <label className="text-2xl font-bold">Registration Form</label>
        <input
          className=" md:w-2/4 p-2 border-gray-300 border-2 rounded"
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setData({ email: e.target.value, password, confirmPass })
          }
        />
        <input
          className="md:w-2/4 p-2 border-gray-300 border-2 rounded"
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setData({ password: e.target.value, email, confirmPass })
          }
        />
        <input
          className="md:w-2/4 p-2 border-gray-300 border-2 rounded"
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) =>
            setData({ confirmPass: e.target.value, email, password })
          }
        />
        <button className="md:w-2/4 w-3/4 p-2 bg-gray-400 rounded">
          Signup
        </button>
        <div className="md:w-2/4 flex justify-between">
          <span className="p-2">Already registered?</span>
          <Link href="/login">
            <a className="hover:bg-slate-300 rounded p-2">Login</a>
          </Link>
        </div>
      </form>
    </div>
  );
}
