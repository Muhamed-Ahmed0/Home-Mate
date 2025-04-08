"use client";
import GlobalAPI from "@/app/_services/GlobalAPI";
import { Category, GetCategoryResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  // Get All Category Lists
  const getCategoryList = async (): Promise<void> => {
    GlobalAPI.getCategory()
      .then((res: GetCategoryResponse) => {
        console.log(res.categories);
        setCategoryList(res.categories);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };

  const params = usePathname();
  const category = params.split("/")[2];
  console.log(category);
  // Get All Business Lists

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    console.log(params);
    setSelectedCategory(category);
  }, [params]);
  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-[#7f57f1]">Categories</h2>
      {categoryList.map((category: Category, index: number) => (
        <Link
          href={`/search/${category.name}`}
          key={index}
          className={`flex gap-2 w-fit md:w-[300px] p-3 border rounded-lg mb-3 md:mr-10 hover:bg-purple-50 relative hover:text-[#7f57f1] hover:left-1 hover:shadow-md hover:border-[#7f57f1] items-center transition-all ease-in-out duration-200 cursor-pointer ${
            selectedCategory === category.name &&
            "bg-purple-50 text-[#7f57f1] border-[#7f57f1] left-1 shadow-md"
          }`}
        >
          <Image
            src={category.icon.url}
            alt="category"
            width={30}
            height={30}
          />
          <h2 className="hidden md:block">{category.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CategorySidebar;
