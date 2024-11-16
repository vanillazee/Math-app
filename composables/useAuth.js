import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseInit";

const user = ref(null);

export const useAuth = () => {
  // Monitor User Auth State
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      user.value = firebaseUser; // Set user data
      await saveUserToFirestore(firebaseUser); // Save user to Firestore
    } else {
      user.value = null; // No user signed in
    }
  });

  // Save user data to Firestore
  const saveUserToFirestore = async (firebaseUser) => {
    const userDoc = doc(db, "users", firebaseUser.uid);
    const userSnap = await getDoc(userDoc);

    // If the user doesn't exist in Firestore, create it
    if (!userSnap.exists()) {
      await setDoc(userDoc, {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName || "Anonymous",
        email: firebaseUser.email,
        score: 0, // Initialize score
      });
      console.log("User data saved to Firestore!");
    } else {
      console.log("User already exists in Firestore.");
    }
  };

  return {
    user, // Return user state for other components
  };
};
