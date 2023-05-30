import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  function handelSearch(e) {
    e.preventDefault();
    router.push("/products?search_term=" + e.target.search_term.value);
  }
  return (
    <div>
      <footer className="bg-primary-shade w-full">
        <div className="container">
          <div className="pt-10 md:flex justify-between ">
            <div className="mb-4 ml-4 mr-4">
              <Link href="/">
                <p className="text-6xl mb-4">Hekto</p>
              </Link>
              <form className="flex" onSubmit={handelSearch}>
                <input
                  type="search"
                  name="search_term"
                  className="border w-full justify-center px-2 outline-none rounded-l-lg"
                  id=""
                />
                <button className=" bg-primary text-white inline p-[10px]  hover:bg-secondary rounded-r-lg">
                  <FiSearch className="inline" />
                </button>
              </form>
              <p className="text-[#8A8FB9] pl-1">Contact Info</p>
              <p className="text-[#8A8FB9] pl-1">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
            <div className="flex flex-wrap md:flex gap-4 p-4">
              <div className="m-4">
                <ul>
                  <li className="text-2xl mb-2">Catagories</li>
                  <li className="text-[#8A8FB9]">Laptops & Computers</li>
                  <li className="text-[#8A8FB9]">Cameras & Photography</li>
                  <li className="text-[#8A8FB9]">Smart Phones & Tablets</li>
                  <li className="text-[#8A8FB9]">Video Games & Consoles</li>
                  <li className="text-[#8A8FB9]">Waterproof Headphones</li>
                </ul>
              </div>
              <div className="m-4">
                <ul>
                  <li className="text-2xl mb-2">Customer Care</li>
                  <li className="text-[#8A8FB9]">My Account</li>
                  <li className="text-[#8A8FB9]">Discount</li>
                  <li className="text-[#8A8FB9]">Returns</li>
                  <li className="text-[#8A8FB9]">Orders History</li>
                  <li className="text-[#8A8FB9]">Order Tracking</li>
                </ul>
              </div>
              <div className="m-4 pb-4">
                <ul>
                  <li className="text-2xl mb-2">Pages</li>
                  <li className="text-[#8A8FB9]">Blog</li>
                  <li className="text-[#8A8FB9]">Browse the Shop</li>
                  <li className="text-[#8A8FB9]">Category</li>
                  <li className="text-[#8A8FB9]">Pre-Built Pages</li>
                  <li className="text-[#8A8FB9]">Visual Composer Elements</li>
                  <li className="text-[#8A8FB9]">WooCommerce Pages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
