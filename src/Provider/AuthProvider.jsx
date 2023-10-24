import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext() 
const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const[loading,setLoading]=useState(true)
   
    //sign-up user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    } 
    // login out
    const logoutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // Observer
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
        })
        return  () => {unsubscribe()}
    },[])

    const authInfo={user,loading,createUser,loginUser,logoutUser}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}       
        </AuthContext.Provider>
    );
};

export default AuthProvider;