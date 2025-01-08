import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { UserDataContext } from "../context/UserContext"

const UserLogin = () => {

 const [email, setEmail] = useState("")
 const [password, setPassword]  = useState("")
 //const [userData, setuserData]  = useState({})
 
 const navigate = useNavigate()
   const { user, setUser } = React.useContext(UserDataContext)
 

 const submitHandler= async (e) => {
  e.preventDefault()
  const userData={
    email: email,
    password: password,
  }


  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if (response.status === 200) {
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
}

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
     <img className=' w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt=''/>
      <form onSubmit={(e)=>{
        submitHandler(e)
        }} 
        action='' method=''>
      <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
      <input value={email} 
      onChange={(e)=>{
        setEmail(e.target.value)

      }} 
      className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base' required type='email' placeholder='email@example.com'/>
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input value={password} 
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base' required type='password' placeholder='password'/>
      <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
      
      </form>
      <p className='text-center'>New here?{" "}<Link to='/signup' className='text-blue-600 '>Create New Account</Link> </p>
     </div>
     <div>
      <Link to='/captain-login' className='bg-[#6ceb52] mt-2 flex items-center justify-center  text-black font-semibold mb-5 rounded-md px-4 py-2  w-full text-lg placeholder:text-base'>Sign-In As Captain</Link>
     </div>
    </div>
  )
}

export default UserLogin