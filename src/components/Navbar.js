import React, { useContext } from "react";
import { RiBook3Line, RiHome8Line, RiSchoolLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { PROFILE, ROOT } from "../Utility/Routers/Router";

const Navbar = () => {
  return (
    <>
      <nav className=" hidden z-[100]  lg:flex justify-between w-full  items-center gap-8 text-white bg-[#37494E] py-3 px-[10em]">
        <Link to={ROOT}>
          {" "}
          <h1 className=" font-[600] text-[2.7em]">Learn Verse</h1>
        </Link>
        <ul className=" flex  gap-6 justify-between items-center">
          <li>Home</li>
          <li>My courses</li>
          <li>Library</li>
        </ul>

        <Link to={PROFILE}>
          <div className="flex justify-end relative">
            <span className=" bg-[#32d532] rounded-full w-3 h-3  absolute top-[-3px]"></span>
            <img src={logo} className=" w-11 h-11" alt="" />
          </div>
        </Link>
      </nav>

      <div className=" block lg:hidden fixed z-[100]     bottom-2 w-full">
        <section className=" relative w-[100%] flex justify-center items-center   pt-5">
          <div className=" bg-white rounded-full mx-4 mb-3 w-full  flex gap-4 justify-between px-4 py-2 ">
            <div className=" flex justify-center items-center flex-col gap-1">
              <RiHome8Line className=" text-[#9E7167] " size={30} />
              <h1>Home</h1>
            </div>

            <div className=" flex justify-center items-center flex-col gap-1">
              <RiSchoolLine className=" text-[#9E7167] " size={30} />
              <h1>My courses</h1>
            </div>

            <div className=" flex justify-center items-center flex-col gap-1">
              <RiBook3Line className="  text-[#9E7167] " size={30} />
              <h1>Library</h1>
            </div>

            <div className=" flex justify-center items-center flex-col gap-1">
              <AiOutlineUser className=" text-[#9E7167] " size={30} />
              <h1>Profile</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
