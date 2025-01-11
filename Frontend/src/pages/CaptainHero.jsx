import React, { useRef,useState } from 'react'
import { Link } from "react-router-dom"
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHero = () => {
const [ridePopup, setRidePopup] = useState(true)
const ridepopupRef=useRef(null)
const [confirmridepopup, setconfirmridepopup] = useState(false)
const confirmridepopupRef=useRef(null)


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



  return (
    <div className='h-screen '>
   <div className='fixed p-5 top-0 flex items-center justify-between w-full'>
    <img className='w-14' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt=''/>
    <Link to='/hero' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
    <i class="ri-logout-box-r-line text-2xl"></i>
    </Link>
   </div>
    <div className="h-[65%] ">
      <img className="h-full object-cover" src='https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png' alt='' />
    </div>
    <div className='h-[35%] px-5 py-5 '>
     <CaptainDetails/>
    </div>
   
    <div ref={ridepopupRef} className='fixed w-full z-10 bottom-0 p-3 translate-y-full  bg-white py-10'>
      <RidePopup  setconfirmridepopup={setconfirmridepopup} setRidePopup={setRidePopup}/>
      </div>

      <div ref={confirmridepopupRef} className='fixed w-full h-screen z-10 bottom-0 p-3 translate-y-full  bg-white py-10'>
      <ConfirmRidePopup  setconfirmridepopup={setconfirmridepopup} setRidePopup={setRidePopup}/>
      </div>
    
  </div>
  )
}

export default CaptainHero