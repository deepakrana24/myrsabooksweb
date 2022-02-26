
import {
  FirebaseDataProvider,
} from 'react-admin-firebase';

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjfbi0wJKESviqPTH4VSMOJsSUjD_BDZE",
  authDomain: "myrsabooks.firebaseapp.com",
  projectId: "myrsabooks",
  storageBucket: "myrsabooks.appspot.com",
  messagingSenderId: "991889269476",
  appId: "1:991889269476:web:f0baa3b248804801f0c2f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const options ={ watch:['books' , 'user']}


const dataProvider = FirebaseDataProvider(firebaseConfig, options);
// const authProvider = FirebaseAuthProvider(firebaseConfig, options);
// const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);



export const db = getFirestore(app);
export {
 
   dataProvider , 
  
  };
