import React from "react";

const Button = ({type}) => {
  return (
    <button className="lg:border-[#9E7167] lg:border-2 lg:rounded-lg px-20 py-2 shadow-lg font-bold text-xl lg:text-[#9E7167] rounded-full bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167] text-white lg:bg-none ">
      {type}
    </button>
  );
};

export default Button;
