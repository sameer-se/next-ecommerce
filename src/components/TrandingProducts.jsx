import React from 'react'
import Wing from "@/assets/pngwing.png"
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineZoomIn } from "react-icons/ai";

export default function TrandingProducts() {
  return (
    <div>
        <div className=" border-2 hover:border-primary rounded-xl relative">
            <div className="h-[85%] justify-center items-center bg-primary-shade rounded-t-xl">
              <Image src={Wing} alt="product img" />
            </div>
            <ul className="flex justify-between  items-center  p-4">
                <li className="text-secondary text-2xl">Cantilever chair</li>
                <li className="text-[#151875]">$42.50</li>
            </ul>
            <ul className=' absolute top-3 left-2   gap-2'>
                <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 rounded-full'><BsCart2 className=' hover:text-secondary  h-6 w-6 text-blue-gradient' /></li>
                <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 rounded-full'><AiOutlineHeart className=' hover:text-secondary  h-6 w-6 text-blue-gradient'/></li>
                <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 rounded-full'><AiOutlineZoomIn className='hover:text-secondary  h-6 w-6 text-blue-gradient'/></li>
            </ul>           
        </div>
    </div>
  )
}
