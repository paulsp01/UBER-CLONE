import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { CaptainDataContext } from "../context/CaptainContext"

const Captainlogin = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword]  = useState("")
 const [captainData, setcaptainData]  = useState({})
 
 
 const navigate = useNavigate()
      const { captain, setCaptain } = React.useContext(CaptainDataContext)

 const submitHandler=async (e) => {
  e.preventDefault()
  const captainData={
    email: email,
    password: password,
  }


  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem("token", data.token)
      navigate("/captain-hero")
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
    <img className=' w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt=''/>
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
     <button className='bg-amber-600 text-white font-semibold mb-3 rounded-md px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
     
     </form>
     <p className='text-center'> Join a fleet ?{" "}<Link to='/captain-signup' className='text-blue-600 '>Register as a Captain</Link> </p>
    </div>
    <div>
     <Link to='/login' className='bg-indigo-700 mt-2 flex items-center justify-center  text-black font-semibold mb-5 rounded-md px-4 py-2  w-full text-lg placeholder:text-base'>Sign-In As User</Link>
    </div>
   </div>
  )
}

export default Captainlogin