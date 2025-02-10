import React,{useState} from 'react';
import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from '../firebase';

const auth =getAuth(app);

const SIgnupPage=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(value=>
            alert('success'));
    };

    return(
        <div className="signup-page">
            <h1>Sign-up Page</h1>
          <label><b>Email</b></label>
          <input  onChange={(e)=>setEmail(e.target.value)}
          value={email}
          type="email" required placeholder="Enter your email here"/>

          <label><b>Password</b></label>
          <input onChange={(e)=>setPassword(e.target.value)}
          value={password}
          type="password" required placeholder="Enter your password here"/>
          <button onClick={createUser}>Signup</button>
         
        </div>
    );
};
export default SIgnupPage;