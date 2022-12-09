import React, { useEffect, useRef, useState } from "react";

import { signup, login, logout, useAuth } from "../firebase/firebase.config.js";
import CreatePost from "./CreatePost";
import { getDocs, collection, addDoc, doc, deleteDoc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import EditPost from "./Edit.js";

import ReportPost from "../pages/ReportPost";
import {loginUser} from '../pages/index.js';

import styles from "../styles/Home.module.css";
import Image from  'next/image';
import logoImg from "../assets/logo.png";
import { MdOutlineReportProblem } from "react-icons/md";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";
import { async } from "@firebase/util";

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

  const [editbox,seteditbox] = useState(false)

  const [postTxt, setPostText] = useState("");

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

  useEffect(() => {
  }, []);

  const UpdatePost = async(id) => {
    const userRef = doc(db, 'posts', id);
    updateDoc(userRef, { 
        postText: postTxt,
      }, { merge: true }).then(res => setPostList(null));
}

  return (
    <div id='main' className={styles.main}>
       <Image 
          src={logoImg} 
          alt="/"
          width="120"
          height="120"
        />
      <div className={styles.rowLeft}>
        <div className={styles.userInfo}>
          <div>Currently logged in as: </div>
          <div>{ currentUser?.email } </div>
        </div>
          <button className={styles.smallBtn} disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
      </div>
      

      
        <CreatePost />
     
     

      <div id="PostDisplay">
      {postLists !== null &&
        postLists.map((post) => {
          if (post.author.user != reportUser) {
            return (
              <div className={styles.post}>
                <div className={styles.postHeader}>
                    <h2> {post.postText}</h2>
                    <h5>Posted by {post.author.user}</h5>
                      {currentUser.uid == post.author.id &&
                        <>
                        <div className={styles.editStyle}>
                          { editbox === true &&
                            <>
                              <p>Edit Your Post</p>
                              <textarea
                                placeholder="Edit your post..." 
                                onChange={(txt)=> {
                                  setPostText(txt.target.value)
                                }}
                              />
                              <div className={styles.btnCont}>
                                <button onClick={() => UpdatePost(post.id)} className={styles.smallBtn}>update</button>
                              </div>
                            </>
                          }
                          <button onClick={()=>seteditbox(true)} className={styles.smallBtn}>Edit</button>
                          </div>
                        </>
                      }
                    <div className={styles.btnCont}>
                      {currentUser.uid != post.author.id &&
                          <button className={styles.smallBtn} onClick={() => {
                            if (window.confirm("Are you sure to report this post")){
                            reportPress(post.author.user)}
                          }}
                          > 
                          <button className={styles.icon}/>
                          Report</button>
                        }
                      {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                      <>
                      {/* <button onClick={() => followPress(post.author.id)}>Follow</button> */}
                      <button className={styles.smallBtn} onClick={() => followPress(post.author.id)}> <RiUserFollowLine className={styles.icon}/> Follow</button>
                      </>
                      }
                      {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                      <>
                      {/* <button onClick={() => unfollowPress(post.author.id)} disabled={true}>Unfollow</button> */}
                      <button className={styles.smallBtn} onClick={() => unfollowPress(post.author.id)} disabled={true}> <RiUserUnfollowLine className={styles.icon}/> Unfollow</button>
                      </>
                      }
                      {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                      <>
                      <h6>Now your are following: {post.author.user}</h6>
                      {/* <button onClick={() => followPress(post.author.id)} disabled={true}>Follow</button> */}
                      <button className={styles.smallBtn} onClick={() => followPress(post.author.id)} disabled={true}> <RiUserFollowLine className={styles.icon}/> Follow</button>
                      </>
                      }
                      {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                      <>
                      {/* <button onClick={() => unfollowPress(post.author.id)}>Unfollow</button> */}
                      <button className={styles.smallBtn} onClick={() => unfollowPress(post.author.id)}> <RiUserUnfollowLine className={styles.icon}/> Unfollow</button>
                      </>
                      }
                      {/* <button className={styles.smallBtn} onClick={() => followPress(post.author.id)}> <RiUserFollowLine className={styles.icon}/> Follow</button> */}
                      {/* <button className={styles.smallBtn} onClick={() => unfollowPress(post.author.id)}> <RiUserUnfollowLine className={styles.icon}/> Unfollow</button> */}
                  </div>
                </div>
                {/* <ReportPost /> */}
              </div>        
            );
          } else {
            return (
              <div className={styles.post}>
                <div className={styles.postHeader}>
                    <h2> {post.postText}</h2>
                    <h5>Posted by {post.author.user}</h5>
                    <div className={styles.btnCont}>
                      
                      <button className={styles.smallBtn} onClick={() => {
                        if (window.confirm("Are you sure to report this post")){
                        reportPress(post.author.user)}
                      }}
                      > 
                      <MdOutlineReportProblem className={styles.icon}/>
                      Report</button>
                    {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                    <>
                    {/* <button onClick={() => followPress(post.author.id)}>Follow</button> */}
                    <button className={styles.smallBtn} onClick={() => followPress(post.author.id)}> <RiUserFollowLine className={styles.icon}/> Follow</button>
                    </>
                    }
                    {followers?.find(follower => follower.follower == post.author.id) == null && currentUser.uid != post.author.id &&
                    // <button onClick={() => unfollowPress(post.author.id)} disabled={true}>Unfollow</button>
                    <button className={styles.smallBtn} onClick={() => unfollowPress(post.author.id)} disabled={true}> <RiUserUnfollowLine className={styles.icon}/> Unfollow</button>
                    }
                    {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                    <>
                    <h6>Now your are following: {post.author.user}</h6>
                    <button className={styles.smallBtn} onClick={() => followPress(post.author.id)} disabled={true}> <RiUserFollowLine className={styles.icon}/> Follow</button>
                    {/* <button onClick={() => followPress(post.author.id)} disabled={true}>Follow</button> */}
                    </>
                    }
                    {followers?.find(follower => follower.follower == post.author.id) != null && currentUser.uid != post.author.id &&
                    // <button onClick={() => unfollowPress(post.author.id)}>Unfollow</button>
                    <button className={styles.smallBtn} onClick={() => unfollowPress(post.author.id)}> <RiUserUnfollowLine className={styles.icon}/> Unfollow</button>
                    }
                  </div>
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
