import { refEqual } from "firebase/firestore";
import React, {useState} from "react";

function EditPost({dev,seteditbox}){

    const [postText, setPostText] = useState("");

    return(
        <div>
           <p>editbox</p>
           <input type = "text" placeholder="postText" onChange={(e)=>setPostText(e.target.value)}/>
           <button onChange={() => {
                seteditbox(false)
           }}>update</button>
        </div>
    )
}

export default EditPost