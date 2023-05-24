import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState();
  // const [field_error, setfield_error] = useState({});

  const [password, setPassword] = useState();
  const [error, setErrors] = useState({
    email: "",
    password: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    let validation = true;

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "required" }));
      validation = false;
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: "required" }));

      validation = false;
    }
    if (validation) {
      axios
        .post("https://ecommerce-sagartmg2.vercel.app/api/users/Login", {
          email: event.target.email.value,
          password: event.target.password.value,
        })
        .then((res) => {
          router.push("/");
          alert("Login Sucessful");
        })
        .catch((err) => {
          console.log(err);
          // let arr = re.data.errors;
          // let temp = {};
          setErrors((prev) => ({ ...prev, message: err.response.data.msg }));
        });
    }
  }
  console.log("Error:::", error);
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
          <Link href="/Login">
            <span>Login</span>
          </Link>
        </div>
      </div>
      <div className="container mb-10">
        <div className="flex min-h-full flex-col justify-center p-4 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
          <div className="sm:mx-auto sm:w-full sm:max-w-[600px] border-2 p-6  sm:pb-20 rounded-xl shadow-xl">
            <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
              Login for new account
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              // action="#"
              // method="POST"
            >
              {error.message && (
                <p className="text-red-500 bg-red-200 p-2 text-center rounded-md">
                  {error.message}
                </p>
              )}
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
                  Login
                </button>
              </div>
            </form>
            {/* ALREADY HAVE ACCOUNT */}
            <p className="mt-10 text-center text-sm text-gray-500 flex gap-2 justify-center items-center">
              <span>Don`t have account?</span>
              <Link
                href="/signup"
                className="font-semibold leading-6 text-primary hover:text-secondary"
              >
                Signup here
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
