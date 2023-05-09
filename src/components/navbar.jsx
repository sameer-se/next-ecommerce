import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="container">
            <header className="p-4">
                <nav className="md:flex justify-between items-center">
                    <div className="text-center">
                        <span className="text-4xl">Hekto</span>
                    </div>
                    <ul className="list-none text-center pl-4 pr-4 md:flex gap-5">
                        <li className="hover:text-secondary"><Link href="/">Home</Link></li>
                        <li className="hover:text-secondary"><Link href="/pages">Pages</Link></li>
                        <li className="hover:text-secondary"><Link href="/products">Products</Link></li>
                        <li className="hover:text-secondary"><Link href="/blog">Blog</Link></li>
                        <li className="hover:text-secondary"><Link href="/shop">Shop</Link></li>
                        <li className="hover:text-secondary"><Link href="/contact">Contact</Link></li>                                   
                    </ul>
                    <div className="flex">
                        <input type="search" name="search" className="border w-full justify-center px-2 outline-none" id="" />
                        <div className=" bg-secondary text-white inline p-[10px]  hover:bg-primary ">
                        <FiSearch className="inline"/>
                        </div>
                    </div>                    
                </nav>
            </header>
        </div>
    ) 
    
}