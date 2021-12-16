import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from "./useAuth";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();
  const signUp = async (email, password, displayName) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (!cred) {
        throw new Error("Register Error");
      }
      await updateProfile(cred.user, { displayName });
      dispatch({ type: "LOGIN", payload: cred.user });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { error, isPending, signUp };
};
