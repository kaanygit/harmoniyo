import { Fragment, useContext, useEffect, useState } from "react";
import Footer from "../../component/footer/footer.component";
import Navbar from "../../component/navbar/navbar.component";
import Section from "../../component/section/section.component";
import {  Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";

const Home=()=>{

    return(
        <Fragment>
                <div className='container mx-auto flex flex-col items-center justify-center max-h-screen h-screen border-box'>
                    <Navbar/>
                    <Section/>
                    <Footer/>
                </div>
            <Outlet/>
        </Fragment>
    )
}

export default Home;