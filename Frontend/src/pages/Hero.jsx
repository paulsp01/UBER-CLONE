import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import LocationSearchpanel from '../components/LocationSearchpanel'
import { use } from 'react'
import Vpanel from '../components/Vpanel'
import ConfirmedVehicle from '../components/ConfirmedVehicle'
import LookingforDriver from '../components/LookingforDriver'
import WaitforDriver from '../components/WaitforDriver'

const Hero = () => {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [panelopen, setPanelopen] = useState(false)
  const panelRef = useRef(null)
  const vpanelRef=useRef(null)
  const ridefoundRef=useRef(null)
  const confirmvpanelRef=useRef(null)
  const panelcloseRef = useRef(null)
  const waitfordriverRef = useRef(null)
  const [vpanelopen, setVpanelopen] = useState(false)
  const [confirmvpanelopen, setConfirmvpanelopen] = useState(false)
  const [ridefound, setRidefound] = useState(false)
  const [waitingfordriver, setWaitingfordriver] = useState(false)


  




  const submitHandler = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  useGSAP(() => {
    if (panelopen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
        //opacity: 1,
      })
      gsap.to(panelcloseRef.current,{
      opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding:0
       // opacity:0
      })
      gsap.to(panelcloseRef.current,{
        opacity: 0,
        })
    }
  }, [panelopen])


  useGSAP(()=>{
   if(vpanelopen) {
    gsap.to(vpanelRef.current, {
      transform: "translateY(0)",
    })
   }else{
    gsap.to(vpanelRef.current, {
      transform: "translateY(100%)",
    })
   }
  },[vpanelopen])


  useGSAP(()=>{
    if(confirmvpanelopen) {
     gsap.to(confirmvpanelRef.current, {
       transform: "translateY(0)",
     })
    }else{
     gsap.to(confirmvpanelRef.current, {
       transform: "translateY(100%)",
     })
    }
   },[confirmvpanelopen])



   useGSAP(()=>{
    if(ridefound) {
     gsap.to(ridefoundRef.current, {
       transform: "translateY(0)",
     })
    }else{
     gsap.to(ridefoundRef.current, {
       transform: "translateY(100%)",
     })
    }
   },[ridefound])



   useGSAP(()=>{
    if(waitingfordriver) {
     gsap.to(waitfordriverRef.current, {
       transform: "translateY(0)",
     })
    }else{
     gsap.to(waitfordriverRef.current, {
       transform: "translateY(100%)",
     })
    }
   },[waitingfordriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 left-5 top-5 absolute' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='' />
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src='https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png' alt='' />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-6 relative'>
          <h5 
          ref={panelcloseRef}
          onClick={()=>{
            setPanelopen(false)
          }}
          className='absolute opacity-0 top-6 right-6 text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-3xl font-semibold mb-2'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input type="text"
              onClick={() => {
                setPanelopen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              placeholder="Enter pickup location" className="w-full mt-3 bg-[#eeee] rounded-lg px-12 py-2 text-base" />
            <input type="text"
              onClick={() => {
                setPanelopen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              placeholder="Enter your destination" className="w-full mt-3 bg-[#eeee] rounded-lg px-12 py-2 text-base" />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0 '>
          {/* Additional content can go here */}
          <LocationSearchpanel  setPanelopen={setPanelopen}  setVpanelopen={setVpanelopen}/>
        </div>
      </div>

      <div ref={vpanelRef} className='fixed w-full z-10 bottom-0 p-3 translate-y-full  bg-white py-10'>
      <Vpanel setVpanelopen={setVpanelopen}  setConfirmvpanelopen={setConfirmvpanelopen}/>
      </div>
      <div ref={confirmvpanelRef} className='fixed w-full z-10 bottom-0 p-3 translate-y-full  bg-white py-6 pt-10'>
        <ConfirmedVehicle setRidefound={setRidefound}  setConfirmvpanelopen={setConfirmvpanelopen} />
      </div>

      <div ref={ridefoundRef} className='fixed w-full z-10 bottom-0 p-3 translate-y-full  bg-white py-6 pt-10'>
        <LookingforDriver setRidefound={setRidefound}/>
        
      </div>

      <div ref={waitfordriverRef} className='fixed w-full z-10 bottom-0 p-3   bg-white py-6 pt-10'>
        <WaitforDriver setWaitingfordriver={setWaitingfordriver} />
        
      </div>
    </div>
  )
}

export default Hero