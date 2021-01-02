import React, {useState} from "react";
import { Link , useHistory} from "react-router-dom";
import './Login.css'

import {auth} from './firebase'

function Login() {

    const history=useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn= e =>{
        e.preventDefault();
        
        
        //some fancy firebase className="shit" brohhh!!!!!!
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error=>{ console.log(error)})
    }

    const register = e=>{
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                if(auth) history.push('/');
            })
            .catch(error=> alert(error.message))
        //some fancy firebase className="shit" brohhh!!!!!!

    }


    
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://seeklogo.net/wp-content/uploads/2016/10/amazon-logo-preview.png"
          alt=""
        />
      </Link>


      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>Email</h5>
            <input type="text" value={email} 
            onChange={e=> setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password} 
            onChange={e=> setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login__signInButton'>
            Sign in</button>
        </form>
        <p>By continuing, you agree to Amazon Clone's Conditions
         of Use and Privacy Notice.</p>
         <button onClick={register} className='login__registerButton'>Create your amazon account</button>
      </div>
    </div>
  );
}

export default Login;
