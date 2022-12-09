import React, { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";
import styles from "../styles/Home.module.css";
import Image from  'next/image';
import logoImg from "../assets/logo.png";
import bgImg from "../assets/bg.png";

export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleSignup() {
    setLoading(true);
    // try {
      await signup(emailRef.current.value, passwordRef.current.value);
      window.location = "/HomePage";
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      const user = await login(emailRef.current.value, passwordRef.current.value);
      window.location = "/HomePage";
      
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className={styles.row}>

      <div className={styles.colRight}>
        <Image 
          src={bgImg} 
          alt="/"
          fill
        />
      </div>

      <div  className={styles.colLeft}>

        <Image 
          src={logoImg} 
          alt="/"
          width="160"
          height="160"
        />
      
        <h1>Welcome!</h1>

          <input className={styles.input} ref={emailRef} placeholder="Email" />
          <input className={styles.input} ref={passwordRef} type="password" placeholder="Password" />

        <div className={styles.divider}>
          <button className={styles.button} disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
          <button className={styles.button} disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
        </div>
          
       
     </div>
    </div>
    
  );
}
