import React from "react";
import Link from "next/link";
import axios from "axios";

export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: "sameer",
        email: "sameer@buyer.com",
        role: "buyer",
        password: "password",
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary">Shop Left Sidebar</p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/pages">
            <span>Pages</span>
          </Link>
          <span>.</span>
          <Link href="/signup">
            <span>Signup</span>
          </Link>
        </div>
      </div>
      <div className="container mb-10">
        <div className="flex min-h-full flex-col justify-center p-4 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
          <div className="sm:mx-auto sm:w-full sm:max-w-[600px] border-2 p-6  sm:pb-20 rounded-xl shadow-xl">
            <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
              Sign up for new account
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              // action="#"
              // method="POST"
            >
              {/* Full Name */}
              <div>
                <label
                  // for="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    // required
                    className="block w-full rounded-md pl-2 outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Email Adderess */}
              <div>
                <label
                  // for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    // required
                    className="block w-full pl-2  outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* SELECT ROLE */}
              <div>
                <label
                  // for="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Role
                </label>
                <div className="mt-2">
                  <select
                    name="role"
                    id="role"
                    // required
                    className="block w-full pl-2 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  >
                    <option value="">Select</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>
              </div>
              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    // for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    // required
                    className="block w-full outline-none pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* SIGN UP BUTTON */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary hover:bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* ALREADY HAVE ACCOUNT */}
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have account?
              <Link
                href="/login"
                className="font-semibold leading-6 text-primary hover:text-secondary"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}