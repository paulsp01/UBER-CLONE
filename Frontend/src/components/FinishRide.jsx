import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import axios from 'axios'

const FinishRide = (props) => {

  const navigate = useNavigate()

  async function endRide() {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

          rideId: props.ride._id


      }, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })

      if (response.status === 200) {
          navigate('/captain-hero')
      }

  }
  return (
    <div >
    <h5 
   onClick={()=>{
     props.setFinishRide(false)
   }}
   className='py-2 pb-4 text-center absolute w-full top-0  text-3xl text-gray-500  '><i className="ri-arrow-down-wide-line"></i></h5>

 <h3 className='text-2xl font-semibold mb-3'>Finish This Ride </h3>
 
 <div className='flex justify-between items-center bg-amber-400 px-2 rounded-md'> 
   <div className='flex justify-start items-center gap-2'>
       <img className='h-12 w-12 rounded-full object-cover' src='data:image/jpeg;base64,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' alt=''/>
       <h2 className='font-semibold capitalize'>{props.ride?.user.fullname.firstname}</h2>
       
   </div>

   <div className='flex justify-start items-start gap-3 py-3 px-3 '>

   <h5 className=' text-lg'><i className="ri-wallet-2-fill"></i></h5>
       <div className=''>
           <h3 className='text-lg font-semibold'>₹{props.ride?.fare}</h3>
           <h5 className='font-bold text-sm'>2.5KM</h5>
          
          

       </div>

   </div>
   
 </div>
 <div className='flex justify-between items-center flex-col gap-3'>

 <div className='w-full mt-5'>
   <div className='flex justify-start items-center gap-5 py-3 border-b-2'>
       <h5 className=' text-2xl'><i className="ri-map-pin-fill"></i></h5>
       <div className=''>
           <h3 className='text-lg font-semibold'>{props.ride?.pickup?.split(',')[0]}
           </h3>
           <p className='text-gray-800 text-sm'>{props.ride?.pickup}</p>

       </div>

   </div>
   <div className='flex justify-start items-center gap-5 py-3 border-b-2'>

   <h5 className=' text-2xl'><i className="ri-square-fill"></i></h5>
       <div className=''>
           <h3 className='text-lg font-semibold'>{props.ride?.destination?.split(',')[0]}
           </h3>
           <p className='text-gray-800 text-sm'>{props.ride?.destination}</p>

       </div>

       

   </div>
   

 </div>
 <div className='mt-6 w-full '>
 
 
  
 <button 
 onClick={endRide}
 className=' py-3 bg-amber-600 px-5 font-semibold flex justify-center mt-6 rounded-md'>Finished Ride</button>

 <p className='text-gray-800 flex items-center justify-center font-medium mt-2'>Click above button if you recived the payment</p>



 
 </div>
 </div>
</div>
  )
}

export default FinishRide