import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbzNvOsBAWeBEMaARzBUvD2RQ3N1tlUi8",
  authDomain: "purple-data-7fe35.firebaseapp.com",
  projectId: "purple-data-7fe35",
  storageBucket: "purple-data-7fe35.appspot.com",
  messagingSenderId: "1008620037133",
  appId: "1:1008620037133:web:67e92dd2e70ee4536e6144"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export const db = getFirestore(app);
