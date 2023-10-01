import React, { useEffect, useMemo, useState } from 'react'
import arrowleft from '../../assets/Group (1).svg'
import alarm from '../../assets/mdi_alarm-clock.svg'
import arrayShuffle from 'array-shuffle'
import { fetchQuestions } from '../../Utility/fetchQuestions'

const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const data = [
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How would one say goodbye in Spanish?",
            "correct_answer": "Adi&oacute;s",
            "incorrect_answers": [
                " Hola",
                "Au Revoir",
                "Salir"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What alcoholic drink is made from molasses?",
            "correct_answer": "Rum",
            "incorrect_answers": [
                "Gin",
                "Vodka",
                "Whisky"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the name of the Jewish New Year?",
            "correct_answer": "Rosh Hashanah",
            "incorrect_answers": [
                "Elul",
                "New Year",
                "Succoss"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which one of the following rhythm games was made by Harmonix?",
            "correct_answer": "Rock Band",
            "incorrect_answers": [
                "Meat Beat Mania",
                "Guitar Hero Live",
                "Dance Dance Revolution"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of these colours is NOT featured in the logo for Google?",
            "correct_answer": "Pink",
            "incorrect_answers": [
                "Yellow",
                "Blue",
                "Green"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the French word for &quot;hat&quot;?",
            "correct_answer": "Chapeau",
            "incorrect_answers": [
                "Bonnet",
                " &Eacute;charpe",
                " Casque"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which American-owned brewery led the country in sales by volume in 2015?",
            "correct_answer": "D. G. Yuengling and Son, Inc",
            "incorrect_answers": [
                "Anheuser Busch",
                "Boston Beer Company",
                "Miller Coors"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which restaurant&#039;s mascot is a clown?",
            "correct_answer": "McDonald&#039;s",
            "incorrect_answers": [
                "Whataburger",
                "Burger King",
                "Sonic"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In which fast food chain can you order a Jamocha Shake?",
            "correct_answer": "Arby&#039;s",
            "incorrect_answers": [
                "McDonald&#039;s",
                "Burger King",
                "Wendy&#039;s"
            ],
            selected: ""

        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
            "correct_answer": "Plum",
            "incorrect_answers": [
                "Apple",
                "Peach",
                "Pear"
            ]
        }
    ]
    


    useEffect(()=>{

        

    },[])





    const reviewedQuestons = data.map((question) => { return { ...question, selected: "" } })

    const [finalQuestion, setFinalQuestion] = useState(reviewedQuestons)

    const finalOptions = useMemo(() => arrayShuffle([...reviewedQuestons[currentQuestion].incorrect_answers, reviewedQuestons[currentQuestion].correct_answer]), [currentQuestion])

    const [progress, setProgress] = useState(0)

    const calculateProgress =()=>{
        let prog = 0
        for(let i =0; i<finalQuestion.length; i++){

            if(finalQuestion[i].selected !==""){
                prog++
            }

        }

        

        setProgress(prog)
    }

    console.log(progress);

    console.log(reviewedQuestons);

    console.log("final", finalQuestion);


    const calculateTotal = ()=>{

        let score = 0;


        for(let i = 0; i < finalQuestion.length; i++){
            if(finalQuestion[i].selected === finalQuestion[i].correct_answer){
                score++
            }
        }

        

        
    }
    return (
        <div className='bg-[#67949E] h-screen relative'>

            <div className='flex justify-between flex-col py-3 px-2 gap-3'>

                <span className='flex gap-3'>
                    <img src={arrowleft} alt="" />
                    <p className='text-white'>
                        Assessment
                    </p>
                </span>

                <div className='flex justify-between'>
                    <h1 className='text-white font-bold'>
                        Pair of linear variables
                    </h1>

                    <span className='flex gap-2 items-center text-white font-bold '>
                        <img src={alarm} className='' alt="" />
                        <p>
                            15:30
                        </p>

                    </span>
                </div>

                <div class="w-full bg-gray-200 rounded-full h-[5px] ">
                    <div class="bg-[#1A3B42] h-[5px] rounded-full" style={{ width: `${(progress/data.length) * 100}%` }}></div>
                </div>


            </div>

            <div className='h-[82%] absolute bottom-0 z-10 w-full   bg-white rounded-l-lg rounded-r-lg'>



                <div>
                    <div className='flex flex-col px-[2%] py-2 '>
                        <p className='font-medium text-lg'>Q. {`${currentQuestion + 1}/${data.length}`}</p>
                        <span className='font-medium text-xl pr-3'>
                            {data[currentQuestion]?.question}
                        </span>
                    </div>

                    <ul className='px-[2%] py-2 flex flex-col gap-3 md:gap-10 '>

                        {
                            finalOptions.map((answer, index) => {

                                let letter = "A"

                                switch (index) {
                                    case 0: letter = "A";
                                        break;
                                    case 1: letter = "B";
                                        break;
                                    case 2: letter = "C";
                                        break;
                                    case 3: letter = "D";
                                        break;
                                    case 4: letter = "E";
                                        break;
                                    default: letter = "A";
                                        break;
                                }


                                return (
                                    <li className={`py-4 px-3 rounded-md shadow-md hover:bg-[#67949E] hover:text-white ${finalQuestion[currentQuestion].selected === answer && "bg-[#67949E] text-white"}`}>
                                        <span className='flex items-center gap-3 transition-all duration-750' onClick={() => {
                                            setFinalQuestion((prev) => {
                                                let copy = [...prev]
                                                copy[currentQuestion].selected = answer
                                                return copy
                                            })
                                        }}>

                                            <p className='font-semibold'>{letter}.</p>
                                            <p>
                                                {answer}
                                            </p>

                                        </span>
                                    </li>
                                )

                            })
                        }

                    </ul>
                </div>

                <div className='flex w-full  justify-between items-center absolute bottom-5 p-0 px-[2%] '>
                    <button className='text-[#67949E]  px-10 py-3 border-2 border-[#67949E] rounded-lg font-semibold' onClick={() => setCurrentQuestion((prev) => (currentQuestion === 0 ? 0 : currentQuestion - 1))}>
                        Previous
                    </button>
                    {currentQuestion + 1 !== data.length ? <button className='text-white px-10 py-3 border-2 border-[#67949E] rounded-lg font-semibold bg-[#67949E]' onClick={() => {setCurrentQuestion((prev) => (currentQuestion + 1 >= data.length) ? 0 : prev + 1); calculateProgress()}}>
                        Next
                    </button> :

                        <button className='text-[#67949E]  px-10 py-3 shadow-lg rounded-lg font-semibold' onClick={()=>{calculateTotal(); calculateProgress()}}>
                           Submit
                        </button>



                    }



                </div>


            </div>




        </div>
    )
}

export default Quiz
