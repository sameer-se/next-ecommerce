import axios from "axios";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

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
      <div className="container m-4 p-4 gap-4 flex flex-wrap lg:grid lg:grid-cols-2">
        <div className="">
          <Slider {...settings}>
            {product.images.map((sliders) => {
              return (
                <Image
                  key={sliders}
                  alt="Product Image"
                  src={product.images[0]}
                  width={300}
                  height={300}
                />
              );
            })}
          </Slider>
        </div>
        <div>
          <p className="text-3xl font text-primary capitalize text-center">
            {product.name}
          </p>
          <p>${product.price}</p>
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
