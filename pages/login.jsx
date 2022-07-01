import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-2/4 mt-24 m-auto">
      <form className="flex flex-col items-center p-2 space-y-4">
        <label className="text-2xl font-bold">Login Form</label>
        <input
          className=" sm:w-2/4 p-2 border-gray-300 border-2 rounded"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="sm:w-2/4 p-2 border-gray-300 border-2 rounded"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="sm:w-2/4 w-full p-2 bg-gray-400 rounded">
          Login
        </button>
        <div className="sm:w-2/4 flex justify-between">
          <span className="p-2">Dont have an account?</span>
          <Link href="/signup">
            <a className="hover:bg-slate-300 rounded p-2"> Sign up</a>
          </Link>
        </div>
      </form>
    </div>
  );
}
