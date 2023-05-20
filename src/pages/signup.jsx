import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="container mb-10">
      <div class="flex min-h-full flex-col justify-center m-4 px-6 py-12 lg:px-8 border-2 shadow-lg rounded-3xl">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
            Sign up for new account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            {/* Full Name */}
            <div>
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div class="mt-2">
                <input
                  id=""
                  name="name"
                  type="name"
                  autocomplete="name"
                  required
                  class="block w-full rounded-md pl-2 outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Email Adderess */}
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full pl-2  outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* PASSWORD */}
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full outline-none pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-shade sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* SIGN UP BUTTON */}
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary hover:bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* ALREADY HAVE ACCOUNT */}
          <p class="mt-10 text-center text-sm text-gray-500">
            Already have account?
            <Link
              href="/login"
              class="font-semibold leading-6 text-primary hover:text-secondary"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
