import { Fragment } from "react";


const Navbar=()=>{
    return(
        <Fragment>
            <div className='nav pb-5 sticky top-0  w-full overflow-hidden z-10 bg-black2 tracking-widest shadow-lg'>
                <nav className="justify-center items-center flex flex-row">
                    <h1 className="text-3xl font-bold items-center justify-center flex  font-bold text-5xl pb-2 text-customBlue pt-2">
                        Harmony
                    </h1>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar;