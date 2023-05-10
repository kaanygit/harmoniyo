import { Fragment, useContext, useEffect, useState } from "react"
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";
import { signOutUser } from "../../firebase/firebase";



const Auth=()=>{
    const currentUser=useContext(UserContext);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [signTrue,setSignTrue]=useState(false);
    const [error,setError]=useState(null);
    const girisYapildi=JSON.parse(localStorage.getItem('isSignedIn'))
    const handleSignUp=()=>{
        setSignTrue(!signTrue);
    }
    const handleError=(errorMessage)=>{
        setError(errorMessage);
        toast.error(errorMessage);
    }

    useEffect(()=>{
        if(currentUser){
            setIsSignedIn(true);
            localStorage.setItem('isSignIn',JSON.stringify(true));
            localStorage.setItem('isSignedIn',JSON.stringify(true));
        }else{
            setIsSignedIn(false);
            localStorage.setItem('isSignIn',JSON.stringify(false));
        }
    },[currentUser])

    const handleSignOut=()=>{
        signOutUser();
        localStorage.setItem('isSignedIn',JSON.stringify(false));
    }
    return(
        <Fragment>
            {error &&<p>{error.message}</p>}
            <ToastContainer/>
            {currentUser?<button onClick={handleSignOut}>as</button>:null}
            {!girisYapildi?(
                <>
                    <div className="container max-w-screen w-full flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black1">
                        <div>
                            {signTrue?(
                                <>
                                    <div className="signIn sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h1 className="harmoniyo text-6xl text-customBlue font-bold text-center mb-5 pb-5 tracking-wide">Harmoniyo</h1>
                                        <h2 className="signIn text-xl text-gray-300 font-bold text-center">Sign Up for Harmoniyo</h2>
                                    </div>
                                    <div className="asdasd mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <SignUp onError={handleError}/>
                                    </div>
                                </>
                            ):(
                                <>
                                    <div className="signIn sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h1 className="harmoniyo text-6xl text-customBlue font-bold text-center mb-5 pb-5 tracking-wide">Harmoniyo</h1>
                                        <h2 className="signIn text-xl text-gray-300 font-bold text-center">Sign In for Harmoniyo</h2>
                                    </div>
                                    <div className="asdasd mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <SignIn onError={handleError}/>
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
                </>
            ):(
                <>
                    <Navigate to='/'/>
                </>
            )}

            <Outlet/>      
        </Fragment>
    )
}

export default Auth;