import React, { useRef, useState } from 'react'
import bgImage from '../../assets/bg.png'
import eye from "../../assets/Eye.png"
import eyeclose from "../../assets/eyeclose.png"
import { Validation } from './Validation'
import { useDispatch } from 'react-redux'
import { adduser } from '../../Store/UserSlice'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [vPassword,setVPassword] = useState(false)
  const [isLogin,setIsLogin] = useState(true)
  const [isAdminLogin,setIsAdminLogin] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async() => {
    const message = Validation(email.current.value,password.current.value)
    //console.log(message)
    setErrorMessage(message)
    if(message) return

    const userDetails = {
      name: name.current?.value,
      email: email.current.value,
      password: password.current.value,
  };

  try {
    const endpoint = isAdminLogin ? "admin/login" : `user/${isLogin ? "login" : "signup"} `

    const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      const errorText = await response.text(); 
      setErrorMessage(errorText); 
      return;
    }

    const data = await response.json();
    dispatch(adduser(data.user))
    //console.log(data);

    if(isAdminLogin){
      navigate("/Admin-Dashboard")
    }else{
      navigate("/browse")
    }
    } catch (error) {
      setErrorMessage("Failed to fetch");
      console.error(error);
    }
  }
    
  const toggleLogin = () => {
    setIsLogin(!isLogin)
    setErrorMessage("")
  }

  const togglePasswordVisible = () => {
    setVPassword(!vPassword)
  }

  return (
    <>
    <div className='absolute font-rubik'>
      <img className='w-screen h-screen' src={bgImage} alt='bg-image'></img>
    </div>  
    <div className=' bg-white absolute my-12 mx-32 shadow-xl from-black rounded-2xl h-[540px] w-[540px]'>
        <div className='p-8'>
            <h1 className='font-bold text-2xl'>{!isLogin ? "Create your account" : "Welcome Back!"}</h1>
            <p className='my-3 font-semibold text-gray-700' onClick={toggleLogin}>
              {!isLogin ? "Already have an account?" : "Dont have an account yet?"}
              <span className='mx-1 underline cursor-pointer'>{!isLogin ? "Login" : "Create your account"}</span></p>
            <p className='text-red-700 py-1 font-bold'>{errorMessage}</p>
          <form className='py-5' onSubmit={(e) => e.preventDefault()}>
          {!isLogin && <div className='mb-6'>
            <label className="font-bold block mb-2" htmlFor="name">Full Name</label>
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md outline-none"
              type="text"
              ref={name}
              placeholder="Full Name"
              required
            />
          </div>}
          <div className='mb-6'>
            <label className="font-bold block mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md outline-none"
              ref={email}
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="font-bold block mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border-2 border-gray-200 rounded-md outline-none"
              ref={password}
              type={!vPassword ? "password" : "text"}
              placeholder="Password"
              required
            />
            <img 
              className='absolute right-4 top-1/2 cursor-pointer'
              src={vPassword ? eyeclose : eye} 
              alt={vPassword ? "Hide password" : "Show password"}
              onClick={togglePasswordVisible}></img>
          </div>
          {isLogin && <p className="text-center my-7 font-medium underline cursor-pointer">
            Forgot Your Password?
          </p>}
          <button type="submit" onClick={handleSubmit}
          className="w-full my-3 bg-orange-400 font-semibold py-2 rounded-lg">{!isLogin ? "Create Account" : "Sign In"}</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Auth
