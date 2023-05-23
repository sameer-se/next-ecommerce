import React from "react";

import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function FooterEnd() {
  return (
    <footer>
      <div className="bg-[#E7E4F8] w-full ">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-around items-center p-4">
            <p className="text-[#9DA0AE]">
              ©sameerse - 2023 - All Rights Reserved
            </p>
            <div className="flex gap-8 justify-center items-center">
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <FaFacebookF className="  h-6 w-6 text-primary hover:text-secondary" />
              </div>
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <RiInstagramFill className="rounded-full h-6 w-6 text-primary hover:text-secondary" />
              </div>
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <FaTwitter className=" h-6 w-6 text-primary hover:text-secondary" />
              </div>
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <FaTiktok className=" h-6 w-6 text-primary hover:text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
