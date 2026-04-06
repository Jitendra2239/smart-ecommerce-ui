import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="flex w-full max-w-3xl mx-4">

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-200 text-black px-2 rounded-l-md outline-none"
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Books</option>
        <option>Fashion</option>
      </select>

      {/* Input Box */}
      <input
        type="text"
        placeholder="Search SmartShop.in"
        className="flex-1 px-3 py-2 outline-none text-black"
      />

      {/* Search Button */}
      <button className="bg-yellow-400 hover:bg-yellow-500 px-4 rounded-r-md">
        <Search />
      </button>

    </div>
  );
};

export default SearchBar;