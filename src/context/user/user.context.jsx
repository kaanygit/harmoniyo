import { createContext, useEffect, useState } from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../../firebase/firebase'

export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};
    useEffect(()=>{
        const unSubscribe=onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unSubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}