import { Fragment } from "react"
import {HiFastForward,HiOutlineVolumeOff,HiOutlineVolumeUp} from 'react-icons/hi';
import {HiBackward} from 'react-icons/hi2';
import {VscDebugStart,VscDebugPause} from 'react-icons/vsc';
import { Outlet } from "react-router-dom";

const Footer=()=>{
    return(
        <Fragment>
            <div className='music-player sticky fixed bottom-0 w-screen pt-5 bg-black2 items-center justify-center  z-10 flex shadow-lg'>
                <div className=" justify-between w-full items-center pb-5 pl-5 pr-5 box-border flex flex-wrap text-white ">
                    <div className="flex">
                        <p className="transition-transform duration-300 transform-gpu hover:scale-110">diğer kısım</p>
                    </div>
                    <div className="flex justify-center items-center ">
                        <h1 className="backwoard pr-2 pl-2 transition-transform duration-300 transform-gpu hover:scale-110 text-xl "><HiBackward/></h1>
                        <h1 className="start pr-2 pl-2 text-bold transition-transform duration-300 transform-gpu hover:scale-110 font-bold text-2xl border-solid border-2 border-sky-500 rounded-3xl bg-gray-200 text-customBlue "><VscDebugStart/> </h1>
                        <h1 className="pause hidden transition-transform duration-300 transform-gpu hover:scale-110 text-2xl border-solid border-2 border-sky-500 rounded-3xl bg-gray-200 text-customBlue "><VscDebugPause/> </h1>
                        <h1 className="foward pr-2 pl-2 transition-transform duration-300 transform-gpu hover:scale-110 text-xl"><HiFastForward/></h1>
                    </div>
                    <div className="flex justify-center right-0">
                        <div className="justify-between flex  ">
                            <h1 className="text-xl transition-transform duration-300 transform-gpu hover:scale-110 pr-2 "><HiOutlineVolumeOff/></h1>
                            <input type="range" className="asdas"/>
                            <h1 className=" transition-transform duration-300 transform-gpu hover:scale-110 text-xl"><HiOutlineVolumeUp/></h1>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Footer;