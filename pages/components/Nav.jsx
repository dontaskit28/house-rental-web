import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Nav() {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Login",
      route: "/login",
    },
    ,
    {
      name: "Profile",
      route: "/profile",
    },
    ,
    {
      name: "About",
      route: "/about",
    },
    ,
  ];
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <div className=" sticky top-0 z-10 h-16  md:space-x-8 items-center w-full rounded-lg text-white flex bg-gradient-to-r from-fuchsia-600 to-pink-600">
      <div className=" pl-8">
        <ImHome className="h-8 w-8" />
      </div>
      <div className="text-center md:text-start font-semibold m-auto flex-1 text-2xl">
        WELCOMES YOU
      </div>
      <div className="md:flex hidden space-x-5">
        {routes.map((e, i) => (
          <Link href={e.route} key={i}>
            <a className="hover:cursor-pointer hover:bg-pink-500 px-4 py-2 rounded">
              {e.name}
            </a>
          </Link>
        ))}
      </div>
      {!isOpen ? (
        <div
          onClick={() => SetIsOpen(() => !isOpen)}
          className="md:hidden px-4">
          <GiHamburgerMenu className="w-8 h-8 " />
        </div>
      ) : (
        <div
          onClick={() => SetIsOpen(() => !isOpen)}
          className="md:hidden px-4 ">
          <AiOutlineClose className="w-8 h-8 text-white" />
        </div>
      )}

      {isOpen && (
        <div className="absolute flex rounded-lg flex-col bg-gradient-to-r from-fuchsia-600 to-pink-600 top-16 p-5 max-w-screen w-full">
          {routes.map((e, i) => (
            <Link href={e.route} key={i}>
              <a className="hover:cursor-pointer hover:bg-pink-500 p-2 rounded-md">
                {e.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
