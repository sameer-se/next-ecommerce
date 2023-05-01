import { React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InfoNavbar() {
    return (
        <div>
            <header  className="bg-[#7E33E0] text-white h-11 w-100% flex space-x-52 " > 
                <div className="flex list-none gap-10 items-center">
                    <li>khadkasameer23@gmail.com</li>
                    <li>9803378205</li>
                </div>
                <div className="flex list-none gap-10 items-center">
                    <li>English</li>
                    <li>USD</li>
                    <li> <button>Login</button> </li>
                    <li><button>Wishlist</button></li>
                    <li><button>cart</button></li>
                </div>
            </header>
        </div>
    )  
    
}