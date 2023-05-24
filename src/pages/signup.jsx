import React from "react";
import Link from "next/link";
import axios from "axios";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import router from "next/router";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [error, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let temp = {};
    let validation = true;
    if (!name) {
      temp.name = "required";
      validation = false;
    }
    if (!email) {
      temp.email = "required";
      validation = false;
    }
    if (!role) {
      temp.role = "required";
      validation = false;
    }
    if (!password) {
      temp.password = "required";
      validation = false;
    }
    setErrors(temp);
    if (validation) {
      axios
        .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
          name: event.target.name.value,
          email: event.target.email.value,
          role: event.target.role.value,
          password: event.target.password.value,
        })
        .then((res) => {
          router.push("/login");
          alert("User Created");
        })
        .catch((err) => {
          console.log(err);
          // let arr = res.data.errors;
          let temp = {};
          if (
            err.response.data.errors &&
            err.response.data.errors?.length > 0
          ) {
            err.response.data.errors.forEach((individual_error) => {
              temp[individual_error.param] = individual_error.msg;
            });
            setErrors(temp);
          }
        });
    }
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
              Signup for new account
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
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value) {
                        setErrors({ ...error, name: "" });
                      }
                    }}
                    type="text"
                    autoComplete="name"
                    // required
                    className="block w-full rounded-md pl-2 outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  />
                  {error.name && (
                    <small className="text-red-500">{error.name}</small>
                  )}
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (e.target.value) {
                        setErrors({ ...error, email: "" });
                      }
                    }}
                    type="email"
                    autoComplete="email"
                    // required
                    className="block w-full pl-2  outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  />
                  {error.email && (
                    <small className="text-red-500">{error.email}</small>
                  )}
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
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                      if (e.target.value) {
                        setErrors({ ...error, role: "" });
                      }
                    }}
                    id="role"
                    // required
                    className="block w-full pl-2 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  >
                    <option value="">Select</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                  {error.role && (
                    <small className="text-red-500">{error.role}</small>
                  )}
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value) {
                        setErrors({ ...error, password: "" });
                      }
                    }}
                    type="password"
                    autoComplete="current-password"
                    // required
                    className="block w-full outline-none pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                  />
                  {error.password && (
                    <small className="text-red-500">{error.password}</small>
                  )}
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
            <p className="mt-10 text-center text-sm text-gray-500 flex gap-2 justify-center items-center">
              <span>Already have account?</span>
              <Link
                href="/login"
                className="font-semibold leading-6 text-primary hover:text-secondary"
              >
                Login here
              </Link>
            </p>
            <div className="flex gap-8 justify-center mt-4 items-center">
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <FaFacebookF className="  h-6 w-6 text-primary hover:text-secondary" />
              </div>
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <FaGoogle className="rounded-full h-6 w-6 text-primary hover:text-secondary" />
              </div>
              <div className="bg-primary-shade shadow-lg w-10 h-10 justify-center items-center p-2 rounded-full">
                <FaTwitter className=" h-6 w-6 text-primary hover:text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
