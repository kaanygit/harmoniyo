import { Fragment, useContext } from "react";
import {AiFillHome} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'
import Cover from '../../assets/cover-2.jpg';
import {BiChevronLeft,BiChevronRight,BiCaretDown,BiChevronUp} from 'react-icons/bi'
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";
import { signOutUser } from "../../firebase/firebase";




const Section=()=>{
    const {currentUser}=useContext(UserContext);


    const handleSignOut=()=>{
        signOutUser();
        localStorage.setItem('isSignedIn',JSON.stringify(false));
    }

    return(
        <Fragment>
            <div className='section mx-auto flex flex-row md:flex-row items-center justify-center w-full max-w-screen h-screen  overflow-x-hidden left-0'>
                <div className='sidebar w-1/5 p-4 bg-black1 md:text-1xl lg:text-2xl fixed  h-full sticky max-w-screen '>
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
                    <div className="section-three pt-4 "> 
                        <hr/>
                        <div>
                            <h1 className="text-white mt-5">Liste 1</h1>
                        </div>
                        <div>
                            <h1 className="text-white">Liste 2</h1>
                        </div>
                        <div>
                            <h1 className="text-white">Liste 3</h1>
                        </div>
                    </div>

                </div>
                
                <div className="content w-4/5 p-4 h-full bg-black4 sticky overflow-auto text-white ">
                    <div className="informations flex w-full justify-between pl-5 pr-5 ">
                        <div className="arrow flex w-full h-full text-lg ">
                            <div className="arrows flex border-solid border-2 border-sky-500 rounded-lg	h-full mr-3">
                                <h1 className="asasd"><BiChevronLeft/></h1>
                            </div>
                            <div className="arrows flex border-solid border-2 border-sky-500 rounded-lg	h-full ">
                                <h1><BiChevronRight/></h1>
                            </div>
                        </div>
                        <div className="asd">
                            <div className="asdasd flex text-lg w-full">
                                <h1 className="asdas pr-3 inline-header">Test User</h1>
                                {currentUser?<button onClick={handleSignOut}>Sign Out</button>:null}
                                <h1><BiCaretDown/></h1>
                                <h1 className="asd hidden"><BiChevronUp/></h1>
                            </div>
                        </div>
                    </div>
                    <div className="asd w-full mb-10 text-xl">
                        <h1>Hoşgeldin Test User 👋</h1>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-auto gap-3 text-white ">
                        <div>
                            <div className="text-center">
                                <img src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                                <h1 className="text-lg">Liste 1</h1>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Section;