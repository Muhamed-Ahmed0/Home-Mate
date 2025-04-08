"use client";
import BusinessListComp from "@/app/_components/BusinessListComp";
import GlobalAPI from "@/app/_services/GlobalAPI";
import {
  BusinessListByCategory,
  GetBusinessListByCategoryResponse,
  Params,
} from "@/types";
import React, { useEffect, useState } from "react";

const BusinessByCategory = ({ params }: { params: Params }) => {
  const [businnessList, setBusinessList] = useState<BusinessListByCategory[]>(
    []
  );
  const getBusinessListByCategory = async (): Promise<void> => {
    GlobalAPI.getBusinessListByCategory(params.category)
      .then((res) => {
        const typedRes = res as GetBusinessListByCategoryResponse;
        console.log(typedRes);
        setBusinessList(typedRes.businessLists);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(params.category);
    getBusinessListByCategory();
  }, [params]);
  return (
    <div>
      <BusinessListComp businessList={businnessList} title={params.category} />
    </div>
  );
};

export default BusinessByCategory;
