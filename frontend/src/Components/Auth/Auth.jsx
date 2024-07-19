import React, { useState } from 'react'
import bgImage from '../../assets/bg.png'
import eye from "../../assets/Eye.png"

const Auth = () => {
  const [vPassword,setVPassword] = useState(false)
  const [isLogin,setIsLogin] = useState(true)

  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }

  const togglePasswordVisible = () => {
    setVPassword(!vPassword)
  }

  return (
    <>
    <div className='absolute'>
      <img className='w-screen h-screen' src={bgImage} alt='bg-image'></img>
    </div>  
    <div className=' bg-white absolute my-12 mx-32 shadow-xl from-black rounded-2xl h-[540px] w-[540px]'>
        <div className='p-8'>
            <h1 className='font-bold text-2xl'>{!isLogin ? "Create your account" : "Welcome Back!"}</h1>
            <p className='my-3 cursor-pointer' onClick={toggleLogin}>
              {!isLogin ? "Already have an account? Login" : "Dont have an account yet? Create your account"}</p>
          <form className='py-5' onSubmit={(e) => e.preventDefault()}>
          {!isLogin && <div className='mb-6'>
            <label className="font-bold block mb-2" htmlFor="name">Full Name</label>
            <input
              className="w-full p-2 border-2 border-slate-300 rounded outline-none"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>}
          <div className='mb-6'>
            <label className="font-bold block mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border-2 border-slate-300 rounded outline-none"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="font-bold block mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border-2 border-slate-300 rounded outline-none"
              type={!vPassword ? "password" : "text"}
              placeholder="Password"
              required
            />
            <img 
              className='absolute right-4 top-1/2 cursor-pointer'
              src={eye} alt='eye'
              onClick={togglePasswordVisible}></img>
          </div>
          {isLogin && <p className="text-center my-7 font-medium underline cursor-pointer">
            Forgot Your Password?
          </p>}
          <button type="submit" 
          className="w-full my-3 bg-orange-400 font-semibold py-2 rounded-lg">{!isLogin ? "Create Account" : "Sign In"}</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Auth
