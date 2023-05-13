import { Fragment, useState } from "react";
import Footer from "../../component/footer/footer.component";
import Navbar from "../../component/navbar/navbar.component";
import Section from "../../component/section/section.component";
import {  Outlet } from "react-router-dom";


const Home=()=>{
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <Fragment>
                <div className='container mx-auto flex flex-col items-center justify-center max-h-screen h-screen border-box'>
                    <Navbar/>
                    <Section isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                    <Footer isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                </div>
            <Outlet/>
        </Fragment>
    )
}

export default Home;