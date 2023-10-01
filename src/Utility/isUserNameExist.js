import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const isUsernameExist = async (username) => {
  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  const snapshotToArray = (snapshot) => {
    let returnArr = [];

    snapshot.forEach((childSnapshot)=> {
      returnArr.push(childSnapshot.data());
    });

    return returnArr;
  };
  return snapshotToArray(querySnapshot).length > 0;
};
export default isUsernameExist;
