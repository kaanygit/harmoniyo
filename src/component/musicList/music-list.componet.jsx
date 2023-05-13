import Cover from '../../assets/cover-2.jpg';
import Audios from '../audios/audios.component';
import {BiSearch} from 'react-icons/bi'
import {AiOutlinePlayCircle,AiOutlineHeart} from 'react-icons/ai'
import {BsDownload} from 'react-icons/bs'
import {BiDotsHorizontalRounded,BiTimeFive} from 'react-icons/bi'

const MusicList=({isPlaying,setIsPlaying})=>{
    return(
        <div>
            <div>
                <div className='items-center justify-center text-center'>
                    <img src={Cover} alt="cover" className='w-32 h-32 object-cover mx-auto mb-2 rounded-md justify-center '/>
                    <h1 className="text-lg pt-3">Liked Songs</h1>
                </div>
                <div className='asd items-center flex justify-between text-3xl '>
                    <div className='box-left pl-5 flex'>
                        <span className='playButton hover:text-customBlue'><AiOutlinePlayCircle/></span>
                        <span className='heartButton pl-3 pr-3 hover:text-customRed '><AiOutlineHeart/></span>
                        <span className='downloadButton pr-3 '><BsDownload/></span>
                        <span className='settingsButton '><BiDotsHorizontalRounded/></span>
                    </div>
                    <div className='searchButton pr-5 '><BiSearch/></div>
                </div>
                <div className='pt-10 flex justify-between border-b '>
                    <div className='flex'>
                        <p className='w-4'>#</p>
                        <p className='pl-5'>Title</p>
                    </div>
                    <div><p className='pr-5'><BiTimeFive/></p></div>
                </div>
                <div><Audios setIsPlaying={setIsPlaying} isPlaying={isPlaying}/></div>
            </div>
        </div>
    )
}
export default MusicList;