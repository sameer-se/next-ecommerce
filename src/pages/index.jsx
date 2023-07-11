import Image from "next/image";
import Shell from "@/assets/shell.png";
import TrendingProducts from "@/components/TrendingProducts";
import LatestProducts from "@/components/LatestProducts";
import axios from "axios";

export default function Home({ products, trending }) {
  return (
    <div>
      <main>
        {/* BANNER */}
        <div className="bg-[#F2F0FF] p-4 ">
          <div className="container lg:flex ">
            <div className=" m-4 p-4 lg:w-[50%]">
              <p className="text-secondary mb-2 text-x lg:text-2xl lg:mb-4 xl:mb-8">
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-2xl mb-2 lg:text-4xl lg:mb-4  xl:mb-4">
                New Furniture Collection <br /> Trends in 2024
              </h1>
              <p className="mb-2 text-clip lg:text-lg lg:mb-4 xl:text-x xl:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br /> in phasellus non in justo.
              </p>
              <button className="bg-primary text-white w-[163px] h-[50px] hover:bg-secondary rounded-xl">
                Shop Now
              </button>
            </div>
            <div className="m-4 p-4 lg:w-[50%] flex justify-center items-center">
              <div className="h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] bg-circle opacity-30  rounded-full"></div>
              <div className="h-[250px] w-[250px] ml-[-230px] mt-[-15px] sm:h-[400px] sm:w-[400px] sm:ml-[-350px] sm:mt-[-60px] bg-circle opacity-30 rounded-full"></div>
              <Image
                className="h-[250px] w-[250px] ml-[-280px] sm:h-[400px] sm:w-[400px] sm:ml-[-450px] relative"
                src={Shell}
                alt="shell "
                height={400}
                width={400}
              ></Image>
            </div>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="container">
          <p className="text-center text-primary font-bold text-4xl m-4">
            Trending Products
          </p>
          <div className="mt-[50px] mb-[50px]">
            {/* <p className='text-center text-4xl mb-[50px]'>Products</p> */}
            <div className="mt-4 p-4 grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {trending.map((trending) => {
                return (
                  <TrendingProducts trending={trending} key={trending._id} />
                );
              })}
            </div>
          </div>
        </div>
        {/* LETEST PRODUCTS */}
        <div className="container">
          <div>
            <div>
              <p className="text-center text-primary font-bold text-4xl m-4">
                Leatest Products
              </p>
              <ul className="flex gap-2 m-4 justify-center md:gap-8 ">
                <li className="text-primary hover:text-secondary">
                  New Arrival
                </li>
                <li className="text-primary hover:text-secondary">
                  Best Seller
                </li>
                <li className="text-primary hover:text-secondary">Featured</li>
                <li className="text-primary hover:text-secondary">Special</li>
              </ul>
            </div>
            {/* LEATEST PRODUCT ITEMS BOXS */}
            <div className="mt-4 p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => {
                return <LatestProducts product={product} key={product._id} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  let res = await axios.get(
    "https://ecommerce-sagartmg2.vercel.app/api/products?per_page=8"
  );
  let trending_res = await axios.get(
    `https://ecommerce-sagartmg2.vercel.app/api/products/trending`
  );
  return {
    props: {
      products: res.data.data[0].data,
      trending: trending_res.data.data,
    },
  };
}
