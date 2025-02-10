import React, {useState} from "react";
import { getAuth ,signInWithEmailAndPassword,GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const SigninPage=()=>{

   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
 
   const signinUser=()=>{
     signInWithEmailAndPassword(auth,email,password)
     .then((value)=>console.log("Signin success"))
     .catch((err)=>console.log("Error"));
   };
  const signupWithgoogle=()=>{
    signInWithPopup(auth,googleProvider);
  };
    return(
        <div className="signin-page">
            <h1>Sign-in Page</h1>
           <label><b>email</b></label>
           <input onChange={(e)=>setEmail(e.target.value)}
           value={email}
           type="email" 
           placeholder="Enter your email here"/>

           <label><b>password</b></label>
           <input onChange={(e)=>setPassword(e.target.value)}
           value={password} 
           type="password" placeholder="Enter your password here"/>
           <button onClick={signinUser}>Signin me</button>
           <br></br>
           <br></br>
          <button onClick={signupWithgoogle}>Signin with google</button>
        </div>
    );
};
export default SigninPage;