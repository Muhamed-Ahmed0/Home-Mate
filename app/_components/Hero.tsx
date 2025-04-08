import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center gap-3 flex-col justify-center pt-10 pb-7">
      <h2 className="font-bold text-[46px] text-center">
        Fast{" "}
        <span className="inline-block rotate-6 hover:rotate-0 transition-all ease-in-out duration-500 text-[#7f57f1]">
          Repairs
        </span>{" "}
        & <span className="text-[#7f57f1]">Spotless Cleaning</span> – All in
        <br />
        One App!
      </h2>
      <h2 className="text-gray-600 font-semibold text-xl">
        Explore best home services and repairs !
      </h2>
      <div className="mt-4 flex gap-4 items-center">
        <Input placeholder="Search" className="rounded-full md:w-[350px]" />
        <Button className="rounded-full bg-[#7f57f1] hover:bg-purple-500 h-[45px] w-[45px] cursor-pointer">
          <Search className="size-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
