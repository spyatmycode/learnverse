import React from 'react'
import { RiEqualizerLine } from'react-icons/ri'
import logo from '../assets/logo.png'
import Biology from '../assets/biology.png'
import CourseImg from '../assets/course.png'
import OngoingImg from '../assets/ongoing.png'
import Navbar from '../components/Navbar'
const Dashboard = () => {
  return (
    <>
      <div className=' bg-[#DEF1F5] px-[1em] pt-4 pb-[7em] w-full '>
        <div>
            <div className=' flex w-full  items-center  justify-between'>
            <h1 className='  font-[600] '>Hi! Adams</h1>
            <div className='  flex  justify-end  relative '>
              <span className=' bg-[#32d532] rounded-full w-3 h-3 absolute top-[-3px]'></span>
              <img src={logo} className=' w-[50%]' alt="" />
            </div>

          </div>
          <p>Unlock your learning potential today!</p>
        </div>

        {/* SEARCH FUNCTION  */}
        <section className=' pt-5'>
           <div className=' flex gap-4 items-center justify-center '>
            <input type="text" className=' w-full border-[.2px] p-3 rounded-xl ' />
            <div className=' bg-[#889ED7] rounded-lg p-3'>
                 <RiEqualizerLine size={20} className=' '/>
            </div>
            
           </div>
        </section>




        {/* Course Categories */}
        <section className=' pt-5'>
          <h1 className='font-[600] mb-[3em]  '>Course Categories</h1>
            <div className=' grid grid-cols-2  mt-5 pt-5 gap-[4em] items-center justify-center  '>
              <div className=' relative w-full bg-white h-[100px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Biology} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Biology</h1>
                    <p>3 topics</p>
              </div>
              </div>

              <div className=' relative w-full bg-white h-[100px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Biology} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Biology</h1>
                    <p>3 topics</p>
              </div>
              </div>




              <div className=' relative w-full bg-white h-[100px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Biology} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Biology</h1>
                    <p>3 topics</p>
              </div>
              </div>




              <div className=' relative w-full bg-white h-[100px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Biology} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Biology</h1>
                    <p>3 topics</p>
              </div>
              </div>


            </div>
        </section>




        {/* Popular Topics */}



        <section className=' pt-5'>
          <h1 className='font-[600] mb-[3em]  '>Popular Topics</h1>

          <div className='  flex overflow-x-scroll gap-4'>
          <div className=' cursor-pointer  w-full'>
            <img src={CourseImg} className=' max-w-[10em] ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div>
          <img src={CourseImg} className='  cursor-pointer max-w-[10em] ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div>
          <img src={CourseImg} className=' cursor-pointer max-w-[10em] ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div>
          <img src={CourseImg} className=' cursor-pointer max-w-[10em] ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div>
          <img src={CourseImg} className=' cursor-pointer max-w-[10em] ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          </div>
        </section>

      {/* Ongoing COURSES */}


      <section className=' relative w-full pt-5'>
      <div className='w-full '>
          <img src={OngoingImg} className=' h-full bg-red-300   rounded-xl cursor-pointer  filter  w-full object-cover ' alt="" />
          <div className=' absolute top-[0%] left-2 p-3 w-[30%] text-white'>
            <h1 className='  text-[1.2em] py-4  '>Ongoing</h1>  
            <h1 className='font-bold text-[1.2em]  mb-[1em]  '>Study of Algorithms</h1>
            <button className= ' font-bold text-[1.2em]  bg-white text-black p-2 rounded-full'>Continue</button>
          </div>
           
          </div>
      </section>


      <Navbar/>
        
        
      </div>
    </>
  )
}

export default Dashboard