import React, { useContext } from 'react'
import { RiEqualizerLine, RiSearch2Line } from'react-icons/ri'
import logo from '../assets/logo.png'
import Biology from '../assets/biology.png'
import Physics from '../assets/physics.png'
import Geography from '../assets/geography.png'
import Chemistry from '../assets/chemistry.png'
import Ict from '../assets/ict.png'
import CourseImg from '../assets/course.png'
import OngoingImg from '../assets/ongoing.png'
import Man from '../assets/man.png'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { signOut } from "firebase/auth";
import {auth} from "../Utility/FirebaseConfig"
import { useUser } from '../Hooks/AuthHook'
const Dashboard = () => {
  const [userInfo, isLoading] = useUser();


  const {course,setCourse}=useContext(AppContext)
  const navigate= useNavigate()
  const selectCourse=(thisCourse)=>{
  
    setCourse(thisCourse)
     navigate(`/course/${thisCourse}`)

  }
  console.log(course);
  




  return (
    <>


          {/* DESKTOP VIEW  */}
          <div className=' hidden lg:block bg-[#DEF1F5]'>
          


               {/* SEARCH FUNCTION  */}

               <div className='  bg-[#DEF1F5] px-[1em] pt-4 pb-[4em] w-full '>
                <section className=' pt-5'>
           <div className='  flex gap-4 mx-auto items-center justify-center '>
            <div className=' relative flex  w-[50%] gap-6  justify-center items-center  '>
              <input type="text"  className=' pl-9 w-full border-[.2px] py-3 rounded-xl ' />
              <RiSearch2Line size={20} className=' font-thin top-0 m-auto h-full  left-2 absolute'/>
              <div className=' bg-[#889ED7] w-fit rounded-lg p-3'>
                 <RiEqualizerLine size={20} className=' '/>
            </div>
            </div>
            </div>
        
        </section>
        </div>





        <section className=' flex text-white mt-3  px-[10em] justify-center w-full  bg-[#2FDF36] '>
          <div>
             <img src={Man} className='  h-[30em]' alt="" />
          </div>
          <div className='  font-bold text-center flex flex-col'  >
            <h1 className=' piedra text-[100px]'>Interactive</h1>
            <h1 className='piedra text-[70px]'>Quiz</h1>
            <p className=' text-[1.2em] font-mono'>Enhance your information <br /> retention and access knowledge</p>

          </div>

        </section>




         {/* Course Categories */}
         <section className='  px-[10em] pt-5'>
          <h1 className='font-[600] mb-[3em] text-center   '>Course Categories</h1>
            <div className=' grid grid-cols-3  gap-[6em] items-center justify-center  '>

            <div onClick={()=>selectCourse('physics')} className=' relative w-full bg-white h-[20em]    shadow-lg    rounded-3xl ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-10%] '>
                   <img src={Physics} className=' w-[12em] ' />
                </div>
               
                <div className='  h-full w-full flex justify-center pt-9 items-center flex-col text-center mx-auto my-auto  '>                  <h1>Physics</h1>
                    <p className=' text-[1.2em] font-bold'>3 topics</p>
              </div>
              </div>

              <div onClick={()=>selectCourse('biology')} className=' relative w-full bg-white h-[20em]    shadow-lg    rounded-3xl ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-10%] '>
                   <img src={Biology} className=' w-[12em] ' />
                </div>
               
                <div className='  h-full w-full flex justify-center pt-9 items-center flex-col text-center mx-auto my-auto  '>                  <h1>Biology</h1>
                <p className=' text-[1.2em] font-bold'>3 topics</p>
              </div>
              </div>



              <div onClick={()=>selectCourse('chemistry')} className=' relative w-full bg-white h-[20em]    shadow-lg    rounded-3xl ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-10%] '>
                   <img src={Chemistry} className=' w-[12em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center pt-9 items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Chemistry</h1>
                  <p className=' text-[1.2em] font-bold'>3 topics</p>
              </div>
              </div>




              <div onClick={()=>selectCourse('geography')} className=' relative w-full bg-white h-[20em]    shadow-lg    rounded-3xl ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-10%] '>
                   <img src={Geography} className=' w-[12em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Geography</h1>
                  <p className=' text-[1.2em] font-bold'>3 topics</p>
              </div>
              </div>







              <div onClick={()=>selectCourse('ict')} className=' relative w-full bg-white h-[20em]    shadow-lg    rounded-3xl ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-10%] '>
                   <img src={Ict} className=' w-[12em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Ict</h1>
                  <p className=' text-[1.2em] font-bold'>3 topics</p>
              </div>
              </div>

            </div>
        </section>






        {/* Popular Topics */}


        <section className='  px-[10em] pt-5'>
          <h1 className='font-[600] mb-[3em]  '>Popular Topics</h1>

          <div className='  flex overflow-x-scroll gap-4'>
          <div className=' cursor-pointer  w-full'>
            <img src={CourseImg} className=' max-w-[18em] mb-4 ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div className=' cursor-pointer  w-full'>
            <img src={CourseImg} className=' max-w-[18em] mb-4 ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div className=' cursor-pointer  w-full'>
            <img src={CourseImg} className=' max-w-[18em] mb-4 ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div className=' cursor-pointer  w-full'>
            <img src={CourseImg} className=' max-w-[18em] mb-4 ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
          <div className=' cursor-pointer  w-full'>
            <img src={CourseImg} className=' max-w-[18em] mb-4 ' alt="" />
            <p>javascript</p>
            <h1 className='font-[300] mb-[3em]  '>Programming</h1>
          </div>
         
         
         
          </div>
        </section>


               </div>
        
          




{/* MOBILE VIEW */}
      <div className=' block lg:hidden bg-[#DEF1F5] px-[1em] pt-4 pb-[9em] w-full '>
        <div>
            <div className=' flex w-full  items-center  justify-between'>
            <h1 className='  font-[600] '>Hi! {userInfo?.username}</h1>
            <div className='  flex  justify-end  relative ' onClick={()=>signOut(auth)}>
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
              <div onClick={()=>selectCourse('biology')} className=' relative w-full bg-white h-[120px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-40%] '>
                   <img src={Biology} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center  pt-5 items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Biology</h1>
                    <p>3 topics</p>
              </div>
              </div>

              <div onClick={()=>selectCourse('chemistry')} className=' relative w-full bg-white h-[120px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Chemistry} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center pt-5 items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Chemistry</h1>
                    <p>3 topics</p>
              </div>
              </div>




              <div onClick={()=>selectCourse('Physics')} className=' relative w-full bg-white h-[120px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Physics} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center pt-5 items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Physics</h1>
                    <p>3 topics</p>
              </div>
              </div>




              <div  onClick={()=>selectCourse('geography')} className=' relative w-full bg-white h-[120px]    shadow-lg  rounded-md  ' >
                <div  className=' absolute w-full flex justify-center items-center  top-[-50%] '>
                   <img src={Geography} className=' w-[7em] ' />
                </div>
               
              <div className='  h-full w-full flex justify-center pt-5 items-center flex-col text-center mx-auto my-auto  '>
                  <h1>Geography</h1>
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

        
        
        
      
        
        
      </div>
    </>
  )
}

export default Dashboard