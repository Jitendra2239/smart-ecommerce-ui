import React from "react";
import { Link } from "react-router-dom";
const Account = () => {
  return (


<li className="relative group cursor-pointer">

  {/* Top Text */}
  <div
    className="flex flex-col items-start leading-tight px-2 py-1
               border border-transparent
               hover:border-white hover:rounded
               transition-all duration-150"
  >
    <span className="text-xs text-gray-300">Hello, Sign in</span>
    <span className="font-bold text-sm">Account & Lists</span>
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full
                  hidden group-hover:block
                  bg-white text-black
                  w-[500px] p-4 rounded shadow-xl z-50">

    {/* 🔹 1. Sign-in Section */}
    <div className="text-center mb-4">
      <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded w-full">
        Sign in
      </button>
      <p className="text-xs mt-2">
        New customer? <span className="text-blue-600 cursor-pointer">Start here</span>
      </p>
    </div>

    <hr className="mb-4" />

    {/* 🔹 2 & 3. Two Columns */}
    <div className="grid grid-cols-2 gap-6">

      {/* Left: Your Lists */}
      <div>
        <h3 className="font-bold mb-2">Your Lists</h3>
        <p className="hover:underline cursor-pointer">Create a Wish List</p>
        <p className="hover:underline cursor-pointer">Wish from Any Website</p>
        <p className="hover:underline cursor-pointer">Baby Wishlist</p>
      </div>

      {/* Right: Your Account */}
      <div>
        <h3 className="font-bold mb-2">Your Account</h3>
        <p className="hover:underline cursor-pointer">Your Account</p>
        <p className="hover:underline cursor-pointer">Your Orders</p>
        <p className="hover:underline cursor-pointer">Your Wishlist</p>
        <p className="hover:underline cursor-pointer">Your Prime</p>
        <p className="hover:underline cursor-pointer">Your Addresses</p>
      </div>

    </div>

  </div>

</li>
  );

}
export default Account