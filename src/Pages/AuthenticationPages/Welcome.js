import React from "react";
import icon from "../../assets/Scienceeducation.png"

const Welcome = () => {
  return (
    <div className="lg:flex lg:h-[100vh]">
      {/* Left side */}
      <div className="h-[100%] lg:w-[50%] bg-gradient-to-b from-[#67949E] to-[#9E7167] flex">
        <img className='h-96 m-auto' src={icon}/>
      </div>
      {/* Right Side */}
      <div className="lg:w-[50%] rounded-s-lg">
        {/* Header */}
        <h1 className="text-center text-6xl font-bold m-6">LearnVerse</h1>
        {/* Buttons */}
        <div className="flex justify-center items-center">
          <h1 className="mr-4">SignIn</h1>
          <h1>SignUp</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
