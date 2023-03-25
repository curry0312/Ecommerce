import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Login/Input'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [correctPassword, setCorrectPassword] = useState("")
  console.log({email,password})
  return (
    <div className='h-screen bg-darkblue md:flex md:justify-center md:items-center'>
      <div className='h-full bg-white p-4 md:w-[30%] md:min-w-[300px] md:h-[70%]'>
        <div className='text-center'>
          <p className='text-3xl font-roboto'>-Signup-</p>
        </div>
        <div>
          <form className='flex flex-col gap-4' action="">
            <Input label="Email" type="email" id="email" setFunc={setEmail}  />
            <Input label="Password" type="text" id="password" setFunc={setPassword}  />
            <Input label="Check Password" type="text" id="password" setFunc={setCorrectPassword}  />
            <div className='flex gap-2 font-shan'>
              <p>Already have an account ?</p>
              <Link to="/user/Login" className='underline hover:text-gray-400'>Click here</Link>
            </div>
            <button type='submit' className='p-2 text-white font-shan rounded-md bg-green-500 hover:bg-green-600'>Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
