import React from 'react'
import Noimg from "@/assets/noimg.jpeg"
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineZoomIn } from "react-icons/ai";


export default function LatestProducts({product}) {

  let {name, price, images }=product


  return (
    <div>
        <div className=" border-2 hover:border-primary rounded-xl relative">
            <div className="h-[85%]  bg-primary-shade rounded-t-xl">
              {/* <Image src={images[0]}  alt="product img" className='w-full aspect-square object-fill rounded-t-xl'  height={200} width={200} /> */}
              {
                images.length == 0 
                ?
                <Image src={Noimg}  alt="product img" className='w-full aspect-square object-fill rounded-t-xl'  height={200} width={200} />
                :
                <Image src={images[0]}  alt="product img" className='w-full aspect-square object-fill rounded-t-xl'  height={200} width={200} />
              }
            </div>
            <ul className="flex justify-between  items-center  p-4">
                <li className="text-secondary text-2xl">{name}</li>
                <li className="text-[#151875]">$ {price}</li>
            </ul>
            <ul className=' absolute top-3 left-2   gap-2'>
                <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 mb-4 rounded-full'><BsCart2 className=' hover:text-secondary  h-6 w-6 text-blue-gradient' /></li>
                <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 mb-4 rounded-full'><AiOutlineHeart className=' hover:text-secondary  h-6 w-6 text-blue-gradient'/></li>
                <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 mb-4 rounded-full'><AiOutlineZoomIn className='hover:text-secondary  h-6 w-6 text-blue-gradient'/></li>
            </ul>           
        </div>
    </div>
  )
}
