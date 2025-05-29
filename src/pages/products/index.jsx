/* eslint-disable react/jsx-key */
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import React from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Noimg from "@/assets/noimg.jpeg";
import { MdStarRate } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { mockProducts, mockCategories } from "@/utils/mockData";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Slice/CartSlice";

export default function Products({ products, categories }) {
  const router = useRouter();
  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary">Shop Left Sidebar</p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/pages">
            <span>Pages</span>
          </Link>
        </div>
      </div>
      {/* PAGE SORT */}
      <div className="container m-4 p-4 gap-4 flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div>
          <p className="text-2xl text-primary">
            Ecommerce Acceories & Fashion items
          </p>
          <p className="text-primary">About 9,620 results (0.62 seconds)</p>
        </div>
        <form className="flex gap-4">
          <div className="text-primary">
            Per Page:
            <select
              name=""
              id=""
              onChange={(e) => {
                router.push(`${router.route}?per_page=${e.target.value}`);
              }}
              className="outline-none w-20 sm:ml-2"
            >
              <option value="">select</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="justify-center items-center">
            <label htmlFor="" className="text-primary">
              Sort By:
            </label>
            <select
              name=""
              id=""
              onChange={(e) => {
                router.push(`${router.route}?sort=${e.target.value}`);
              }}
              className="sm:ml-2 text-primary outline-none"
            >
              <option value="">Select</option>
              <option value="nameasc">Name</option>
              <option value="priceasc">Price Low-High</option>
              <option value="pricedesc">Price High-Low</option>
            </select>
          </div>
          <div className="flex text-primary justify-center items-center">
            View:
            <BsFillGridFill className="ml-2 mr-2" />
            <AiOutlineUnorderedList className="" />
          </div>
        </form>
      </div>
      {/* CATEGORIES */}
      <div className="container m-4 p-4 grid grid-cols-4 ">
        <div className="capitalize select-none">
          <p className="text-primary underline mb-2">Categories</p>
          {categories.map((cat, index) => {
            return (
              <>
                <div>
                  <input
                    onChange={(e) => {
                      router.push(
                        `${router.route}?search_term=${e.target.name}`
                      );
                    }}
                    type="checkbox"
                    name={`${cat}`}
                    id={`${cat}-${index}`}
                  />{" "}
                  <label htmlFor={`${cat}-${index}`}>{cat}</label>
                </div>
              </>
            );
          })}
        </div>
        {/* PRODUCTS */}
        <div className="col-start-2 col-end-5 flex flex-col gap-6">
          {products.map((product) => {
            return (
              <div className="flex border-2 shadow-sm p-4 gap-4 rounded-2xl max-h-[300px] hover:shadow-xl hover:border-primary-shade">
                <div className="w-2/5 aspect-video max-h-[280px]">
                  {product.images.length == 0 ? (
                    <Image
                      src={Noimg}
                      alt="product img"
                      className="w-full h-full object-fill rounded-xl"
                      height={300}
                      width={300}
                    />
                  ) : (
                    <Image
                      src={product.images[0]}
                      alt="product img"
                      className="w-full h-full object-fill rounded-xl"
                      height={300}
                      width={300}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <Link href={`products/${product._id}`} key="">
                    <p className="capitalize text-xl text-primary">
                      {product.name}
                    </p>
                  </Link>
                  <p className="flex items-center">
                    <MdStarRate className="text-yellow-300" />
                    <MdStarRate className="text-yellow-300" />
                    <MdStarRate className="text-yellow-300" />
                    <MdStarRate className="text-yellow-300" />
                    <MdStarRate className="text-yellow-300" />
                    <span className="ml-2">(23)</span>
                  </p>
                  <p>${product.price}</p>
                  <p className="text-justify h-20 overflow-hidden">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus facilis consequuntur dolores pariatur incidunt
                    nisi minus ullam veritatis blanditiis maxime rerum quo quae,
                    repellat consectetur quisquam itaque porro eligendi
                    temporibus.
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-4 mb-4 md:mb-0">
                      <button className="bg-primary rounded-md shadow-lg text-white h-[50px] w-[100px] hover:bg-secondary">
                        Add To Cart
                      </button>
                      <button className="bg-primary rounded-md shadow-lg text-white h-[50px] w-[80px] hover:bg-secondary">
                        Buy Now
                      </button>
                    </div>
                    <ul className="flex md:justify-center md:items-center top-3 left-2   gap-2 ">
                      <li className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                        <AiOutlineMessage className=" hover:text-secondary h-6 w-6 text-primary" />
                      </li>
                      <li className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                        <AiOutlineHeart className=" hover:text-secondary h-6 w-6 text-primary" />
                      </li>
                      <li className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                        <RiShareForwardFill className="hover:text-secondary h-6 w-6 text-primary" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  try {
    // Always use mock data for reliable development
    return {
      props: {
        products: mockProducts,
        categories: mockCategories,
      },
    };
    
    /* Commented out API calls to prevent errors
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products?";
    let params = Object.entries(ctx.query);
    params.forEach((parameter) => {
      url += `${parameter[0]}=${parameter[1]}&`;
    });
    let res = await axios.get(url);

    let categories_res = await axios.get(
      `https://ecommerce-sagartmg2.vercel.app/api/products/categories`
    );
    
    // Handle different possible response structures
    let products = [];
    if (res.data && res.data.data) {
      if (Array.isArray(res.data.data)) {
        products = res.data.data;
      } else if (res.data.data[0] && res.data.data[0].data) {
        products = res.data.data[0].data;
      }
    }
    
    // Use mock data if API fails
    if (!products.length) {
      products = mockProducts;
    }
    
    let categories = categories_res.data || mockCategories;
    
    return {
      props: {
        products,
        categories,
      },
    };
    */
  } catch (error) {
    console.error('Error fetching products data:', error);
    
    // Return mock data if API fails
    return {
      props: {
        products: mockProducts,
        categories: mockCategories,
      },
    };
  }
}
