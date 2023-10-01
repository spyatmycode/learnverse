import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/Scienceeducation.png";
import { SIGNIN, SIGNUP } from "../../Utility/Routers/Router";

const Welcome = () => {
  return (
    <div className="lg:flex lg:h-[100vh]">
      {/* Left side */}
      <div className="h-[100%] lg:w-[50%] bg-gradient-to-b from-[#67949E] to-[#9E7167] flex">
        <img className="h-96 m-auto" src={icon} />
      </div>
      {/* Right Side */}
      <div className="lg:w-[50%] rounded-s-lg">
        {/* Header */}
        <h1 className="text-center text-6xl font-bold m-6">LearnVerse</h1>
        {/* Buttons */}
        <div className="flex justify-between items-center m-10">
          <div className="flex lg:w-10 md:w-96 justify-center rounded-full bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]  px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
            <Link to={SIGNIN}>Sign In</Link>
          </div>
          <div className="flex lg:w-10 md:w-96 justify-center rounded-full bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]  px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
            <Link to={SIGNUP}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
