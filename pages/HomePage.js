import React, { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";
import { useNagigate } from 'react-router-dom';

export default function App() {

  return (
    <div id="main">
      This is home page
    </div>
  );
}