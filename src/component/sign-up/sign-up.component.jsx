import { Fragment, useState } from "react"
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../firebase/firebase';


const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUp=({onError})=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
    const resetFormFields=()=>{setFormFields(defaultFormFields)}; 


    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            onError('Password not the same!')
            return;
        }
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields()
        }catch(error){
            if(error.code==='auth/email-already-in-use'){
                onError('This email has already been received!');
            }else{
                console.log('Error Code : ',error);
            }
        }
    };
    const handlerChance=(e)=>{
        const {name,value}=e.target;
        setFormFields({...formFields,[name]:value});
    };
    console.log(formFields);

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="name-form mb-2">
                    <div>
                        <h1 className="name text-xl mb-2 text-white block leading-6 pb-2">Name</h1>
                        <input name="displayName" type="text" onChange={handlerChance} value={displayName} className="name-box block rounded-md w-full text-gray-100 py-2 shadow-sm ring-inset ring-1 ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  bg-black2" placeholder="Name"/>
                    </div>
                </div>
                <div className="email-form mb-2">
                    <div>
                        <h1 className="email text-xl mb-2 text-white block leading-6 pb-2">Email Adress</h1>
                        <input name="email" type="email" onChange={handlerChance} value={email} className="asd block rounded-md w-full text-gray-100 py-2 shadow-sm ring-inset ring-1 ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  bg-black2" placeholder="email"/>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="password flex items-center justify-between">
                            <h1 className="passwordH1 text-xl text-white block leading-6 pt-2 pb-2">Password</h1>
                        </div>
                        <input name="password" type="password" onChange={handlerChance} value={password} className="passwordBox block rounded-md w-full text-gray-100 py-2 shadow-sm ring-inset ring-1 ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  bg-black2" placeholder="password" required/>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="confirmPassword flex items-center justify-between">
                            <h1 className="confirmPasswordH1 text-xl text-white block leading-6 pt-2 pb-2">Confirm Password</h1>
                        </div>
                        <input type="password" name="confirmPassword" onChange={handlerChance} value={confirmPassword} className="passwordBox block rounded-md w-full text-gray-100 py-2 shadow-sm ring-inset ring-1 ring-gray-200  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  bg-black2" placeholder="password" required/>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="submit" className="buttonSignIn w-full mt-4 bg-blue-500 rounded-md py-1.5 px-3 text-md leading-6 font-bold text-white shadow-sm hover:bg-blue-400 focus-visiable:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">Sign Up</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default SignUp;