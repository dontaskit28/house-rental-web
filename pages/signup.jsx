import Link from "next/link";
import { useState } from "react";
import axios from 'axios';


export default function Signup() {
  const [{ first_name,last_name,user_name,email, password, confirmPass }, setData] = useState({
    first_name:"",
    last_name:"",
    user_name:"",
    email: "",
    password: "",
    confirmPass: "",
  });
  const Register = async (e) =>{
    e.preventDefault();
    if (confirmPass != password){
      return alert("Password must be same")
    }
    const data ={
      first_name,last_name,user_name,email,password,
    }
    console.log(data);
    try{
      const response = await axios({
        url:"https://rentalweb.herokuapp.com/auth/register",
        method:"POST",
        mode:'no-cors',
        data:data,
        headers:{
          'Content-Type':'application/json',
          'Allow-Control-Allow-Origin':'*',
        },
      })
      console.log(response);
    }catch(err){
      console.log("Error",err);
    }
  }
  return (
    <div className="w-full max-w-sm m-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={Register}>
        <div className="block text-center text-gray-800 text-2xl font-bold mb-4">
          Register
        </div>
        <div className="space-y-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name"
            required
            onChange={(e) =>
              setData({ first_name: e.target.value, password, confirmPass,email,last_name,user_name })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) =>
              setData({ last_name: e.target.value, password, confirmPass,email,first_name,user_name })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="user_name"
            required
            onChange={(e) =>
              setData({ user_name: e.target.value, password, confirmPass,email,last_name,first_name })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setData({ email: e.target.value, password, confirmPass,last_name,first_name,user_name })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({ password: e.target.value, email, confirmPass,last_name,first_name,user_name  })
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              setData({ confirmPass: e.target.value, email, password,last_name,first_name,user_name  })
            }
          />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
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
