import { auth } from "~/plugins/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};
