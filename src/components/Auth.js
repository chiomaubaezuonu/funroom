import React from 'react'
import { auth, provider } from "../fb-config"
import { signInWithPopup } from "firebase/auth"


import Cookies from 'universal-cookie'
const cookies = new Cookies();

const Auth = () => {

    
        const signIn = async () => {
            try { 
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
         }
    
    catch(err){
        console.log(err)
    }
    };
    return (
        <div className='bg-slate-400'>
            <p>Sign in with Google to continue</p>
            <button className='bg-blue-600 text-white py-1 px-2 rounded' onClick={signIn}>Sign in</button>
        </div>
    )
}

export default Auth