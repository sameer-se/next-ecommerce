import Link from "next/link"
import { AiOutlineHeart, AiOutlineUnorderedList, AiOutlineZoomIn } from "react-icons/ai"
import { BsCart2, BsFillGridFill } from "react-icons/bs"
import React from 'react'
import axios from "axios"
import Image from "next/image"


export default function Products({ products }) {
    let {name, price, images }=products
    return(
        <div>
            {/* HEADER BANNER */}
            <div className="bg-primary-shade w-full">
                <div className="container m-4 p-4">
                    <p className="text-3xl font text-primary">Shop Left Sidebar</p>
                    <Link href="/" className=""><span>Home</span></Link>
                    <span>.</span>
                    <Link href="/pages"><span>Pages</span></Link>
                </div>
            </div>
            {/* PAGE SORT */}
            <div className="container m-4 p-4 gap-4 flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center">
                <div>
                    <p className="text-2xl text-primary">Ecommerce Acceories & Fashion items</p>
                    <p className="text-primary">About 9,620 results (0.62 seconds)</p>
                </div>
                <form className="flex gap-4">
                    <div className="text-primary">
                        Per Page:
                        <select name="" id="" className="outline-none w-20 sm:ml-2">
                            <option value="">5</option>
                            <option value="">10</option>
                            <option value="">20</option>
                            <option value="">30</option>
                        </select>
                    </div>
                    <div className="justify-center items-center">
                        <label htmlFor="" className="text-primary">Sort By:</label>
                        <select name="" id="" className="sm:ml-2 text-primary outline-none">
                            <option value="">Name asc</option>
                            <option value="">Name desc</option>
                            <option value="">Price asc</option>
                            <option value="">Price desc</option>
                        </select>                        
                    </div>
                    <div className="flex text-primary justify-center items-center">
                        View:
                        <BsFillGridFill className="ml-2 mr-2"/>                        
                        <AiOutlineUnorderedList className=""/>
                    </div>
                </form>
            </div>
            <div className="container m-4 p-4 grid grid-cols-4 ">
                <div>Filtesrs:</div>
                <div className=" col-start-2 col-end-5 flex flex-col gap-4">
                    {
                        products.map(product => {
                            return( 
                                <div key={product}  className="border p-4 flex gap-4 rounded-2xl">
                                    <Image alt="" className="w-1/4 aspect-video object-fill" src={product.images[0]} width={300} height={300}/>
                                    <div className="flex flex-col justify-between gap-4">
                                        <p className="capitalize">{product.name}</p>
                                        <p>${product.price}</p>
                                        <p>{product.discription}</p>
                                        <button className="bg-secondary text-white h-[50px] hover:bg-primary">Buy Now</button>
                                        <ul className='flex top-3 left-2   gap-2 '>
                                            <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 rounded-full'><BsCart2 className=' hover:text-secondary  h-6 w-6 text-blue-gradient' /></li>
                                            <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 rounded-full'><AiOutlineHeart className=' hover:text-secondary  h-6 w-6 text-blue-gradient'/></li>
                                            <li className='bg-primary-shade w-10 h-10 justify-center items-center p-2 rounded-full'><AiOutlineZoomIn className='hover:text-secondary  h-6 w-6 text-blue-gradient'/></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })                    
                    }
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps() {
    let res = await axios.get ("https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6")
    return {
        props:{
            products:res.data.data[0].data
        }
    }
}
