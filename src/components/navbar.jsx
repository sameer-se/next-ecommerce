import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="container">
            <header className="p-[22px]">
                <nav className="md:flex justify-between items-center">
                    <div className="text-center">
                        <span className="text-4xl">Hekto</span>
                    </div>
                    <div className="list-none text-center pl-4 pr-4 md:flex gap-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/pages">Pages</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/contact">Contact</Link></li>                                   
                    </div>
                    <div className="flex">
                        <input type="search" name="search" className="border w-full justify-center" id="" />
                        <div className=" bg-secondary text-white inline p-[10px]">
                        <FiSearch className="inline"/>
                        </div>
                    </div>                    
                </nav>
            </header>
        </div>
    ) 
    
}