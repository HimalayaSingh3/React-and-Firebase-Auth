import React,{useState} from 'react'
import { getAuth,signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase'
import "./Form.css"

const auth=getAuth(app);

const SignIn = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    const LoginUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>
            alert("Login SuccessFul")
        )
        .catch((error)=>alert(error))
    }

      
  
      const createUser=()=>{
          createUserWithEmailAndPassword(auth,email,password).then((value)=>
              alert("Register SuccessFul")
          )
      }
  

  return (
    <div className="form-auth">
      <h1>{isLogin ? "Login" : "Register"}</h1>

{isLogin ? (
    <div className="data">
        <div className="detail-email">
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='email' />
        </div>
        <div className="detail-pass">
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password"placeholder='password' />
        </div>
        <button className="btn" onClick={LoginUser}>Login</button>
    </div>
 ) : (
    <div className="data">
        <div className="detail-email">
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='email' />
        </div>
        <div className="detail-pass">
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password"placeholder='password' />
        </div>
        <button className='btn' onClick={createUser}>Register</button>
    </div>
)}
    <div className="login-forget">
    <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button className='toggle' onClick={toggleForm}>
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>

        </div>
    </div>
  )
}

export default SignIn
