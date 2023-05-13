import { Fragment, useEffect } from "react";
import Cover from '../../assets/cover-2.jpg';
import {ListData} from '../../data';


const SectionList=({openList,setOpenList})=>{
    const previewList=()=>{
        setOpenList(!openList);
    };

    const SectionDataList=ListData.map((lists)=>(
        <div>
            <div key={lists.id} className="text-center" >
                <img onClick={previewList} src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                <h1 onClick={previewList} className="text-lg">{lists.name}</h1>
            </div>
        </div>
    ));

    useEffect(()=>{
        console.log(openList);
    },[openList])
    return(
        <Fragment>
            <div className="grid grid-cols-3 grid-rows-auto gap-3 text-white">
                {SectionDataList}
            </div>
        </Fragment>
    )
}

export default SectionList;