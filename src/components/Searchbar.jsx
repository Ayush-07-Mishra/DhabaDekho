import React from 'react'
import { GrSearch } from "react-icons/gr";
function Searchbar() {
  return (
    <div className="w-full flex justify-center items-center mt-[6vw] ">
      <input
        type="text"
        placeholder="Search"
        className="border-2 w-[35vw] rounded-[1vw] py-2 px-3 mt-[5vw] border-black"
      />
      <button className="text-[30px] p-[1vw] mt-20 ">
        <GrSearch />
      </button>
    </div>
  )
}

export default Searchbar;
