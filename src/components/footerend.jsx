import React from 'react'
import { FaFacebook,FaInstagramSquare,FaTwitter } from "react-icons/fa";

export default function FooterEnd() {
  return (
    <footer>
        <div className="bg-[#E7E4F8] w-full ">
                    <div className="container">
                        <div className='flex justify-around items-center p-4'>
                            <p className='text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>
                            <div className='flex gap-8 items-center'>
                                <FaFacebook className=' rounded-full h-6 w-6 text-[#151875]'/>
                                <FaInstagramSquare className='rounded-full h-6 w-6 text-[#151875]'/>
                                <FaTwitter className='rounded-full h-6 w-6 text-[#151875]'/>
                            </div>
                        </div>
                    </div>
                </div>
    </footer>
  )
}
