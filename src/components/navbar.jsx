import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const router = useRouter();
  function handelSearch(e) {
    e.preventDefault();
    router.push("/products?search_term=" + e.target.search_term.value);
  }
  return (
    <div className="container">
      <header className="p-4">
        <nav className="items-center lg:justify-between lg:flex">
          <div className="flex justify-between items-center mb-4">
            <div className="">
              <Link href="/">
                <span className="text-4xl">Hekto</span>
              </Link>
            </div>
            <div className="lg:hidden">
              <RxHamburgerMenu className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="list-none text-center pl-4 pr-4 md:flex gap-5">
              <li className="hover:text-secondary">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/pages">Pages</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/products">Products</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
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
        </nav>
      </header>
    </div>
  );
}
