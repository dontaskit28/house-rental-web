import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Profile",
      route: "/profile",
    },
    {
      name: "Upload",
      route: "/uploadHouse",
    },
    {
      name: "Login",
      route: "/login",
    },
    ,
  ];
  const [isOpen, SetIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 border-b-2 bg-white z-10 h-14  md:space-x-8 items-center w-full rounded-lg flex ">
      <div className=" pl-8">
        <ImHome className="h-8 w-8" />
      </div>
      <Link href="/">
      <div className="text-center md:text-start hover:cursor-pointer font-semibold m-auto flex-1 text-2xl">
        WELCOMES YOU
      </div>
      </Link>
      <div className="md:flex hidden space-x-5 p-2">
        {routes.map((e, i) => (
          <Link href={e.route} key={i}>
            <a
              className={
                e.route == router.pathname
                  ? "hover:cursor-pointer bg-gray-300 px-4 py-2 rounded"
                  : "hover:cursor-pointer px-4 py-2 rounded"
              }>
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
        <div className="absolute flex rounded-lg flex-col bg-white top-14 p-5 max-w-screen w-full">
          {routes.map((e, i) => (
            <Link href={e.route} key={i}>
              <a
                onClick={() => SetIsOpen(false)}
                className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md">
                {e.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
