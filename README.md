# React and Firebase Authentication

## Overview
This project demonstrates how to implement user authentication in a React application using Firebase Authentication. It provides a simple yet effective way to manage user sign-ups and logins.

## Features
- **User Registration**: Users can create an account using their email and password.
- **User Login**: Allows users to log in with their registered email and password.
- **Error Handling**: Displays appropriate error messages for failed authentication attempts.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v12 or later)
- npm or yarn

## Getting Started

### 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add Project" and follow the prompts to create a new project.
3. Once created, navigate to the "Authentication" section from the left sidebar.
4. Click on "Get Started" and enable the **Email/Password** sign-in method.

### 2. Set Up Your React Application
1. Create a new React application if you haven't already:
   ```bash
   npx create vite@latest my-react-app
   cd my-react-app
   ```
   
2. Install Firebase SDK:
   ```bash
   npm install firebase
   ```

### 3. Configure Firebase in Your React App
Create a new file named `firebase.js` in the `src` directory and add the following code:

```javascript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
Replace `"YOUR_API_KEY"` and other placeholders with your actual Firebase project configuration details.

### 4. Implement Authentication Components
Create components for Sign Up, Sign In, and Logout.

#### Form Component
```javascript
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

```

#### App.jsx
```javascript
import Form from './pages/Form'

function App() {

  return (

    <>
    <Form/>
    </>
  )
}

export default App

```


## Running the Application
To run your application locally, execute:
```bash
npm start
```
Visit `http://localhost:3000` in your browser to see your authentication system in action.

