import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Login/Input'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log({email,password})
  return (
    <div className='md:flex md:justify-center md:items-center h-screen bg-darkblue'>
      <div className='h-full bg-white rounded-none p-4 md:w-[30%] md:h-[70%] md:min-w-[300px] md:rounded-lg'>
        <div className='text-center'>
          <p className='text-3xl font-roboto'>-Login-</p>
        </div>
        <div>
          <form className='flex flex-col gap-4' action="">
            <Input label="Email" type="email" id="email" setFunc={setEmail}  />
            <Input label="Password" type="password" id="password" setFunc={setPassword}  />
            <div className='flex gap-2 font-shan'>
              <p>Don't have an account?</p>
              <Link to="/user/register" className='underline hover:text-gray-400'>Click here</Link>
            </div>
            <button type='submit' className='p-2 text-white font-shan rounded-md bg-green-500 hover:bg-green-600'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
