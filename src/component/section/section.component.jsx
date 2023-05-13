import { Fragment, useContext, useEffect, useState } from "react";
import {AiFillHome,AiFillHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineCreateNewFolder} from 'react-icons/md'
import {BiChevronLeft,BiChevronRight,BiCaretDown,BiChevronUp} from 'react-icons/bi'
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";
import { signOutUser } from "../../firebase/firebase";
import List from "../list/list.component";
import SectionList from "../section-list/section-list.component";
import MusicList from "../musicList/music-list.componet";
import { ListData } from "../../data";



const Section=({isPlaying,setIsPlaying})=>{
    const [openList,setOpenList]=useState(false);
    const [openSearch,setOpenSearch]=useState(false);
    const [createNewList,setCreateNewList]=useState(false);
    const [newListName, setNewListName] = useState("");

    const {currentUser}=useContext(UserContext);

    const backWoardClick=()=>{
        console.log('geri dönmek için tıkla');
        {openList?setOpenList(!openList):setOpenList(openList)};

    }
    const handleSignOut=()=>{
        signOutUser();
    };
    
    const searchBarOpen =()=>{
        setOpenSearch(!openSearch);
    };
    const createNewLists=()=>{
        console.log('yeni liste isteği');
        console.log(ListData);
        const listDataId=ListData.length;
        console.log(listDataId);
        setCreateNewList(!createNewList);
        console.log(newList);
    }
    const newList=(event)=>{
        event.preventDefault();
        console.log('liste');
        setCreateNewList(!createNewList);
        console.log(newList);
        console.log(newListName);
        if(newListName.trim() !== ""){
            let pushlanacak={
                "id": ListData.length+1,
                "name": newListName,
                "imageUrl": "https://e1.pxfuel.com/desktop-wallpaper/588/103/desktop-wallpaper-best-4-software-developer-backgrounds-on-hip-software-engineer.jpg",
                "like":false
              };
            ListData.push(pushlanacak);
        }

    }

    useEffect(()=>{
        console.log(openList);
        console.log(ListData);
    },[openList,ListData])

    return(
        <Fragment>
            <div className='section mx-auto flex flex-row md:flex-row items-center justify-center w-full max-w-screen h-screen  overflow-x-hidden left-0'>
                <div className='sidebar w-1/5 p-4 bg-black1 md:text-1xl lg:text-2xl fixed  h-full sticky max-w-screen overflow-auto scrollbar-hide'>
                    <div className="section-one ">
                        <div className="home flex ">
                            <h1 className="text-white " onClick={()=>{<Navigate to='/dashboard'/>}}><AiFillHome/></h1>
                            <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110">Home</h1>
                        </div>
                        <div className="search-bar flex ">
                            {!openSearch?
                                null
                                :
                                <input className="text-white w-full bg-gray-500 rounded-md text-xl shadow-sm " placeholder='Search Music'/>
                            }
                            <h1 className={`text-white transition-transform duration-300 transform-gpu hover:scale-110 ${openSearch?'pl-3':null}`}  onClick={searchBarOpen}><BiSearch/></h1>
                            <h1 className={`text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110 ${openSearch?'hidden':null}`} onClick={searchBarOpen}>Search</h1>
                        </div>
                    </div>
                    <div className="section-two pt-7">
                        <div className="flex">
                            {
                                createNewList?(
                                    <div className="">
                                        <form onSubmit={newList} className="justify-center items-center flex pb-3">
                                            <input type="text" className="newListInput w-full rounded-md bg-gray-500 text-xl shadow-sm text-white " placeholder="New List Name" value={newListName} onChange={(e) => setNewListName(e.target.value)}/>
                                            <button type="submit" className="newListCreateButton border-2 text-gray-100 bg-customBlue py-0.1 px-2 text-md leading-6 rounded-md hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ml-2">Create</button>
                                        </form>
                                    </div>
                                )
                                :(
                                <Fragment>
                                    <h1 className="text-white" onClick={createNewLists}><MdOutlineCreateNewFolder/></h1>
                                    <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110" onClick={createNewLists}>Create Playlist</h1>
                                </Fragment>
                                )
                            }
                        </div>
                        <div className="flex ">
                            <h1 className="liked text-customRed"><AiFillHeart/></h1>
                            <h1 className="text-white pl-3 transition-transform duration-300 transform-gpu hover:scale-110">Liked Songs</h1>
                        </div>
                    </div>
                    <div className="section-three pt-4 h-full"> 
                        <hr/>
                        <List/>
                    </div>

                </div>
                
                <div className="content w-4/5 p-4 h-full bg-black4 sticky overflow-auto text-white scrollbar-hide">
                    <div className="informations flex w-full justify-between pl-5 pr-5 ">
                        <div className="arrow flex w-full h-full text-lg ">
                            <div className="arrows flex border-solid border-2 border-sky-500 rounded-lg	h-full mr-3">
                                <h1 className="asasd" onClick={backWoardClick}><BiChevronLeft/></h1>
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
                    {!openList?
                        <SectionList openList={openList} setOpenList={setOpenList}/>
                        :
                        <MusicList setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Section;