import Image from 'next/image'
import Shell from '@/assets/shell.png'
import Wing from "@/assets/pngwing.png"
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineZoomIn } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <header>
      </header>


      <main>
        {/* BANNER */}
        <div className="bg-[#F2F0FF]">
          <div className="container">
            <div className="lg:flex justify-between items-center">
              <div className="p-4 m-4 ">
                <p className="text-secondary mb-2">Best Furniture For Your Castle....</p>
                <h1 className="text-4xl mb-2">New Furniture Collection <br /> Trends in 2023</h1>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br /> in phasellus non in justo.</p>
                <button className="bg-secondary text-white w-[163px] h-[50px] hover:bg-primary">Shop Now</button>
              </div>
              <div className="flex p-4 m-4 justify-center items-center ">                        
                <div className="h-[300px] w-[300px] bg-circle  rounded-[50%] "></div>
                <div className="h-[300px] w-[300px] bg-circle rounded-[50%] ml-[-280px] mt-[-30px] "></div>
                <Image className='ml-[-300px]' src={Shell} alt='shell' height={300} width={300}></Image>  
              </div>          
            </div>
          </div>
        </div>
          {/* PRODUCTS */}
          <div className='container'>
            <div className='mt-[50px] mb-[50px] justify-center items-center'>
              {/* <p className='text-center text-4xl mb-[50px]'>Products</p> */}
              <div className='p-4 flex-wrap md:flex justify-between'>
                  {/* PRODUCTS 1*/}
                <div className='pb-2'>
                  <div className="h-[360px] w-[300px] border-2 rounded-xl hover:border-primary relative">
                    <div className="h-[70%] bg-[#F6F7FB] rounded-t-xl">
                      <Image src={Wing} alt="product img" className="h-full w-full " />
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
                {/* PRODUCT 2 */}
                <div className='pb-2'>
                  <div className="h-[360px] w-[300px] border-2 rounded-xl hover:border-primary relative">
                      <div className="h-[75%] justify-center items-center bg-[#F6F7FB] rounded-t-xl">
                      <Image src={Wing} alt="product img" className="h-full w-full "  />

                      </div>
                      <ul className="text-center">
                          <li className="text-secondary text-2xl">Cantilever chair</li>
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
                {/* PRODUCT 3 */}
                <div className='pb-2'>
                  <div className="h-[360px] w-[300px] border-2 rounded-xl hover:border-primary relative">
                      <div className="h-[75%] justify-center items-center bg-[#F6F7FB] rounded-t-xl">
                      <Image src={Wing} alt="product img" className="h-full w-full "  />

                      </div>
                      <ul className="text-center">
                          <li className="text-secondary text-2xl">Cantilever chair</li>
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
                {/* PRODUCT 4 */}
                <div className='pb-2'>
                  <div className="h-[360px] w-[300px] border-2 rounded-xl hover:border-primary relative">
                      <div className="h-[75%] justify-center items-center bg-[#F6F7FB] rounded-t-xl">
                      <Image src={Wing} alt="product img" className="h-full w-full " />

                      </div>
                      <ul className="text-center">
                          <li className="text-secondary text-2xl">Cantilever chair</li>
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
          </div>
        </div>
        {/* LETEST PRODUCTS */}
        <div>
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
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}