import {useEffect,useState} from "react";
import {getAuth,onAuthStateChanged,signOut } from "firebase/auth";
import {app} from "./firebase";
import SIgnupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import './App.css';

const auth=getAuth(app);

function App() {

  const [user,setUser]=useState(null);

   useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
        //yes,you are log in
        setUser(user);
      }else{
        //user is logged out
        console.log("you are log out");
        setUser(null);
      }
    });
   },[])

   if (user===null){
    return (
      <div className="App">
        <SIgnupPage/>
        <SigninPage/>
      </div>
    );
   }
  return (
    <div className="Log-out ">
      <h1>Hello</h1>
      <h2>{user.email}</h2>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  );
};

export default App;
