import Image from "next/image";
import React from "react";
Image;
const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center hover:bg-gray-100  cursor-pointer mt-1 mb-5 space-x-4 rounded-xl hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-10 w-10 ">
        <Image layout='fill' src={img} width={45} height={45} className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
