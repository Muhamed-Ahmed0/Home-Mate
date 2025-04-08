"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AlignJustify, List } from "lucide-react";

const Header = ({ logo }) => {
  const { data } = useSession();
  console.log(data);
  const [menu, setMenu] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="p-5 shadow-md flex justify-between items-center rounded-3xl h-[80px]">
      <div className="flex items-center gap-20">
        <Image
          src={logo}
          height={100}
          width={150}
          alt="logo"
          className="w-[180px] h-auto"
        />
        <div className="md:flex items-center gap-6 hidden">
          <Link
            href="/"
            className="hover:scale-105 hover:text-[#7f57f1] cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/search/Cleaning"}
            className="hover:scale-105 hover:text-[#7f57f1] cursor-pointer"
          >
            Services
          </Link>
          <Link
            href={"#"}
            className="hover:scale-105 hover:text-[#7f57f1] cursor-pointer"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-7">
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={data.user.image}
                height={40}
                width={40}
                alt="Image"
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Bookings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => signIn("descope")}
            className="bg-[#7f57f1] text-white hover:bg-purple-500 cursor-pointer"
          >
            Login / Signup
          </Button>
        )}
        <div className="md:hidden">
          <AlignJustify
            className="size-10 text-black hover:bg-gray-400"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </div>
      <div
        className={`${
          menu ? "flex" : "hidden"
        } absolute top-0 right-0 z-50 w-[70%] h-screen bg-gray-100 menu`}
      >
        <h1
          className="relative top-10 left-10 font-bold border-2 rounded-4xl border-black p-1  w-fit h-fit text-4xl transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(false);
          }}
        >
          X
        </h1>
        <div className="w-full h-0.5 bg-gray-300 mt-32" />
        <div className="flex flex-col items-center justify-center mb-20 mr-[40%] w-full">
          <Link
            href="/"
            className="hover:scale-105 hover:text-[#7f57f1] cursor-pointer block text-center mt-10 text-3xl"
            onClick={() => {
              setMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            href={"/search/Cleaning"}
            className="hover:scale-105 hover:text-[#7f57f1] cursor-pointer block text-center mt-10 text-3xl"
            onClick={() => {
              setMenu(false);
            }}
          >
            Services
          </Link>
          <Link
            href={"#"}
            className="hover:scale-105 hover:text-[#7f57f1] cursor-pointer block text-center mt-10 text-3xl"
            onClick={() => {
              setMenu(false);
            }}
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
