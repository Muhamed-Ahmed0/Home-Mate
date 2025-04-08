"use client";
import GlobalAPI from "@/app/_services/GlobalAPI";
import { Button } from "@/components/ui/button";
import {
  BusinessList,
  BusinessListByCategory,
  GetBusinessListByCategoryResponse,
} from "@/types";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookingSection from "./BookingSection";

const SuggestedBusinessList = ({ business }: { business: BusinessList }) => {
  const [businnessList, setBusinessList] = useState<BusinessListByCategory[]>(
    []
  );
  const getBusinessListByCategory = async (): Promise<void> => {
    try {
      const res = await GlobalAPI.getBusinessListByCategory(
        business.category.name
      );
      const typedRes = res as GetBusinessListByCategoryResponse;
      console.log(typedRes);
      setBusinessList(typedRes.businessLists);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (business) {
      getBusinessListByCategory();
    }
  }, [business]); // Added dependency array to re-run effect if 'business' prop changes

  return (
    <div className="md:pl-10">
      <BookingSection business={business}>
        <Button className="bg-[#7f57f1] hover:bg-purple-500 cursor-pointer w-full flex items-center gap-2 text-white">
          <NotebookPen />
          Book Appointment
        </Button>
      </BookingSection>
      <div className="hidden md:block">
        <h2 className="font-bold text-lg my-3 ">Similar Businesses</h2>
        <div className="">
          {businnessList && businnessList.length > 0 ? (
            businnessList.map(
              (
                item,
                index // Changed 'business' to 'item' for clarity
              ) => (
                <Link
                  href={`/details/${item.id}`}
                  key={index}
                  className="w-52 flex gap-2 mb-4 hover:border border-[#7f57f1] rounded-lg p-2 cursor-pointer hover:shadow"
                >
                  <Image
                    src={item?.images[0]?.url || "/placeholder.png"} // Added optional chaining and placeholder
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover "
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.png"; // Fallback on error
                    }}
                  />
                  <div>
                    <h2 className="font-bold ">{item?.name}</h2>
                    <h2 className="text-[#7f57f1]">{item?.contactPerson}</h2>
                    <h2 className="text-gray-400">{item?.adress}</h2>
                  </div>
                </Link>
              )
            )
          ) : (
            <div>
              <h2 className="text-gray-400">No Similar Business Found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestedBusinessList;
