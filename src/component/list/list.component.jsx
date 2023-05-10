import { Fragment } from "react";
import {ListData} from '../../data';
const List=()=>{
    const dataList=ListData.map((list)=>(
        <div key={list.id}>
            <h1 className="text-white mt-5">{list.name}</h1>
        </div>
    ));
    return(
        <Fragment>
            {dataList}
        </Fragment>

    )
}

export default List;