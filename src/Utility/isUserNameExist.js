import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./FirebaseConfig";


const isUsernameExist = async (username) => {
    const collectionRef = collection(db, 'users')
    const q = query(collectionRef, where('username', '==', username))
   const querySnapshot = await getDocs(q);

   return querySnapshot > 0
};
export default isUsernameExist;
