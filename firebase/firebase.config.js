import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIR5GSNhNUqJ-KZMVAyz3L0inw_ATm16I",
  authDomain: "purple-db-f8b90.firebaseapp.com",
  projectId: "purple-db-f8b90",
  storageBucket: "purple-db-f8b90.appspot.com",
  messagingSenderId: "345335363425",
  appId: "1:345335363425:web:e4113fb602d02b6cd93720"
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