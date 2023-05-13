import { useContext, useEffect, useState } from "react";
import { Outlet,Navigate } from "react-router-dom";
import {UserContext} from '../../context/user/user.context'
const PrivateRoute = () => {
    // const {currentUser}=useContext(UserContext);
    // const [user,setUser]=useState(false);
    // useEffect(()=>{
    //     if(currentUser){
    //         setUser(!user);
    //     }else{
    //         console.log('giris olmadı');
    //     }
    // },[currentUser])
    let auth = {'token':false}
    return(
        auth ?<Outlet/>:<Navigate to="/login"/>
    )
}

export default PrivateRoute;