import Image from 'next/image'
import React from 'react'
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline'
const InfoCard = ({ img, location, title, description, price,star,total }) => {
  return (
    <div className='flex justify-center flex-wrap md:flex-nowrap py-5 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        <div className='flex relative h-[180px] w-[70%] md:w-72 md:h-[180px] flex-shrink-0 md:h-30 '>
            <Image className='rounded-lg mb-2 md:mb-0 ' alt={location} sizes='100vh' width={500} height={0} src={img} layout='fill' />
        </div>
        <div className='flex flex-col flex-grow pl-5'>
          <div className='flex justify-between '>
            <p >{location}</p>
            <HeartIcon className='h-6 cursor-pointer'/>
          </div>
          <h4 className='text-xl'>{title}</h4>
          <div className='border-b w-10 pt-2'/>
          <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
          <div className='flex justify-between pt-5'>
            <p className='flex items-center'>
              <StarIcon className='h-5 text-red-400'/>
              {star}
            </p>
            <div>
              <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
              <p className='text-right  font-extralight'>{total}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InfoCard