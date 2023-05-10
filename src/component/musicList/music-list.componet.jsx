import Cover from '../../assets/cover-2.jpg';
import {BiSearch} from 'react-icons/bi'

const MusicList=()=>{
    return(
        <div>
            <div>
                <div className='items-center justify-center text-center'>
                    <img src={Cover} alt="cover" className='w-32 h-32 object-cover mx-auto mb-2 rounded-md justify-center '/>
                    <h1 className="text-lg pt-3">Liked Songs</h1>
                </div>
                <div className='asd items-center flex justify-between'>
                    <div className='playButton pl-5'>Play</div>
                    <div className='searchButton pr-5'><BiSearch/></div>
                </div>
            </div>
        </div>
    )
}
export default MusicList;