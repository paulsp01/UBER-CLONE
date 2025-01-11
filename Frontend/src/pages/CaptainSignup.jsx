import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { CaptainDataContext } from "../context/CaptainContext"

const CaptainSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehiclePlate, setVehiclePlate] = useState("")
  const [vehicleCapacity, setVehicleCapacity] = useState("")
  const [vehicletype, setVehicleType] = useState("")

  const navigate = useNavigate()
  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newCaptain = {
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity), // Ensure capacity is a number
        vehicletype: vehicletype // Ensure this matches the backend
      }
    }

    console.log("Submitting new captain:", newCaptain) // Debugging log

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain)
      console.log("Response from backend:", response) // Log response from backend
      if (response.status === 201) {
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
    setFirstname("")
    setLastname("")
    setVehicleColor("")
    setVehiclePlate("")
    setVehicleCapacity("")
    setVehicleType("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='' />
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
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-3 mb-6'>
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              placeholder='Vehicle Color'
            />
            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-base'
              required
              type='text'
              placeholder='Vehicle Plate'
            />
          </div>
          <div className='flex gap-3 mb-6'>
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-base'
              required
              type='number'
              placeholder='Vehicle Capacity'
            />
            <select
              value={vehicletype}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-base'
              required
            >
              <option value='' disabled>Select Vehicle Type</option>
              <option value='Car'>Car</option>
              <option value='Auto'>Auto</option>
              <option value='Motorcycle'>Motorcycle</option>
            </select>
          </div>
          <button className='bg-amber-600 text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-sm'>Create Account</button>
        </form>
        <p className='text-center mb-8'>Already have an account?{" "}<Link to='/captain-login' className='text-blue-600 '>Go To Login</Link> </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup