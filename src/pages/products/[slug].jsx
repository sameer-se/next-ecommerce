/* eslint-disable react/jsx-key */
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "@/redux/Slice/WishlistSlice";
import { useRouter } from "next/router";
import { mockProducts, mockTrending } from "@/utils/mockData";

export default function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.some(item => item._id === product._id);
  
  // Handle wishlist toggle
  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
      alert("Removed from wishlist!");
    } else {
      dispatch(addToWishlist({
        _id: product._id,
        name: product.name,
        price: product.price,
        images: product.images
      }));
      alert("Added to wishlist!");
    }
  };
  
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
      <div className="container m-6 p-2 md:p-6 gap-8 flex flex-wrap  lg:grid lg:grid-cols-2 rounded-xl border-2 shadow-lg">
        <Slider {...settings} className="aspect-video h-[400px] w-full">
          {product.images.map((img) => {
            return (
              <Image
                className="w-full h-[400px] object-fill rounded-xl"
                alt="Product Image"
                src={img}
                width={300}
                height={300}
              />
            );
          })}
        </Slider>
        <div className="w-full gap-4 flex flex-col justify-between">
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
          <div className="md:flex md:justify-between md:items-center">
            <div className="flex gap-4 mb-4 md:mb-0">
              <button 
                onClick={() => {
                  dispatch(addToCart({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    images: product.images
                  }));
                  alert("Product added to cart!");
                }}
                className="bg-primary rounded-md shadow-lg text-white h-[50px] w-[100px] hover:bg-secondary"
              >
                Add To Cart
              </button>
              <button 
                onClick={() => {
                  dispatch(addToCart({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    images: product.images
                  }));
                  router.push('/cart');
                }}
                className="bg-primary rounded-md shadow-lg text-white h-[50px] w-[80px] hover:bg-secondary"
              >
                Buy Now
              </button>
            </div>
            <ul className="flex md:justify-center md:items-center top-3 left-2   gap-2 ">
              <li className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <AiOutlineMessage className=" hover:text-secondary h-6 w-6 text-primary" />
              </li>
              <li 
                onClick={handleToggleWishlist}
                className={`w-10 h-10 flex justify-center items-center p-2 rounded-full shadow-lg cursor-pointer transition-colors ${isInWishlist ? 'bg-primary text-white' : 'bg-primary-shade hover:bg-primary hover:text-white'}`}
              >
                <AiOutlineHeart className="h-6 w-6" />
              </li>
              <li className="bg-primary-shade shadow-xl w-10 h-10 justify-center items-center p-2 rounded-full">
                <RiShareForwardFill className="hover:text-secondary h-6 w-6 text-primary" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  try {
    // Find product by ID from mock data
    const productId = ctx.query.slug;
    let product = [...mockProducts, ...mockTrending].find(p => p._id === productId);
    
    // If product not found in mock data, try API
    if (!product) {
      try {
        let res = await axios.get(
          `https://ecommerce-sagartmg2.vercel.app/api/products/${productId}`
        );
        product = res.data.data;
      } catch (apiError) {
        console.error('API error:', apiError);
        // If API fails, use first product from mock data
        product = mockProducts[0];
      }
    }
    
    if (!product) {
      return {
        notFound: true,
        props: {},
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    // Fallback to first product in mock data
    return {
      props: {
        product: mockProducts[0],
      },
    };
  }
}
