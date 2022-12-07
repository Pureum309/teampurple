import React, { useEffect, useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";
import CreatePost from "./CreatePost";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import EditPost from "./Edit.js";

export default function Home({dev}) {

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      window.location = "/";
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const [postLists, setPostList] = useState(null);
  const postsCollectionRef = collection(db, "posts");

  const [editbox,seteditbox] = useState(false)

  useEffect(() => {
    console.log("useEffect");
    const getPosts = async () => {
      console.log("getPosts");
    const data = await getDocs(postsCollectionRef);
    let tempPosts = [];
    data.docs.map((doc) => 
    tempPosts.push({ ...doc.data(), id: doc.id }));
    console.log(tempPosts.length);
    setPostList(tempPosts);
  };

    if (postLists === null) {
      getPosts();
    }
  });

  return (
    <div id="main">
      
      <div>Currently logged in as: { currentUser?.email } </div>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
      <CreatePost />

      <div id="PostDisplay">
      {postLists !== null &&
        postLists.map((post) => {
          return (
            <div className="post">
              <div className="postHeader" 
                  style={{
                  borderStyle: "solid",
                  borderWidth: "2px",
                  margin:"10px"
                  }}>
                  <h2> {post.postText}</h2>
                  <h6>Posted by {post.author.user}</h6>
                  <button onClick={()=>seteditbox(true)}>Edit</button>
                  {editbox === true && <EditPost dev ={dev} seteditbox={seteditbox}/>}
              </div>
            </div>        
          );
        })}
      </div>

    </div>
    
  );

}