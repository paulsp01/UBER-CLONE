import React,{useState,useRef,useContext} from 'react'
import { Link,useLocation  } from "react-router-dom"
import FinishRide from '../components/FinishRide'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import LiveTracking from "../components/LiveTracking"
import {CaptainDataContext} from "../context/CaptainContext"
import { useEffect } from 'react'

const CaptainRiding = (props) => {
    const [finishRide, setFinishRide] = useState(false)
    const [distance, setDistance] = useState(0)
    const finishRideRef = useRef(null)
    const location = useLocation()
    
    // Get both ride and captain data from location state
    const { ride: rideData, captain } = location.state || {}
    
   

    useGSAP(()=>{
        if(finishRide) {
            gsap.to(finishRideRef.current, {
                transform: "translateY(0)",
            })
        } else {
            gsap.to(finishRideRef.current, {
                transform: "translateY(100%)",
            })
        }
    },[finishRide])

    return (
        <div className='h-screen relative'>
            <div className='fixed p-5 top-0 flex items-center justify-between w-full'>
                <img className='w-14' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt=''/>
                <Link to='/captain-hero' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i class="ri-logout-box-r-line text-2xl"></i>
                </Link>
            </div>
            <div className="h-[80%] ">
                <LiveTracking 
                    destination={rideData?.dropoff_location}
                    onDistanceUpdate={setDistance}
                />
            </div>
            <div 
                onClick={()=>{
                    setFinishRide(true)
                }}
                className='h-[20%] px-5 py-4 bg-amber-400  relative '>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskHikb89UpBSOJoSgN1EFMrQCbHiH_l9x3Q&s'/>
                        <h5 className='font-medium capitalize'>{rideData?.user?.fullname?.firstname}</h5>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-10 w-10 rounded-full' src='data:image/jpeg;base64,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'/>
                        <h5 className='font-medium capitalize'>{captain?.fullname?.firstname || "Loading..."}</h5>
                    </div>
                </div>
                <h5 
                    onClick={()=>{
                        setFinishRide(true)
                    }}
                    className='py-2 pb-4 text-center absolute  w-[95%] top-0  text-3xl text-gray-500  '><i className="ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-medium'>{distance.toFixed(2)} KM Away---------------------<span className='text-sm font-semibold'>Click here</span></h4>
            </div>
            <div ref={finishRideRef} className='fixed w-full z-10 bottom-0 p-3 translate-y-full  bg-white py-10'>
                <FinishRide ride={rideData} setFinishRide={setFinishRide} />
            </div>
        </div>
    )
}

export default CaptainRiding