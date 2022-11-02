import Image from "next/image";
import React from "react";
Image;
const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform duration-300 ease-out">
      <div className="relative h-60 w-60">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          width={220}
          height={120}
        />
      </div>
      <h3 className="text-2xl mt-2">{title}</h3>
    </div>
  );
};

export default MediumCard;
