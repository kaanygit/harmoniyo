import { Navigate,Outlet } from "react-router-dom";
import { useContext ,useEffect} from "react";
import { UserContext } from "../../context/user/user.context";

const PrivateRoute=()=>{
    const {currentUser}=useContext(UserContext);
    const girisState = JSON.parse(localStorage.getItem("girisState"));

    useEffect(() => {
        if (currentUser && !girisState) {
            localStorage.setItem("girisState", JSON.stringify(true));
            console.log('1');
        }else if(!currentUser && girisState) {
            console.log('2');
        }
      }, [currentUser]);

    
    return girisState ? <Outlet/>:<Navigate to='/'/>
}

export default PrivateRoute;