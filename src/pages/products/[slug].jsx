/* eslint-disable react/jsx-key */
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import React from "react";
import Slider from "react-slick";

export default function SingleProduct({ product }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary capitalize">
            {product.name}
          </p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/products">
            <span>Products</span>
          </Link>
        </div>
      </div>
      {/* PRODUCT DETAILS */}
      <div className="container m-4 p-4 gap-8 flex flex-wrap lg:grid lg:grid-cols-2">
        <div className="flex h-full w-full justify-center items-center">
          <Slider {...settings} className="aspect-video h-full w-full">
            {product.images.map((img) => {
              return (
                <Image
                  className="h-full w-full max-h-[400px] object-contain rounded-md"
                  alt="Product Image"
                  src={img}
                  width={300}
                  height={300}
                />
              );
            })}
          </Slider>
        </div>
        <div className="w-full gap-4 flex flex-col">
          <p className="text-4xl font text-primary capitalize text-centers md:text-start">
            {product.name}
          </p>
          <p className="flex items-center">
            <MdStarRate className="text-yellow-300" />
            <MdStarRate className="text-yellow-300" />
            <MdStarRate className="text-yellow-300" />
            <MdStarRate className="text-yellow-300" />
            <MdStarRate className="text-yellow-300" />
            <span className="ml-2">(23)</span>
          </p>
          <p>Price: $ {product.price}</p>
          <p className="text-justify">
            <p>Details:</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            ratione provident, laboriosam vero a nulla dolorem perferendis eos
            aliquam maxime corporis, autem in laudantium est dolor ipsam unde
            fugiat sed.
          </p>
          <div className="flex gap-4">
            <button className="bg-secondary rounded-md shadow-xl text-white h-[50px] w-[100px] hover:bg-primary">
              Add To Cart
            </button>
            <button className="bg-secondary rounded-md shadow-xl text-white h-[50px] w-[80px] hover:bg-primary">
              Buy Now
            </button>
          </div>
          <ul className="flex top-3 left-2   gap-2 ">
            <li className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
              <BsCart2 className=" hover:text-secondary  h-6 w-6 text-blue-gradient" />
            </li>
            <li className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
              <AiOutlineHeart className=" hover:text-secondary  h-6 w-6 text-blue-gradient" />
            </li>
            <li className="bg-primary-shade shadow-xl w-10 h-10 justify-center items-center p-2 rounded-full">
              <AiOutlineZoomIn className="hover:text-secondary  h-6 w-6 text-blue-gradient" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  let res = await axios.get(
    `https://ecommerce-sagartmg2.vercel.app/api/products/${ctx.query.slug}`
  );
  return {
    props: {
      product: res.data.data,
    },
  };
}
