import { Fragment } from "react";
import Footer from "../../component/footer/footer.component";
import Navbar from "../../component/navbar/navbar.component";
import Section from "../../component/section/section.component";
import {  Outlet } from "react-router-dom";


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