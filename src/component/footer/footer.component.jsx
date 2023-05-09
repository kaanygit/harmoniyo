import { Fragment } from "react"
import {HiFastForward,HiOutlineVolumeOff,HiOutlineVolumeUp} from 'react-icons/hi';
import {HiBackward} from 'react-icons/hi2';
import {VscDebugStart,VscDebugPause} from 'react-icons/vsc';

const Footer=()=>{
    return(
        <Fragment>
            <div className='music-player sticky fixed bottom-0 w-full pt-5 bg-black2 items-center justify-center overflow-hidden z-10 flex shadow-lg'>
                <div className=" justify-between w-full items-center pb-5 pl-5 pr-5 box-border flex flex-wrap text-white ">
                    <div className="flex">
                        <p className="transition-transform duration-300 transform-gpu hover:scale-110">diğer kısım</p>
                    </div>
                    <div className="flex justify-center items-center ">
                        <h1 className="backwoard pr-2 pl-2 transition-transform duration-300 transform-gpu hover:scale-110"><HiBackward/></h1>
                        <h1 className="start pr-2 pl-2 text-bold transition-transform duration-300 transform-gpu hover:scale-110 font-bold "><VscDebugStart/> </h1>
                        <h1 className="pause hidden transition-transform duration-300 transform-gpu hover:scale-110"><VscDebugPause/> </h1>
                        <h1 className="foward pr-2 pl-2 transition-transform duration-300 transform-gpu hover:scale-110"><HiFastForward/></h1>
                    </div>
                    <div className="flex justify-center right-0">
                        <div className="justify-between flex ">
                            <h1 className="text-3x1 transition-transform duration-300 transform-gpu hover:scale-110 pr-2"><HiOutlineVolumeOff/></h1>
                            <h1 className=" transition-transform duration-300 transform-gpu hover:scale-110"><HiOutlineVolumeUp/></h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Footer;