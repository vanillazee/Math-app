import { db } from "~/plugins/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const usersCollection = collection(db, "users");

export const addUser = async (user) => {
  return await addDoc(usersCollection, user);
};

export const getUsers = async () => {
  const snapshot = await getDocs(usersCollection);
  return snapshot.docs.map(doc => doc.data());
};
