import { Fragment } from "react";
import Navbar from "../../component/navbar/navbar.component";
import Footer from "../../component/footer/footer.component";


const Dashboard=()=>{
    return(
        <Fragment>
            <div className='container mx-auto flex flex-col items-center justify-center max-h-screen h-screen border-box'>
                <Navbar/>
                <div className="h-full bg-gray-800 w-full">içeridk</div>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Dashboard;