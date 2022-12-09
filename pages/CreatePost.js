import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config.js";
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.css";


function CreatePost() {
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  //  let navigate = useNavigate();

  const router = useRouter()

  const postingPress = async () => {
    await addDoc(postsCollectionRef, {
      postText,
      author: { user: auth.currentUser.email, id: auth.currentUser.uid },
    });
    router.push("/HomePage");
  };


  return (
    <div className={styles.createPostPage}>
        <h3 className={styles.tittleLeft}>Post a PurpleTalk</h3>
        <div className={styles.inputCp}>
          {/* <label> Content:</label> */}
          <textarea className={styles.textarea}
            placeholder="Write something to post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <div  className={styles.leftCont}>
          <button className={styles.submitBtn} onClick={postingPress}> Submit Post</button>
        </div>
          
        
    </div>
  );
}

export default CreatePost;