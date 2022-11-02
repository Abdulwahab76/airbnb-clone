import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className=" relative py-16 cursor-pointer">
      <div className="relative  w-[100%]">
        <Image
          className="object-cover  rounded-2xl  w-[100%]"
          width={0}
          height={0}
          src={img}
     layout='fill'
          sizes="100vw"
       
        />
      </div>
      <div className="absolute md:top-28 top-20  left-12 ">
        <h3 className="md:text-4xl mb-3 w-64 text-2xl">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
