import { useRef, useState } from 'react';
import Cover from '../../assets/cover-2.jpg';
import { MusicData } from '../../music-data';

const Audios=()=>{
    const [isPlaying, setIsPlaying] = useState(false);
      const audioRef = useRef(null);

      const togglePlay = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };
    


    const musicData=MusicData.map((music)=>(
        <div className='flex w-full justify-between' key={music.id}>
            <div>
                <div className='flex'>
                    <h1 className='w-4'>{music.id}</h1>
                    <div className='pl-6'>
                        <img src={music.coverUrl} alt="cover" className='w-8 h-8 object-cover mx-auto rounded-md '/>
                        <audio ref={audioRef} src={music.musicUrl} />
                    </div>
                    <h1 className='pl-3' onClick={togglePlay}>{music.name}</h1>
                </div>
            </div>
            <div className=' pr-3'>
                <h1>4.58</h1>
            </div>
        </div>
    ));

    return(
        <div className='w-full h-full'>   
            <div className='mt-3 w-full h-full grid grid-cols-1 gap-4 '>
                {musicData}
            </div>
        </div>
    )
}

export default Audios