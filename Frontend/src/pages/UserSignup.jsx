import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserDataContext } from "../context/UserContext"

const UserSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const navigate = useNavigate()
  const { user, setUser } = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      }
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
      if (response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem("token", data.token)
        navigate("/hero")
      }
    } catch (error) {
      console.error("Error creating account:", error.response ? error.response.data : error.message)
    }

    setEmail("")
    setPassword("")
    setFirstname("")
    setLastname("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='' />
        <form onSubmit={submitHandler} action='' method=''>
          <h3 className='text-lg font-medium mb-2'>Enter Your Name</h3>
          <div className='flex gap-3 mb-6'>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              placeholder='Firstname'
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              placeholder='Lastname'
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>Enter Your Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-base placeholder:text-base'
            required
            type='email'
            placeholder='abc@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Create Your Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-base placeholder:text-base'
            required
            type='password'
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-sm'>Create Account</button>
        </form>
        <p className='text-center'>Already have an account?{" "}<Link to='/login' className='text-blue-600 '>Go To Login</Link> </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup