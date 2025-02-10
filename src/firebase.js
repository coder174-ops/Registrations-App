import {initializeApp} from "firebase/app"; 

const firebaseConfig = {
    apiKey: "AIzaSyBQfX_rpMOKuWj1s1GDXuKPoTcPEvoWDa8",
    authDomain: "neeraj-app-f0007.firebaseapp.com",
    projectId: "neeraj-app-f0007",
    storageBucket: "neeraj-app-f0007.appspot.com",
    messagingSenderId: "700788695503",
    appId: "1:700788695503:web:a1ec313b958c66fb6332ba",
    databaseURL: "https://neeraj-app-f0007-default-rtdb.firebaseio.com",
};

export const app=initializeApp(firebaseConfig);