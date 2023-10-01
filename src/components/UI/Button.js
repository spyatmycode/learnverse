import React from "react";

const Button = ({type}) => {
  return (
    <button
            type="submit"
            className="flex w-80 md:w-96 justify-center rounded-full bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]  px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {type}
          </button>
  );
};

export default Button;
