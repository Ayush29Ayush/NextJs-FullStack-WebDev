import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    // <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky text-white">
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky">
      {/* left side */}
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-1 items-center justify-center">
          <FaYoutube className="text-4xl text-red-600" />
          <span className="text-2xl font-bold">Youtube</span>
        </div>
      </div>
      {/* middle portion */}
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
            </div>
            <button className="h-10 w-14 flex items-center justify-center bg-zinc-900 rounded-r-3xl">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>
      {/* right side */}
      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            {" "}
            9+{" "}
          </span>
        </div>
        <img
          src="https://yt3.ggpht.com/yti/ANjgQV8xHZeyaYudL334pMLQ8p1wmfU7Jbc2iIwpZu7T0laeEX0=s88-c-k-c0x00ffffff-no-rj"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
