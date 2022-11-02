import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        className=" h-full w-full "
        width="0"
        height="0"
        sizes="80vh"
        src="https://links.papareact.com/0fm"
      />
      <div className="absolute top-1/2 w-full text-center ">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="font-bold hover:shadow-xl my-3 text-purple-500 bg-white rounded-full shadow-md px-10 py-4">I'm flexible</button>
      </div>
    </div>
  );
};

export default Banner;
