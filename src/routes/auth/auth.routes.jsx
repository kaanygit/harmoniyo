import { Fragment, useState } from "react"
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

const Auth=()=>{
    const [signTrue,setSignTrue]=useState(false);
    const handleSignUp=()=>{
        setSignTrue(!signTrue);
    }
    return(
        <Fragment>
            <div className="container max-w-screen w-full flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black1">
                <div>
                    {signTrue?(
                        <>
                            <div className="signIn sm:mx-auto sm:w-full sm:max-w-sm">
                                <h1 className="harmoniyo text-6xl text-customBlue font-bold text-center mb-5 pb-5 tracking-wide">Harmoniyo</h1>
                                <h2 className="signIn text-xl text-gray-300 font-bold text-center">Sign Up for Harmoniyo</h2>
                            </div>
                            <div className="asdasd mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <SignUp/>
                            </div>
                        </>
                    ):(
                        <>
                            <div className="signIn sm:mx-auto sm:w-full sm:max-w-sm">
                                <h1 className="harmoniyo text-6xl text-customBlue font-bold text-center mb-5 pb-5 tracking-wide">Harmoniyo</h1>
                                <h2 className="signIn text-xl text-gray-300 font-bold text-center">Sign In for Harmoniyo</h2>
                            </div>
                            <div className="asdasd mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <SignIn/>
                            </div>
                        </>
                    )}
                    <p className="signUpRoute mt-3 text-center text-white">
                        {signTrue?(
                            <>
                                <span>Üyeliğiniz varmı ?</span>
                                <label  className="signInRouteHref pl-2 text-customBlue hover:text-blue-300" onClick={handleSignUp}>Sign In</label>
                            </>
                            ):(
                            <>
                                <span>Üyeliğiniz yokmu o zaman?</span>
                                <label className="signUpRouteHref pl-2 text-customBlue hover:text-blue-300" onClick={handleSignUp}>Sign Up</label>
                            </>
                        )}
                    </p>  
                </div>
            </div>          
        </Fragment>
    )
}

export default Auth;