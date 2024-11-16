import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseInit";

export const updateUserScore = async (uid, newScore) => {
  const userDoc = doc(db, "users", uid);
  await updateDoc(userDoc, { score: newScore });
};
