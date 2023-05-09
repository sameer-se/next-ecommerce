import Image from 'next/image'
import Shell from '@/assets/shell.png'
import Wing from "@/assets/pngwing.png"
import Light from "@/assets/light.png"
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineZoomIn } from "react-icons/ai";
import TrandingProducts from '@/components/TrandingProducts';
import LatestProducts from '@/components/LatestProducts';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Home() {

  const [products,setProducts] = useState([]);
  const [tproducts, setTproducts] = useState([])


  useEffect(() => {
    axios.get('https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6')
    .then(res => {
      console.log(res.data.data[0].data);
      setProducts(res.data.data[0].data)
      
    })

  }, [])

  useEffect(() => {
    axios.get('https://ecommerce-sagartmg2.vercel.app/api/products/trending?per_page=6')
    .then(resp => {
      console.log(resp);
      setTproducts(resp)

    })
  

  }, [])
  



  return (
    <div>
      <main>
        {/* BANNER */}
        <div className="bg-[#F2F0FF]">
          <div className="container">
            <div className="lg:flex justify-between items-center relative">
              {/* <div>
                <Image src={Light} alt='light' className='absolute hidden  h-60 w-60  top-1 '/>
              </div> */}
              <div className="p-4 m-4 ">
                <p className="text-secondary mb-4 text-lg">Best Furniture For Your Castle....</p>
                <h1 className="text-6xl mb-4">New Furniture Collection <br /> Trends in 2023</h1>
                <p className="mb-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br /> in phasellus non in justo.</p>
                <button className="bg-secondary text-white w-[163px] h-[50px] hover:bg-primary">Shop Now</button>
              </div>
              <div className="flex p-4 m-4 justify-center items-center ">                        
                <div className="h-[300px] w-[300px] bg-circle  rounded-[50%] xl:h-[400px] xl:w-[400px]"></div>
                <div className="h-[300px] w-[300px] bg-circle rounded-[50%] ml-[-280px] mt-[-30px] xl:h-[400px] xl:w-[400px] xl:mt-[-40px] xl:ml-[-380px]"></div>
                <Image className='ml-[-300px] xl:ml-[-350px]' src={Shell} alt='shell ' height={300} width={300} ></Image>  
              </div>          
            </div>
          </div>
        </div>
          {/* PRODUCTS */}

          <div className='container'>
            <div className='mt-[50px] mb-[50px]'>
              {/* <p className='text-center text-4xl mb-[50px]'>Products</p> */}
              <div className='justify-center gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {
                  products.map(tproduct=>{
                    return <TrandingProducts key={tproduct._id}/>
                  })
                }
              </div>            
            </div>
          </div>
        {/* LETEST PRODUCTS */}
        <div className='container'>
          <div>
            <div>
              <p className='text-center text-primary font-bold text-4xl m-4'>Leatest Products</p>
              <ul className='flex gap-2 m-4 justify-center md:gap-8 '>
                <li className='text-primary hover:text-secondary'>New Arrival</li>
                <li className='text-primary hover:text-secondary'>Best Seller</li>
                <li className='text-primary hover:text-secondary'>Featured</li>
                <li className='text-primary hover:text-secondary'>Special</li>
              </ul>
            </div>
            {/* LEATEST PRODUCT ITEMS BOXS */}
            <div className='mt-4 p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {
                products.map(product=>{
                  return <LatestProducts product={product} key={product._id}/> 
                })
              }                           
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}