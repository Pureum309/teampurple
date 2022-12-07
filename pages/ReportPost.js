import React, { useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore";
import { db, auth, storage } from "../firebase/firebase.config.js";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import {
    collection,
    doc
  } from "firebase/firestore";


  // get the post data

  useEffect(
    () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
    [db, id]
  );

async function ReportPost() {
    const [post, setPost] = useState();

    const reportCollectionRef = collection(db, "report");

    const router = useRouter()

    const reportPost = async () => {
        await addDoc(reportCollectionRef, {
            // reportText
        });
       
        if(window.confirm("Are you sure to report this post")){
            deleteDoc(doc(db, "post", post.id))
            deleteObject(ref(storage, `posts/${post.id}`))
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
 
    // const GetData = async () => {
    //     const db = getFirestore();

    //     const querrySnapshot = await getDocs(collection(db, "user"));

    //     const dbusers = [];
    //     QuerySnapshot.forEch((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //         dbusers.push(doc.data())
    //         ;
    //     });

    //     setUsers([
    //         ...dbusers
    //     ])
    // }
}

export default ReportPost;