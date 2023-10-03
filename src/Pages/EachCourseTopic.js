import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { RiArrowLeftLine, RiPlayCircleLine, RiPrinterFill, RiQuestionMark } from 'react-icons/ri'
import CourseImg from '../assets/course.png'
const EachCourseTopic = () => {
    const courseParams=useParams()
    console.log(courseParams);

    
    // const mainCourse = allCourses.find((courseObj) => courseObj.title === courseParams.id.toLocaleLowerCase());
    // console.log(mainCourse);
    const courseTitle=courseParams.id


  return (
    <>
  
    <div className='   px-[1em] pt-7 pb-[9em] w-full   bg-[#DEF1F5]'>
        
        <div>
           <Link to={'/'}>
                <RiArrowLeftLine  size={30}/>
           </Link>

     <h1 className=' font-[800] text-[1.4em] mb-5 text-center capitalize'>{courseTitle}</h1>
      
    </div>

    <div>


    <div>
      <img src={CourseImg}  alt={courseTitle} className='h-[8em] w-full md:w-[60%] rounded-xl mx-auto md:h-[20em]' />
      <p className=' mt-5 text-start text-[1em] md:text-[2em]  md:text-center'>Lorem Ipsum dolor Lorem Ipsum dolor sit cosnmewdh Lorem Ipsum dolor sit cosnmewdh </p>
     </div>
      
    </div>



    <div className='grid grid-cols-4 text-[.8em] gap-3 mt-6'>
        <div className=''> <h1 className=' font-bold'>Beginners</h1></div>
        <div className=' flex gap-3 items-center justify-center'>
            <RiPlayCircleLine size={ 20}  className=' text-purple-500'/>
            <p className=' flex w-full'> 6Videos </p>
           
        </div>
        <div className=' flex gap-3 items-center justify-center'>
            <RiPrinterFill size={ 20}  className=' text-purple-500'/>
        1 PDF
        </div>
        <div className=' flex gap-3 items-center justify-center'>
            <RiQuestionMark size={ 20}  className=' text-purple-500'/>
            Quiz
        </div>
    </div>

    <section>
        <h1 className=' underline  font-bold mt-5'>Videos</h1>

        <div className=' mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center w-full items-center'>
            <div>
                <img className='w-full  md:w-[50%] my-5'  src={CourseImg} alt="" />
                <p>Introduction to Programming</p>
            </div>
            <div>
                <img className='w-full  md:w-[50%] my-5'  src={CourseImg} alt="" />
                <p>Introduction to Programming</p>
            </div>
            <div>
                <img className='w-full  md:w-[50%] my-5'  src={CourseImg} alt="" />
                <p>Introduction to Programming</p>
            </div>
            <div>
                <img className='w-full  md:w-[50%] my-5'  src={CourseImg} alt="" />
                <p>Introduction to Programming</p>
            </div>
            <div>
                <img className='w-full  md:w-[50%] my-5'  src={CourseImg} alt="" />
                <p>Introduction to Programming</p>
            </div>

        </div>
    </section>
    </div>
    </>
  )
}

export default EachCourseTopic