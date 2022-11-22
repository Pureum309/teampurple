import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config.js";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router'


function CreatePost() {
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  //  let navigate = useNavigate();

  const router = useRouter()

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      postText,
      author: { user: auth.currentUser.email, id: auth.currentUser.uid },
    });
    router.push("/HomePage");
  };


  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h3>Post a Tweet</h3>
        <div className="inputCp">
          <label> Content:</label>
          <textarea style={{width:"40%"}}
            placeholder="Write something to post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;