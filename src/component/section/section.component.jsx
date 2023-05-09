import { Fragment } from "react";
import {AiFillHome} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'
import Cover from '../../assets/cover.jpg';


const Section=()=>{
    return(
        <Fragment>
            <div className='section mx-auto flex items-center justify-center w-full h-full'>
                <div className='sidebar w-1/5 p-4 h-full bg-black1 md:text-2xl lg:text-2xl owerflow-hidden'>
                    <div className="section-one ">
                        <div className="home flex ">
                            <h1 className="text-white "><AiFillHome/></h1>
                            <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110">Home</h1>
                        </div>
                        <div className="search-bar flex ">
                            <h1 className="text-white"><BiSearch/></h1>
                            <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110">Search</h1>
                        </div>
                    </div>
                    <div className="section-two pt-7">
                        <div className="flex">
                            <h1 className="text-white"><MdOutlineCreateNewFolder/></h1>
                            <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110">Create Playlist</h1>
                        </div>
                        <div className="flex ">
                            <h1 className="liked"><FcLike/></h1>
                            <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110">Liked Songs</h1>
                        </div>
                    </div>
                    <div className="section-three pt-4"> 
                        <hr/>
                        <div>
                            <h1 className="text-white">Liste 1</h1>
                        </div>
                        <div>
                            <h1 className="text-white">Liste 2</h1>
                        </div>
                        <div>
                            <h1 className="text-white">Liste 3</h1>
                        </div>
                    </div>

                </div>
                
                <div className="content w-4/5 p-4 h-full bg-black4 owerflow-auto border-b owerflow-auto">
                    <div className="grid grid-cols-3 grid-rows-auto gap-3 text-white ">
                        <div>
                                <div className="text-center">
                                    <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                    <h1 className="text-lg">Liste 1</h1>
                                </div>  
                        </div>
                        <div>
                            <div className="text-center">
                                <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                <h1 className="text-lg">Liste 2</h1>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                <h1 className="text-lg">Liste 3</h1>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                <h1 className="text-lg">Liste 4</h1>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                <h1 className="text-lg">Liste 5</h1>
                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                <h1 className="text-lg">Liste 5</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};

export default Section;