import React, { useEffect, useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";
import CreatePost from "./CreatePost";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export default function App() {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  useEffect(() => {
    const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

    getPosts();
  });

  return (
    <div id="main">
      This is home page

      <CreatePost />

      <div id="PostDisplay">
        {postLists.map((post) => {
          return (
            <div className="post">
              <div className="postHeader" 
                  style={{
                  borderStyle: "solid",
                  borderWidth: "2px",
                  margin:"10px"
                  }}>
                  <h2> {post.postText}</h2>
              </div>
            </div>        
          );
        })}
      </div>
      
    </div>
    );
}