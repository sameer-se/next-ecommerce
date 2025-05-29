import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function FooterEnd() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Payment Methods */}
      <div className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pages"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/pages"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/pages"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
              >
                Shipping Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/pages"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
              >
                Sitemap
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Payment Methods:</span>
              <div className="flex gap-2">
                <div className="bg-white rounded p-1 w-10 h-6"></div>
                <div className="bg-white rounded p-1 w-10 h-6"></div>
                <div className="bg-white rounded p-1 w-10 h-6"></div>
                <div className="bg-white rounded p-1 w-10 h-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Social */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-white font-medium">Hekto</span>. All Rights
              Reserved. Designed by{" "}
              <span className="text-primary">sameerse</span>
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <RiInstagramFill className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Pinterest"
              >
                <FaPinterestP className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
