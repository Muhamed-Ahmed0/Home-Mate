/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";
import { Category } from "@/types";
import Link from "next/link";

const CategoryList = ({ categoryList }: { categoryList: Category[] }) => {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categoryList.length > 0
        ? categoryList.map((category, index) => (
            <Link
              href={`/search/${category.name}`}
              className="flex flex-col items-center justify-center gap-2 p-5 bg-purple-100 rounded-xl cursor-pointer hover:scale-110 tranisition-all ease-in-out duration-200"
              key={index}
            >
              <Image
                src={category.icon.url}
                alt={"Image"}
                width={35}
                height={35}
              />
              <h2 className="text-[#7f57f1] font-normal">{category.name}</h2>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              className="h-[120px] w-full bg-slate-200 rounded-xl animate-pulse"
              key={index}
            ></div>
          ))}
    </div>
  );
};

export default CategoryList;
