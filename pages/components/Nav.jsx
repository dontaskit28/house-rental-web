import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

export default function Nav() {
  const { user, logout } = useAuth();
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
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? "hover:cursor-pointer bg-gray-300 px-4 py-2 rounded"
                : "hover:cursor-pointer px-4 py-2 rounded"
            }
          >
            Home
          </a>
        </Link>
        {user ? (
          <div className="flex">
            <Link href={user && user.isSeller ? "/uploadHouse" : "/wishlist"}>
              <a
                className={
                  router.pathname == "/uploadHouse"
                    ? "hover:cursor-pointer bg-gray-300 px-4 py-2 rounded"
                    : router.pathname == "/wishlist"
                    ? "hover:cursor-pointer bg-gray-300 px-4 py-2 rounded"
                    : "hover:cursor-pointer px-4 py-2 rounded"
                }
              >
                {user && user.isSeller ? "Upload" : "Wishlist"}
              </a>
            </Link>
            <Link href="/profile">
              <a
                className={
                  router.pathname == "/profile"
                    ? "hover:cursor-pointer bg-gray-300 px-4 py-2 rounded"
                    : "hover:cursor-pointer px-4 py-2 rounded"
                }
              >
                {user.name}
              </a>
            </Link>
            <div
              className="hover:cursor-pointer  hover:bg-gray-300 py-2 px-4 rounded-md"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </div>
          </div>
        ) : (
          <Link href="/login">
            <a
              className={
                router.pathname == "/login"
                  ? "hover:cursor-pointer bg-gray-300 px-4 py-2 rounded"
                  : "hover:cursor-pointer px-4 py-2 rounded"
              }
            >
              Login
            </a>
          </Link>
        )}
      </div>
      {!isOpen ? (
        <div
          onClick={() => SetIsOpen(() => !isOpen)}
          className="md:hidden px-4"
        >
          <GiHamburgerMenu className="w-8 h-8 " />
        </div>
      ) : (
        <div
          onClick={() => SetIsOpen(() => !isOpen)}
          className="md:hidden px-4 "
        >
          <AiOutlineClose className="w-8 h-8 text-white" />
        </div>
      )}

      {isOpen && (
        <div className="absolute flex rounded-lg flex-col bg-white top-14 p-5 max-w-screen w-full">
          {routes.map((e, i) => (
            <Link href={e.route} key={i}>
              <a
                onClick={() => SetIsOpen(false)}
                className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
              >
                {e.name}
              </a>
            </Link>
          ))}
          {user ? (
            <div
              className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
              onClick={() => {
                SetIsOpen(false);
                logout();
                router.push("/login");
              }}
            >
              {user.name}
            </div>
          ) : (
            <Link href="/login">
              <a
                onClick={() => SetIsOpen(false)}
                className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
              >
                Login
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
