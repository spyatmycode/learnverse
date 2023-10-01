import axios from "axios";



export const fetchQuestions = async(url)=>{

   try {

    const response = await axios.get(url);
    const questions = await response.data.results

    console.log("utils", questions);

    return questions
    
    
   } catch (error) {

    console.log("ERRORRRRR", error);
    
   }
}