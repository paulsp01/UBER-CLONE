import React from 'react'

const ConfirmedVehicle = (props) => {
  return (
    <div>
         <h5 
        onClick={()=>{
          props.setConfirmvpanelopen(false)
        }}
        className='py-2 pb-4 text-center absolute w-full top-0  text-3xl text-gray-500  '><i className="ri-arrow-down-wide-line"></i></h5>

      <h3 className='text-2xl font-semibold mb-3'>Confirm Your Ride</h3>
      <div className='flex justify-between items-center flex-col gap-3'>
      <img className='h-20 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgwwulhOQCTSH_edb6mScPGpFkSRvOrGziQ&s" alt=""/>
      <div className='w-full mt-5'>
        <div className='flex justify-start items-center gap-5 py-3 border-b-2'>
            <h5 className=' text-2xl'><i className="ri-map-pin-fill"></i></h5>
            <div className=''>
                <h3 className='text-xl font-semibold'>{props.pickup?.split(',')[0]}</h3>
                <p className='text-gray-800'>{props.pickup}</p>

            </div>

        </div>
        <div className='flex justify-start items-center gap-5 py-3 border-b-2'>

        <h5 className=' text-2xl'><i className="ri-square-fill"></i></h5>
            <div className=''>
                <h3 className='text-xl font-semibold'>{props.destination?.split(',')[0]} </h3>
                <p className='text-gray-800'>{props.destination}</p>

            </div>

            

        </div>
        <div className='flex justify-start items-center gap-5 py-3 '>

        <h5 className=' text-2xl'><i className="ri-wallet-2-fill"></i></h5>
            <div className=''>
                <h3 className='text-xl font-semibold'>₹{props.fare[ props.vehicleType ]}</h3>
                <p className='text-gray-800'>Cash Cash</p>

            </div>

        </div>

      </div>
      <button 
      onClick={()=>{
        props.setRidefound(true)
        props.setConfirmvpanelopen(false)
        props.createRide()

      }}
      className='w-1/2 py-2 bg-indigo-600 rounded-xl mb-14  font-semibold '>Confirm</button>
      </div>
    </div>

    
  )
}

export default ConfirmedVehicle