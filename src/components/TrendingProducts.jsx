import React from 'react'
import Wing from "@/assets/pngwing.png"
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineZoomIn } from "react-icons/ai";

export default function TrendingProducts({trending}) {
  return (
    <div>
       <div className='pb-2'>
          <div className="h-[360px] w-[300px] border-2 rounded-xl hover:border-primary relative">
            <div className="h-[70%] bg-[#F6F7FB] rounded-t-xl">
              <Image src={Wing} alt="product img" height={300} width={300} className="h-full w-full " />
            </div>
            <ul className="text-center">
                <li className="text-secondary text-2xl ">Cantilever chair</li>
                <li className="text-[#151875]">code-Y523201</li>
                <li className="text-[#151875]">$42.50</li>
            </ul>
            <ul className='flex absolute top-3 left-2   gap-2'>
              <li className='bg-primary-shade w-8 h-8 justify-center items-center p-2 rounded-full'><BsCart2 className=' hover:text-secondary  h-4 w-4 text-blue-gradient' /></li>
              <li className='bg-primary-shade w-8 h-8 justify-center items-center p-2 rounded-full'><AiOutlineHeart className=' hover:text-secondary  h-4 w-4 text-blue-gradient'/></li>
              <li className='bg-primary-shade w-8 h-8 justify-center items-center p-2 rounded-full'><AiOutlineZoomIn className='hover:text-secondary  h-4 w-4 text-blue-gradient'/></li>
            </ul>           
          </div>
        </div>
    </div>
  )
}
export async function getServerSideProps() {
  let res = await axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/trending?per_page=6")
  return {
      props:{
          trending:res.data[0].data
      }
  }
}
