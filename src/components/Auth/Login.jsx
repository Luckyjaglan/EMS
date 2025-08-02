import React, { useState } from 'react'

const Login = ({handlelogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const submitHandler = (e) =>{
        e.preventDefault()
        handlelogin(email, password)

        setPassword("")
    }


  return (
    <div className='h-screen w-screen bg-[#1C1C1C] '>
      <div className='bg-black'>
          <h1 className='text-5xl p-6 text-emerald-200'>Welcome to Task Manager Portal</h1>
        </div>
      <div className='flex items-center justify-center m-20'>
        <div className='w-2xl border-2 border-emerald-200 rounded-2xl px-18 py-10'>
          <img className=' border-blue-300 border-4 rounded-full mb-8 ml-[25%]' src="https://imgs.search.brave.com/c02_er9mWYs24RoRfGDytFUvkUG_gV8c_yYPAAuzVeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNjg0Mi8xNjg0/MjU3MS5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw" alt="" />
          <form
          onSubmit={(e)=>{
              submitHandler(e)
          }} 
          className='flex flex-col items-center justify-center'
          >
              <input
              value={email}
              onChange={(e)=>
                  setEmail(e.target.value)
              }
              required
              className='text-white w-[70%] bg-transparent outline-none border-2 border-blue-600 rounded-full px-5 py-4 text-xl placeholder:text-gray-400' 
              type='email'
              placeholder='Enter your email' 
              />
              <input
              value={password}
              onChange={(e)=>
                  setPassword(e.target.value)
              }
              required
              className=' text-white w-[70%] bg-transparent outline-none border-2 border-blue-600 rounded-full px-5 py-4 text-xl placeholder:text-gray-400 mt-3 '
              type="password"
              placeholder='Enter password' 
              />
              <button
              className='text-black outline-none w-[40%] border-2-none bg-emerald-500 rounded-full px-5 py-4 text-xl mt-8'
              >Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
