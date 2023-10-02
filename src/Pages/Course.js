import React, { useContext } from "react";
import { RiArrowGoBackLine, RiArrowLeftLine } from "react-icons/ri";
import { AppContext } from "../Context/AppContext";
import Biology from "../assets/biology.png";
import Physics from "../assets/physics.png";
import Geography from "../assets/geography.png";
import Chemistry from "../assets/chemistry.png";
import Ict from "../assets/ict.png";
import { Link, useParams } from "react-router-dom";
import CourseImg from "../assets/course.png";
import Navbar from "../components/Navbar";
const Course = () => {
  const { course } = useContext(AppContext);

  const allCourses = [
    {
      title: "chemistry",
      img: Chemistry,
      description:
        "The study of matter and its properties, including the composition, structure, and behavior of atoms and molecules.",
    },
    {
      title: "biology",
      img: Biology,
      description:
        "The study of life and living organisms, including their structure, function, growth, evolution, and distribution.",
    },
    {
      title: "physics",
      img: Physics,
      description:
        "The study of matter and energy and their interactions, including mechanics, electricity, magnetism, thermodynamics, and quantum mechanics.",
    },
    {
      title: "geography",
      img: Geography,
      description:
        "The study of the Earths surface and its features, including landforms, climate, vegetation, and human populations.",
    },
    {
      title: "ict",
      img: Ict,
      description:
        "The study of information and communication technologies, including computers, networks, and the internet.",
    },
  ];

  const courseParams = useParams();
  const mainCourse = allCourses.find(
    (courseObj) => courseObj.title === courseParams.id.toLocaleLowerCase()
  );
  const courseTitle = courseParams.id;

  return (
    <>
      <Navbar />

      <div className="   px-[1em] pt-7 pb-[9em] w-full   bg-[#DEF1F5]">
        <div>
          <Link to={"/"}>
            <RiArrowLeftLine size={30} />
          </Link>

          <h1 className=" text-center capitalize">{courseTitle}</h1>
          <div className=" mt-4 rounded-2xl grid grid-cols-2 p-3 bg-white  justify-between items-center gap-4 mx-0 md:mx-auto  w-full md:w-[50%] shadow-xl ">
            <div>
              <img
                src={mainCourse.img}
                alt={courseTitle}
                className="h-[8em] md:h-[18em]"
              />
            </div>
            <div>
              <h2 className=" leading-6 md:leading-10  capitalize">
                {mainCourse.description}
              </h2>
            </div>
          </div>

          <div className=" mt-6 grid  gap-7 grid-cols-2 md:grid-cols-4">
            <div className=" w-full">
              <Link to="/course/courseTitle/Javascript">
                <img src={CourseImg} alt={""} className=" h-48 w-full" />
                <section className=" text-[.8em] px-4 pt-4 flex justify-between w-full ">
                  <p>beginners</p>
                  <p>3 videos</p>
                </section>
                <h1 className=" text-[1.1em] font-semibold px-4">
                  Atoms and why they are important
                </h1>
              </Link>
            </div>
            <div className=" w-full">
              <Link to="/course/courseTitle/Javascript">
                <img src={CourseImg} alt={""} className=" h-48 w-full" />
                <section className=" text-[.8em] px-4 pt-4 flex justify-between w-full ">
                  <p>beginners</p>
                  <p>3 videos</p>
                </section>
                <h1 className=" text-[1.1em] font-semibold px-4">
                  Atoms and why they are important
                </h1>
              </Link>
            </div>
            <div className=" w-full">
              <Link to="/course/courseTitle/Javascript">
                <img src={CourseImg} alt={""} className=" h-48 w-full" />
                <section className=" text-[.8em] px-4 pt-4 flex justify-between w-full ">
                  <p>beginners</p>
                  <p>3 videos</p>
                </section>
                <h1 className=" text-[1.1em] font-semibold px-4">
                  Atoms and why they are important
                </h1>
              </Link>
            </div>
            <div className=" w-full">
              <Link to="/course/courseTitle/Javascript">
                <img src={CourseImg} alt={""} className=" h-48 w-full" />
                <section className=" text-[.8em] px-4 pt-4 flex justify-between w-full ">
                  <p>beginners</p>
                  <p>3 videos</p>
                </section>
                <h1 className=" text-[1.1em] font-semibold px-4">
                  Atoms and why they are important
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
