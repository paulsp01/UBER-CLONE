import React from 'react'

const WaitforDriver = (props) => {
  return (
    <div>
    <h5 
   onClick={()=>{
     props.setWaitingfordriver(false)
   }}
   className='py-2 pb-4 text-center absolute w-full top-0  text-3xl text-gray-500  '><i className="ri-arrow-down-wide-line"></i></h5>


   <div className='flex items-center justify-between'>
   <img className='h-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgwwulhOQCTSH_edb6mScPGpFkSRvOrGziQ&s" alt=""/>
   <div className='px-5 text-right'>
    <h2 className='text-xl font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
    <h4 className='text-2xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
    <p className='text-lg text-gray-800'>Maruti suzuki</p>
    <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
   </div>
   </div>

 
 <div className='flex justify-between items-center flex-col gap-3'>
 
 <div className='w-full mt-5'>
   <div className='flex justify-start items-center gap-5 py-3 border-b-2'>
       <h5 className=' text-2xl'><i className="ri-map-pin-fill"></i></h5>
       <div className=''>
           <h3 className='text-xl font-semibold'>{props.ride?.pickup?.split(',')[0]}
           </h3>
           <p className='text-gray-800'>{props.ride?.pickup}</p>

       </div>

   </div>
   <div className='flex justify-start items-center gap-5 py-3 border-b-2'>

   <h5 className=' text-2xl'><i className="ri-square-fill"></i></h5>
       <div className=''>
           <h3 className='text-xl font-semibold'>{props.ride?.destination?.split(',')[0]}
           </h3>
           <p className='text-gray-800'>{props.ride?.destination}</p>

       </div>

       

   </div>
  

 </div>
 
 </div>
</div>
  )
}

export default WaitforDriver