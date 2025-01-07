import React, { useState } from 'react'
import { Link } from "react-router-dom"


const Captainlogin = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword]  = useState("")
 const [captainData, setcaptainData]  = useState({})
 
 
 

 const submitHandler=(e) => {
  e.preventDefault()
  setcaptainData({
    email: email,
    password: password,
  })
  
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
     <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
     
     </form>
     <p className='text-center'> Join a fleet ?{" "}<Link to='/captain-signup' className='text-blue-600 '>Register as a Captain</Link> </p>
    </div>
    <div>
     <Link to='/login' className='bg-[#eb7a3d] mt-2 flex items-center justify-center  text-black font-semibold mb-5 rounded-md px-4 py-2  w-full text-lg placeholder:text-base'>Sign-In As User</Link>
    </div>
   </div>
  )
}

export default Captainlogin