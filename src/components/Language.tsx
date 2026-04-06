import React from "react";

const Language = () => {
  return (
    <li className="relative group cursor-pointer">

      {/* Top (EN + icon) */}
      <div
        className="flex items-center gap-1 px-2 py-1
                   border border-transparent
                   hover:border-white hover:rounded
                   transition-all duration-200"
      >
        <span>🌐</span>
        <span className="text-sm font-bold">EN</span>
      </div>

      {/* Dropdown */}
      <div className="absolute left-0 top-full
                  hidden group-hover:block
                  bg-white text-black
                  w-[500px] p-4 rounded shadow-xl z-50">

        <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">English</p>
        <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">हिंदी</p>
      

      </div>

    </li>
  );
};

export default Language;