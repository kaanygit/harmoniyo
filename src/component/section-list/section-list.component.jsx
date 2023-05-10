import { Fragment, useEffect, useState } from "react";
import Cover from '../../assets/cover-2.jpg';


const SectionList=({openList,setOpenList})=>{
    const previewList=()=>{
        setOpenList(!openList);
    };

    useEffect(()=>{
        console.log(openList);
    },[openList])
    return(
        <Fragment>
            <div className="grid grid-cols-3 grid-rows-auto gap-3 text-white">
                <div>
                    <div className="text-center">
                        <img onClick={previewList} src={Cover} alt="" className="w-32 h-32 object-cover mx-auto mb-2 rounded-md" />
                        <h1 onClick={previewList} className="text-lg">Liste 1</h1>
                    </div>  
                </div>
            </div>
        </Fragment>
    )
}

export default SectionList;