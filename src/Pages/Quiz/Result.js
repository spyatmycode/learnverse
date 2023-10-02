import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { IoReloadSharp } from 'react-icons/io5';
import { MdAlarm } from 'react-icons/md';
import Ellipse from '../../assets/Ellipse.png';

const Result = () => {
  return (
    <div className='flex flex-col pt-1 px-3 h-screen'>
      <div className='flex flex-row gap-7 items-center justify-start  text-center'>
        <AiOutlineArrowLeft size={20} />
        <p className='text-lg font-semibold flex justify-center md:align-middle text-center items-center'>
          Assessement Results
        </p>
      </div>
      {/* bg-cream */}
      <div className='flex flex-col md:flex-row md:gap-10 space-y-4 mt-2 justify-center md:justify-around items-center align-middle text-start '>


        <span className='flex flex-col  gap-2 bg-[#DDD5D599] align-middle  border rounded-lg justify-center py-1 pl-4 md:pl-0 md:p-5'>
          <p className='font-semibold text-xl  '>
            Pair of Linear Equations in Two Variables
          </p>
          <p>Maths/Real Numbers</p>
        </span>
        
        <span className='flex flex-row gap-2  md: px-3 py-4 bg-[#DDD5D599] border rounded-lg '>
          <span className='w-1/2'>
            <img src={Ellipse} alt='Ellipse' className='absolute md:bottom-[480px] ' />
            <p className='text-2xl relative font-bold top-[35px] md:top-[25px] left-[30px]'>
              4/5
            </p>
          </span>
          <span className='w-1/2 flex flex-col font-montserrat font-semibold text-18'>
            Congratulations! You have passed this test with
            <span className='text-green-500'>80%</span>
          </span>
        </span>

        
      </div>
      {/*  */}
      <div className='grid grid-cols-2 gap-3 md:gap-10 mt-4'>
        <span className='border rounded-xl outline-none bg-[#5A51C6] md:items-center text-white font-semibold  pl-1 py-4 items-start flex flex-col'>
          <p>4</p>
          <p>Correct Answer</p>
        </span>
        <span className='border rounded-xl outline-none bg-[#3081ED] md:items-center text-white font-semibold pl-1 py-4 items-start flex flex-col'>
          <p>5</p>
          <p>Correct Answer</p>
        </span>
        <span className='border rounded-xl outline-none bg-[#3081ED] md:items-center text-white font-semibold pl-1 py-4 items-start flex flex-col'>
          <MdAlarm color='black' size={20} />
          <p>12m 20sec</p>
          <p className='text-xs'>Total Time</p>
        </span>
        <span className='border rounded-xl outline-none bg-[#F28FAC] md:items-center text-white font-semibold pl-1 py-4 items-start flex flex-col'>
          <MdAlarm color='black' size={20} />
          <p>2m 28sec</p>
          <p className='text-xs'>Avg. Time/Answer</p>
        </span>
      </div>

      {/*  */}
      <div className='flex flex-col gap-2 md:gap-7 mt-3 md:mt-6'>
        <button className='flex items-center text-center justify-center font-semibold text-lg text-white bg-[#5E50C9AD] py-1.5 border rounded-xl'>
          Check Answers
        </button>
        <button className='flex gap-2 flex-row items-center text-center justify-center font-semibold text-lg text-white bg-[#67949E] py-1.5 border rounded-xl '>
          <IoReloadSharp /> Try Assessment Again
        </button>
      </div>

      {/*  */}
      <div className='mt-2 md:mt-5 flex flex-row items-center justify-between mx-2'>
        <span>
          <p className='text-lg font-semibold'>Next:</p>
          <p className='font-medium'>Quadratic Equation</p>
        </span>
        <button className='border  flex text-center justify-center h-11 px-3 items-center text-white bg-[#67949E] rounded-xl'>
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Result;
