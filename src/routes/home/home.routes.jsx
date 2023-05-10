import { Fragment, useContext, useEffect, useState } from "react";
import Footer from "../../component/footer/footer.component";
import Navbar from "../../component/navbar/navbar.component";
import Section from "../../component/section/section.component";
import {  Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";
import { Navigate } from "react-router-dom";

const Home=()=>{
    const {currentUser}=useContext(UserContext);
    const gelis=JSON.parse(localStorage.getItem('girisState'));


    useEffect(()=>{
        const users=JSON.parse(localStorage.getItem('kullanıcıGirisGlobal'));
        if(users){
           localStorage.setItem('girisState',JSON.stringify(true)); 
        }else{
            localStorage.setItem('girisState',JSON.stringify(false)); 
            <Navigate to='/'/>;
        }
    },[gelis])
    
    return(
        <Fragment>
            {gelis?(
                <Fragment>
                        <div className='container mx-auto flex flex-col items-center justify-center max-h-screen h-screen border-box'>
                            <Navbar/>
                            <Section/>
                            <Footer/>
                        </div>
                    <Outlet/>
                </Fragment>
            ):(
                <Navigate to='/'/> 
            )}
        </Fragment>
    )
}

export default Home;