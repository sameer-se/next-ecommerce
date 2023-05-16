import { FiMail, FiShoppingCart } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function InfoNavbar() {
  return (
    <div>
      <header className="bg-primary text-white">
        <div className="container">
          <nav className="flex justify-between p-4">
            <div>
              <ul className="list-none md:flex gap-10 ">
                <li>
                  {" "}
                  <a
                    className="items-center"
                    href="mailto: khadkasameer23@gmail.com"
                  >
                    <FiMail className="inline" /> khadkasameer23@gmail.com{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="tel: 9803378205">
                    {" "}
                    <BiPhoneCall className="inline" /> 9803378205
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <ul className="hidden list-none md:flex gap-4">
                <li>English</li>
                <li>USD</li>
              </ul>
              <ul className="inline md:flex gap-4">
                <li>
                  <a>
                    Login <BsPerson className="inline" />
                  </a>{" "}
                </li>
                <li>
                  <button>
                    Wishlist <AiOutlineHeart className="inline" />
                  </button>
                </li>
              </ul>
              <div className="hidden md:flex list-none">
                <li>
                  <button>
                    <FiShoppingCart />
                  </button>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
