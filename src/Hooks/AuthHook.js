import { useState } from "react";
import { toast } from "react-toastify";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { auth, db } from "../Utility/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import isUsernameExist from "../Utility/isUserNameExist";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../Utility/Routers/Router";

// Get USER
export const useUser = () => {
  const [user, loading, error] = useAuthState(auth);

  return [user, loading, error];
};

// Register hook
export const useRegister = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const register = async ({ username, email, password, redirectTo = ROOT }) => {
    setLoading(true);

    const usernameExists = await isUsernameExist(username);

    if (usernameExists) {
      toast.error("Username already exists");
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(email, password);
        const docReference = doc(db, "users", res.user.uid);
        await setDoc(docReference, {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
          firstName: "",
          lastName: "",
          gender: "",
          userType: "Student",
          email: "",
          dob: "",
        });

        toast.success("Account created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        navigate(redirectTo);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return [register, isLoading];
};

// Login hook
export const useLogin = () => {
  // Loading state
  const [isLoading, setLoading] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const login = async ({ email, password, redirectTo = ROOT }) => {
    setLoading(true);
    await signInWithEmailAndPassword(email, password);
    if (!error) {
      toast.success("Login Successful");
      navigate(redirectTo);
      setLoading(false);
    }

    if (error) {
      toast.error(error.message);
      setLoading(false);
    }

    return false; //Return false if login failed

    setLoading(false);
    return true;
  };
  return [login, isLoading];
};
