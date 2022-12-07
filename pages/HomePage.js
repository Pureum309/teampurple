import React, { useEffect, useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";
import CreatePost from "./CreatePost";
import { getDocs, collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

import ReportPost from "../pages/ReportPost";
import {loginUser} from '../pages/index.js';

export default function Home() {

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
  const [followers, setFollowers] = useState(null);
  const [reportUser, setReportUser] = useState("");

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    console.log("useEffect");

    const getPosts = async () => {
      console.log("getPosts");
      const data = await getDocs(postsCollectionRef);
      let tempPosts = [];
      data.docs.map((doc) => 
      tempPosts.push({ ...doc.data(), id: doc.id }));
      setPostList(tempPosts);
    };

    const getFollowers = async () => {
      try {
        console.log("getFollowers");
        const followersCollectionRef = collection(db, "users", currentUser.uid, "followers");
        const data = await getDocs(followersCollectionRef);
        let tempFollowers = [];
        data.docs.map((doc) => 
        tempFollowers.push({ ...doc.data(), id: doc.id }));
        setFollowers(tempFollowers);
      } catch {}
    };

    if (postLists === null) {
      getPosts();
    }

    if (followers == null) {
      getFollowers();
    }
  });

  const followPress = async (user) => {
    const usersCollectionRef = collection(db, "users", currentUser.uid, "followers");
    const result = await addDoc(usersCollectionRef, {
      follower: user
    });

    followers.push({follower: user, id: result.id});
    setFollowers([...followers]);
  }

  const unfollowPress = async (user) => {
    const docId = followers.find(follower => follower.follower == user)?.id;
    if (docId != null) {
      await deleteDoc(doc(db, "users", currentUser.uid, "followers", docId));

      const index = followers.findIndex(follower => { return follower.id == docId});
      followers.splice(index, 1);

      setFollowers([...followers]);
    }
  }
  const reportPress = (user) => {
    console.log("report!!!" + user);
    setReportUser(user);
  }

  return (
    <div id="main">
      
      <div>Currently logged in as: { currentUser?.email } </div>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
      <CreatePost />

      <div id="PostDisplay">
      {postLists !== null &&
        postLists.map((post) => {
          if (post.author.user != reportUser) {
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
                    <button onClick={() => {
                      if (window.confirm("Are you sure to report this post")){
                      reportPress(post.author.user)}
                    }}
                    > Report</button>
                    {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                  <>
                  <button onClick={() => followPress(post.author.id)}>Follow</button>
                  </>
                  }
                  {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                   <button onClick={() => unfollowPress(post.author.id)} disabled={true}>Unfollow</button>
                  }
                  {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                  <>
                  <h6>Now your are following: {post.author.user}</h6>
                  <button onClick={() => followPress(post.author.id)} disabled={true}>Follow</button>
                  </>
                  }
                  {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                  <button onClick={() => unfollowPress(post.author.id)}>Unfollow</button>
                  }
                </div>
                {/* <ReportPost /> */}
              </div>        
            );
          } else {
            return (
              <div className="post">
                <div className="postHeader" 
                    style={{
                    borderStyle: "solid",
                    borderWidth: "2px",
                    margin:"10px",
                    backgroundColor: "red"
                    }}>
                    <h2> {post.postText}</h2>
                    <h6>Posted by {post.author.user}</h6>
                    <button onClick={() => reportPress(post.author.user)}> Report</button>
                    {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                  <>
                  <button onClick={() => followPress(post.author.id)}>Follow</button>
                  </>
                  }
                  {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                   <button onClick={() => unfollowPress(post.author.id)} disabled={true}>Unfollow</button>
                  }
                  {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                  <>
                  <h6>Now your are following: {post.author.user}</h6>
                  <button onClick={() => followPress(post.author.id)} disabled={true}>Follow</button>
                  </>
                  }
                  {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                  <button onClick={() => unfollowPress(post.author.id)}>Unfollow</button>
                  }
                </div>
                {/* <ReportPost /> */}
              </div>        
            );
          }
        })}
      </div>

    </div>
    
  );

}