import React, { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";

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
      await login(emailRef.current.value, passwordRef.current.value);
      window.location = "/HomePage";
      
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      
      <h1>Welcome to our Social media</h1>

      <div id="fields">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}