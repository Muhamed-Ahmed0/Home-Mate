import { BusinessList } from "@/types";

import React from "react";

const BusinessDescription = ({ business }: { business: BusinessList }) => {
  return (
    business?.name && (
      <div>
        <h2 className="font-bold text-[25px]">Description</h2>
        <p className="mt-4 text-lg text-gray-600">{business.about}</p>
        <h2 className="font-bold text-[25px] mt-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {business?.images.map((image, index) => (
            <div
              className="rounded-2xl relative flex md:flex-row items-center justify-center bg-green-400 w-full h-[250px] mt-4"
              key={index}
            >
              <h2 className="text-3xl font-bold text-center">Image Here</h2>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default BusinessDescription;
