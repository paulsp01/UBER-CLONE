import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchpanel = (props) => {
  const locations = [
    "123 Main St, Springfield,MyntraCafe,near shoe shop, USA",
    "456 Elm St, Springfield,Shinghnia Cafe,near Remon's shop USA",
    "789 Oak St, Springfield, USA",
    "101 Maple St, Springfield, USA"
  ]
  return (

    <div >
      
      {
        locations.map( (location,idx)=>{
          return (
             <div 
             key={idx}
             onClick={()=>{
             props.setVpanelopen(true)
             props.setPanelopen(false)
             }}
              className='flex  items-center justify-start gap-3 my-2 hover:border-2 active:border-black rounded-xl p-2'>
      <h2 className='px-2 '><i className="ri-map-pin-fill text-lg"></i></h2>
      <h4 className='font-medium'>{location}</h4>
      </div>
          )
           

          
        })
      }




    </div>


                


    
  )
}

export default LocationSearchpanel

