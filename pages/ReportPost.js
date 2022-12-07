import React, { useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore";
import { db, auth, storage } from "../firebase/firebase.config.js";
import { useRouter } from 'next/router';
// import { useEffect, useState } from "react";
import {
    doc
  } from "firebase/firestore";

// import {post, author, id} from "../pages/CreatePost"
  // get the post data

  // useEffect(
  //   () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
  //   [db, id]
  // );

async function ReportPost() {
    const [post, setPost] = useState();

    // const reportCollectionRef = collection(db, "report");
    // const postsCollectionRef = collection(db, "posts");

    const router = useRouter()

    const reportPost = async () => {

       
        if(window.confirm("Are you sure to report this post")){
            deleteDoc(doc(db, "post", id))
            deleteObject(ref(storage, `posts/${id}`))
            // post.data().id 
        }

    router.push("/HomePage");
};

  return (
    <div className="reportPostBtn">
      <div className="reportPostContainer">
        <button onClick={reportPost}>Report Post</button>
      </div>
    </div>
  );
 
}

export default ReportPost;
