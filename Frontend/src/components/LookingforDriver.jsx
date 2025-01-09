import React from 'react'

const LookingforDriver = (props) => {
  return (
    <div>
    <h5 
   onClick={()=>{
     props.setRidefound(false)
   }}
   className='py-2 pb-4 text-center absolute w-full top-0  text-3xl text-gray-500  '><i className="ri-arrow-down-wide-line"></i></h5>

 <h3 className='text-2xl font-semibold mb-3'>Looking for a Ride</h3>
 <div className='flex justify-between items-center flex-col gap-3'>
 <img className='h-20 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgwwulhOQCTSH_edb6mScPGpFkSRvOrGziQ&s" alt=""/>
 <div className='w-full mt-5'>
   <div className='flex justify-start items-center gap-5 py-3 border-b-2'>
       <h5 className=' text-2xl'><i className="ri-map-pin-fill"></i></h5>
       <div className=''>
           <h3 className='text-xl font-semibold'>562/1-A</h3>
           <p className='text-gray-800'>Karnataka,Amedabad,USA</p>

       </div>

   </div>
   <div className='flex justify-start items-center gap-5 py-3 border-b-2'>

   <h5 className=' text-2xl'><i className="ri-square-fill"></i></h5>
       <div className=''>
           <h3 className='text-xl font-semibold'>Third Wave Cofee </h3>
           <p className='text-gray-800'>Karnataka,Amedabad,USA</p>

       </div>

       

   </div>
   <div className='flex justify-start items-center gap-5 py-3 '>

   <h5 className=' text-2xl'><i className="ri-wallet-2-fill"></i></h5>
       <div className=''>
           <h3 className='text-xl font-semibold'>193.20</h3>
           <p className='text-gray-800'>Cash Cash</p>

       </div>

   </div>

 </div>
 
 </div>
</div>
  )
}

export default LookingforDriver