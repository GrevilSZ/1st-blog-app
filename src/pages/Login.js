import React from 'react';
import {auth, provider } from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';

function Login( { setIsAuth } ){
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result) =>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
        })
    };
    return (
        <div className="loginPage">
            <p>Iniciá sesión para continuar</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Ingresar con Google</button>
        </div>
    )
}

export default Login;