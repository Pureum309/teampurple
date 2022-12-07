import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiljGRaDoBd8vV0a5lA3JOPWX8sJiBgJ4",
  authDomain: "database-e342b.firebaseapp.com",
  projectId: "database-e342b",
  storageBucket: "database-e342b.appspot.com",
  messagingSenderId: "520876269296",
  appId: "1:520876269296:web:b5162025fa736dc4fc2c35"
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
