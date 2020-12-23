import React ,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './Firebase'

function Login() {
    const history=useHistory();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const login=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
               history.push('/')
        })
        .catch((e)=>alert(e.message))
    }

    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch((e)=>alert(e.message))
    }


    return (
        <div className="login">
       
        
      
         <div className="login_container">
             <h1>Sign in</h1>
             <form>
             <h5>E-mail</h5>
             <input value={ email} onChange={event =>setEmail(event.target.value)} type="email">
             </input>
             <h5>Password</h5>
             <input value={ password } onChange={event =>setPassword(event.target.value)} type="password">
             </input>
             <button  onClick={login}   type="submit" className="login_signInButton">Sign In</button>
             </form>
             <p>
             By signing in you agree to followng terms and conditions
             </p>
             <button onClick={register}className="login_registerButton">Create your account</button>
         </div>
        </div>
    )
}

export default Login
