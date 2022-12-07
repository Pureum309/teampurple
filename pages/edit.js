import { refEqual } from "firebase/firestore";
import React, {useState} from "react";

import { collection, addDoc, setDoc, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";
import {db} from '../firebase/firebase.config'

function EditPost({dev,seteditbox, id, route}){

    const [postText, setPostText] = useState("");

    const UpdatePost = () => {
        // const userRef = doc(db, 'posts', id);
        // setDoc(userRef, {
        //     postText: postText
        // }, { merge: true})
        console.log(id + "hereeee");
    }

    return(
        <div>
           <p>Edit Your Post</p>
           <textarea style={{width:"40%"}}
            placeholder="Edit your post..." onChangeText={(txt)=>setPostText(txt)}/>
           <button onPress={UpdatePost}>update</button>
        </div>
    )
}

export default EditPost