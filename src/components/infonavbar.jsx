import { FiMail, FiShoppingCart } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import Link from "next/link";

export default function InfoNavbar({ user }) {
  let logged_in = user;

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
                    className="flex items-center"
                    href="mailto: ecomeonline23@gmail.com"
                  >
                    <FiMail className="inline mr-1" /> ecomonline@gmail.com{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="flex items-center" href="tel: 984325324083245">
                    {" "}
                    <BiPhoneCall className="inline mr-1" /> 9889504348952
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
                {logged_in ? (
                  <>
                    <li>
                      <Link className="flex items-center" href="/">
                        {user?.name}
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup" className="flex items-center">
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="flex items-center" href="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup" className="flex items-center">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <div className="hidden md:flex list-none">
                <li>
                  <button className="flex items-center pr-1">
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
