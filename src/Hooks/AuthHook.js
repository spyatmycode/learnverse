import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../Utility/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import isUsernameExist from "../Utility/isUserNameExist";
import { useNavigate } from "react-router-dom";
import { ROOT, SIGNIN } from "../Utility/Routers/Router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Get USER
export const useUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(docRef);
      setUserInfo((prevState) => docSnap.data());
      setLoading(false);
    };
    if (!loading) {
      if (user) {
        fetchData();
      } else setLoading(false);
    }
  }, [loading]);

  return [userInfo, isLoading];
};

// Register hook
export const useRegister = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async ({ username, email, password, redirectTo = ROOT }) => {
    setLoading(true);

    const usernameExists = await isUsernameExist(username);

    if (usernameExists) {
      toast.error("Username already exists");
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
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

        toast.success("Account created");

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
  const navigate = useNavigate();

  const login = async ({ email, password, redirectTo = ROOT }) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        setLoading(false)
        toast.success("Login Successful");
        navigate(redirectTo);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      return false;
    }
  };
  return [login, isLoading];
};

// Logout Hook
export const useLogout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const navigate = useNavigate();
  const logout = async () => {
    if (await signOut()) {
      toast.success("Successfully logged out");
      navigate(SIGNIN);
    }
  };
  return [logout, loading];
};
