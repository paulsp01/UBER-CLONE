import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div className='h-screen  bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/transport-traffic-vehicles-design_24877-49980.jpg?uid=R117719778&ga=GA1.1.469288392.1736173569&semt=ais_hybrid)] pt-8  flex justify-between w-full flex-col'>
            <img className=' w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt=''/>
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold flex items-center justify-center'>Get Started With Uber</h2>
                <Link to='/login' className='w-full flex items-center justify-center bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home