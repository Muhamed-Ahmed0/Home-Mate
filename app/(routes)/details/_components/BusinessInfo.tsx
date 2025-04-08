import { Button } from "@/components/ui/button";
import { BusinessList } from "@/types";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const BusinessInfo = ({ business }: { business: BusinessList }) => {
  useEffect(() => {
    console.log(business);
  }, [business]);
  return (
    business?.name && (
      <div className="md:flex gap-4 items-center">
        <Image
          src={business?.images[0]?.url}
          alt={business?.name}
          width={150}
          height={200}
          className="rounded-full h-[150px] object-cover"
        />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col mt-4 md:mt-0 items-baseline gap-3">
            <h2 className="text-[#7f57f1] bg-purple-100 rounded-full p-1 px-3 text-lg">
              {business?.category.name}
            </h2>
            <h2 className="font-bold text-[40px]">{business.name}</h2>
            <h2 className="flex items-center gap-2 text-lg text-gray-500">
              <MapPin /> {business.adress}
            </h2>
            <h2 className="flex items-center gap-2 text-lg text-gray-500">
              <Mail /> {business.email}
            </h2>
          </div>
          <div className="flex flex-col gap-5 items-end">
            <Button className="cursor-pointer bg-[#7f57f1] hover:bg-purple-500">
              <Share />
            </Button>
            <h2 className="flex items-center gap-2 text-xl text-[#7f57f1]">
              <User />
              {business.contactPerson}
            </h2>
            <h2 className="flex items-center gap-2 text-xl text-gray-500">
              <Clock />
              Available from 8:00 AM to 10:00 PM
            </h2>
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessInfo;
