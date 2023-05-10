import { Fragment } from "react";
import { Outlet } from "react-router-dom";


const Navbar=()=>{
    return(
        <Fragment>
            <div className='nav pb-5 sticky top-0  w-screen z-10 bg-black2 tracking-widest shadow-lg top-0'>
                <nav className="justify-center items-center flex flex-row">
                    <h1 className="text-3xl font-bold items-center justify-center flex  font-bold text-5xl pb-2 text-customBlue pt-2">
                        Harmony
                    </h1>
                </nav>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar;