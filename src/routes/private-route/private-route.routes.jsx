import { Navigate, Outlet } from "react-router-dom";
import { useContext ,useEffect} from "react";
import { UserContext } from "../../context/user/user.context";

const PrivateRoute=()=>{
    const {currentUser}=useContext(UserContext);
    const isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));

    useEffect(() => {
        const isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));
        if (currentUser && !isSignedIn) {
            localStorage.setItem("isSignedIn", JSON.stringify(true));
            console.log('1');
        }else if(!currentUser && isSignedIn) {
            console.log('2');
        }
      }, [currentUser]);

    
    return isSignedIn ? <Navigate to='/home' />:<Navigate to='/'  />
}

export default PrivateRoute;