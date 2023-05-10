import { Fragment, useState } from "react"
import { Link } from "react-router-dom";
import {signInAuthUserWithEmailAndPassword} from '../../firebase/firebase'


const defaultFormFields={
    email:'',
    password:''
}


const SignIn=({onError})=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email,password}=formFields;
    const resetFormFields=()=>{setFormFields(defaultFormFields)};

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
            console.log(response)
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':onError('Incorrect password or Email !');break
                case 'auth/user-not-found':onError('User Not Found');break
                default:console.log(error);
            }
        }
    }
    const handlerChange =(e)=>{
        const{name,value}=e.target;
        setFormFields({...formFields,[name]:value});
    }
    console.log(formFields);
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="email-form mb-2">
                    <div>
                        <label htmlFor="email" className="email text-xl mb-2 text-white block leading-6 pb-2">Email</label>
                        <input label="Email" name="email" type="email" value={email} required onChange={handlerChange } className="asd block rounded-md w-full text-gray-100 py-2 shadow-sm ring-inset ring-1 ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  bg-black2" placeholder="email"/>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="password flex items-center justify-between">
                            <label htmlFor="password" className="passwordH1 text-xl text-white block leading-6 pt-2 pb-2">Password</label>
                            <Link path="/" className="forgotPassword leading-6 pt-2 pb-2 font-semibold text-sm text-indigo-600 hover:text-indigo-50">Forgot Password?</Link>
                        </div>
                        <input type="password" name="password" value={password} onChange={handlerChange } className="passwordBox block rounded-md w-full text-gray-100 py-2 shadow-sm ring-inset ring-1 ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  bg-black2" placeholder="password" required/>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="submit" className="buttonSignIn w-full mt-4 bg-blue-500 rounded-md py-1.5 px-3 text-md leading-6 font-bold text-white shadow-sm hover:bg-blue-400 focus-visiable:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">Sign In</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default SignIn;