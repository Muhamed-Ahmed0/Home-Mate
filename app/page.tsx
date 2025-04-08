"use client";
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalAPI from "./_services/GlobalAPI";
import {
  GetCategoryResponse,
  Category,
  GetBusinessListResponse,
  BusinessList,
} from "@/types";
import BusinessListComp from "./_components/BusinessListComp";

const Home = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [businessList, setBusinessList] = useState<BusinessList[]>([]);

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

  // Get All Business Lists
  const getBussinessList = async (): Promise<void> => {
    GlobalAPI.getAllBusinessList()
      .then((res: GetBusinessListResponse) => {
        console.log(res.businessLists);
        setBusinessList(res.businessLists);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategoryList();
    getBussinessList();
  }, []);

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessListComp
        businessList={businessList}
        title="Popular Businesses"
      />
    </div>
  );
};

export default Home;
