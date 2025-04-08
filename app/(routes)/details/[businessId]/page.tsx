/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import GlobalAPI from "@/app/_services/GlobalAPI";
import { BusinessList, GetBusinessByIdResponse } from "@/types";
/* eslint-disable react-hooks/rules-of-hooks */
import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";
import BusinessDescription from "../_components/BusinessDescription";

const page = ({ params }: { params: { businessId: string } }) => {
  const { data, status } = useSession();
  const [businessList, setBusinessList] = useState<BusinessList>();
  const getBusinessById = async (): Promise<void> => {
    GlobalAPI.getBusinessById(params.businessId)
      .then((res) => {
        const typedRes = res as GetBusinessByIdResponse;
        console.log("list:", typedRes.businessList);
        setBusinessList(typedRes.businessList);
        console.log("list1:", businessList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkAuth = () => {
    if (status === "loading") {
      return <div>Loading...</div>;
    } else if (status === "unauthenticated") {
      signIn("descope");
    }
  };
  useEffect(() => {
    getBusinessById();
    checkAuth();
  }, []);
  return (
    status == "authenticated" && (
      <div className="py-8 px-10 md:py-20 md:px-36">
        {businessList && <BusinessInfo business={businessList} />}
        <div className="grid grid-cols-3 mt-16">
          <div className="col-span-3 md:col-span-2 order-last md:order-first">
            {businessList && <BusinessDescription business={businessList} />}
          </div>
          <div className="hidden md:block">
            {businessList && <SuggestedBusinessList business={businessList} />}
          </div>
        </div>
      </div>
    )
  );
};

export default page;
