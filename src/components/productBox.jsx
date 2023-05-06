import Image from "next/image"
import Wing from "@/assets/pngwing.png"

export default function ProductBox() {
    return(
        <div className="h-[360px] w-[270px] border">
            <div className="h-[75%] justify-center items-center bg-[]">
            <Image src={Wing} alt="product img" />

            </div>
            <ul className="text-center">
                <li className="text-secondary text-2xl">Cantilever chair</li>
                <li className="text-[#151875]">code-Y523201</li>
                <li className="text-[#151875]">$42.50</li>
            </ul>           
        </div>
    )
    
}