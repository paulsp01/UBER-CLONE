import React, { useRef,useState,useContext,useEffect } from 'react'
import { Link } from "react-router-dom"
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import {CaptainDataContext} from "../context/CaptainContext"
import {SocketContextProvider} from "../context/SocketContext"
import LiveTracking from "../components/LiveTracking"
import axios from 'axios'

const CaptainHero = () => {
const [ridePopup, setRidePopup] = useState(false)
const ridepopupRef=useRef(null)
const [confirmridepopup, setconfirmridepopup] = useState(false)
const confirmridepopupRef=useRef(null)
const [ ride, setRide ] = useState(null)

const { socket } = useContext(SocketContextProvider)
const { captain } = useContext(CaptainDataContext)

useGSAP(()=>{
  if(ridePopup) {
   gsap.to(ridepopupRef.current, {
     transform: "translateY(0)",
   })
  }else{
   gsap.to(ridepopupRef.current, {
     transform: "translateY(100%)",
   })
  }
 },[ridePopup])

 useGSAP(()=>{
  if(confirmridepopup) {
   gsap.to(confirmridepopupRef.current, {
     transform: "translateY(0)",
   })
  }else{
   gsap.to(confirmridepopupRef.current, {
     transform: "translateY(100%)",
   })
  }
 },[confirmridepopup])


 useEffect(() => {
  socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
  })



  const updateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

       

          socket.emit('update-location-captain', {
            
              userId: captain._id,
              location: {
                  ltd: position.coords.latitude,
                  lng: position.coords.longitude
              }
          })
      })
  }
  }

  const locationInterval = setInterval(updateLocation, 10000)
  updateLocation()

  // return () => clearInterval(locationInterval)
}, [])

socket.on('new-ride', (data) => {

  setRide(data)
  setRidePopup(true)

})

async function confirmRide() {
  
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

    rideId: ride._id,
    captainId: captain._id,


}, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

setRidePopup(false)
setconfirmridepopup(true)
}


  return (
    <div className='h-screen '>
   <div className='fixed p-5 top-0 flex items-center justify-between w-full'>
    <img className='w-14' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt=''/>
    <Link to='/hero' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
    <i class="ri-logout-box-r-line text-2xl"></i>
    </Link>
   </div>
    <div className="h-[65%] ">
    <LiveTracking/>
    </div>
    <div className='h-[35%] px-5 py-5 '>
     <CaptainDetails/>
    </div>
   
    <div ref={ridepopupRef} className='fixed w-full z-10 bottom-0 p-3 translate-y-full  bg-white py-10'>
      <RidePopup
        ride={ride}
        confirmRide={confirmRide}
        setconfirmridepopup={setconfirmridepopup} setRidePopup={setRidePopup}/>
      </div>

      <div ref={confirmridepopupRef} className='fixed w-full h-screen z-10 bottom-0 p-3 translate-y-full  bg-white py-10'>
      <ConfirmRidePopup  ride={ride} setconfirmridepopup={setconfirmridepopup} setRidePopup={setRidePopup}/>
      </div>
    
  </div>
  )
}

export default CaptainHero