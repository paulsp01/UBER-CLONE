import React from 'react'
import { Link, useLocation } from 'react-router-dom' // Added useLocation
import { useEffect, useContext } from 'react'
import { SocketContextProvider } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'
const Riding = () => {

  const location = useLocation()
    const { ride } = location.state || {} // Retrieve ride data
    const { socket } = useContext(SocketContextProvider)
    const navigate = useNavigate()


  

    socket.on("ride-ended", () => {
      navigate('/hero')
  })


  return (
    <div className='h-screen '>
      <Link to='/hero' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className="ri-home-4-line text-2xl"></i>
      </Link>
      <div className="h-[50%]">
       <LiveTracking/>
      </div>
      <div className='h-[50%] px-5 py-5 '>
        <div className='flex items-center justify-between'>
          <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgwwulhOQCTSH_edb6mScPGpFkSRvOrGziQ&s" alt=""/>
          <div className='px-5 text-right'>
            <h2 className='text-lg font-medium'>{ride?.captain.fullname.firstname}</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
            <p className='text-base bg-indigo-300 pr-2 text-gray-800'>Maruti suzuki</p>
          </div>
        </div>

        <div className='flex justify-between items-center flex-col gap-3'>
          <div className='w-full mt-3'>
            <div className='flex justify-start items-center gap-5 py-2 border-b-2'>
              <h5 className='text-lg'><i className="ri-map-pin-fill"></i></h5>
              <div>
                <h3 className='text-base font-semibold'>562/1-A</h3>
                <p className='text-gray-800 text-xs'>{ride?.pickup}</p>
              </div>
            </div>
            <div className='flex justify-start items-center gap-5 py-2 border-b-2'>
              <h5 className='text-lg'><i className="ri-square-fill"></i></h5>
              <div>
                <h3 className='text-base font-semibold'>Third Wave Cofee </h3>
                <p className='text-gray-800 text-xs'>{ride?.destination}</p>
              </div>
            </div>
            <div className='flex justify-start items-center gap-5 py-2'>
              <h5 className='text-lg'><i className="ri-wallet-2-fill"></i></h5>
              <div>
                <h3 className='text-base font-semibold'>₹{ride?.fare}</h3>
                <p className='text-gray-800 text-xs'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className='bg-indigo-600 py-2 w-full rounded-md mt-2 font-medium'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding