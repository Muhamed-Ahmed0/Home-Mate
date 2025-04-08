import { Button } from "@/components/ui/button";
import { BusinessList } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessListComp = ({
  businessList,
  title,
}: {
  businessList: BusinessList[];
  title: string;
}) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {businessList.length > 0
          ? businessList.map((business, index) => (
              <Link
                href={`/details/${business.id}`}
                key={index}
                className="shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-[#7f57f1] transition-all ease-in-out duration-200 hover:scale-105"
              >
                <Image
                  src={business.images[0].url}
                  alt={business.contactPerson}
                  width={500}
                  height={200}
                  className="h-[150px] md:h-[200px] object-cover rounded-lg"
                />
                <div className="flex flex-col items-baseline p-3 gap-1">
                  <h2 className="p-1 bg-purple-200 text-[#7f57f1] rounded-full px-2 text-[12px]">
                    {business.category.name}
                  </h2>
                  <h2 className="font-bold text-lg">{business.name}</h2>
                  <h2 className="text-[#7f57f1]">{business.contactPerson}</h2>
                  <h2 className="text-gray-500 text-sm">{business.adress}</h2>
                  <Button className="bg-[#7f57f1] text-white hover:bg-purple-500 cursor-pointer rounded-lg mt-3">
                    Book Now
                  </Button>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-[370px] w-full bg-slate-200 rounded-xl animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default BusinessListComp;
