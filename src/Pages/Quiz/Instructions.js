import React from 'react'
import arrowleft from '../../assets/Group (1).svg'
import svg from '../../assets/amico.svg'


const Instructions = () => {
    return (
        <div className='bg-[#67949E] h-screen relative'>

            <div className='flex justify-between py-3 px-2'>

                <span className='flex gap-3'>
                    <img src={arrowleft} alt="" />
                    <p className='text-white'>
                        Assessment
                    </p>
                </span>

                <p className='text-white'>
                    Skip
                </p>


            </div>

            <div className='h-[90%] absolute bottom-0 z-10 w-full   bg-white rounded-l-lg rounded-r-lg'>

                <div className='flex flex-col px-[2%] '>
                    <div className='flex items-center w-full mt-2 pl-3 py-3 gap-2 bg-[#67949E] relative z-10 rounded-lg'>
                        <p className='font-bold text-white'>
                            Algebraic <br /> Equations
                        </p>
                        <img src={svg} alt="" />
                    </div>
                    <div className='flex items-center w-full pl-3 py-3 gap-2 shadow-2xl bg-white relative border-2 top-[-10px] '>

                        <p className='flex gap-3 items-center'><span>Topic:</span> <span className='font-bold'> Algebraic Equations</span></p>

                    </div>
                </div>

                <div className='flex flex-col px-[2%] py-2 '>
                   
                    <span className='flex items-center gap-2'><h1>Total Questions:</h1> <h1 className='font-semibold'>20</h1></span>
                    <span className='flex items-center gap-2'><h1>Time:</h1> <h1 className='font-semibold'>15 mins</h1></span>
                </div>

                <div className='px-[2%] py-2 '>
                    <h1 className='font-bold'>
                        Instructions
                    </h1>

                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo corporis quo enim vel magni ipsum tempore delectus! Odit, commodi reiciendis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur minus odit, molestiae eaque tenetur perspiciatis tempora facere illum maxime.
                    </p>
                </div>

                <div className='flex w-full  justify-center items-center absolute bottom-5 p-0 px-[2%] '>
                    <button className='text-[#67949E]  px-10 py-3 shadow-lg rounded-lg font-semibold'>
                        Start
                    </button>
                </div>


            </div>




        </div>
    )
}

export default Instructions
