import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext/AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setloading] = useState(true);


    const RegWithEmail = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
    const unsubscribe  =  onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
            setloading(false);

});
    return ()=>{
        unsubscribe()
    }
    },[])

    const logOut = ()=>signOut(auth);

    const LogIn = (email,password)=>{
        setloading(true);
    return signInWithEmailAndPassword(auth, email, password)
    
    } 


    const UserInfo = {
        user,
        setUser,
        logOut,
        LogIn ,
        RegWithEmail,
        loading,
        setloading
    }


    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;