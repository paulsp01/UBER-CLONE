import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div className='h-screen bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/301cdb68939617.5ba7309e6d9f7.gif)] pt-8 flex justify-between w-full flex-col'>
            <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt=''/>
            <div className='flex justify-center items-center flex-grow'>
                {/* <img className='h-50 w-50 rounded-full' src='https://mir-s3-cdn-cf.behance.net/project_modules/hd/301cdb68939617.5ba7309e6d9f7.gif' alt=''/> */}
            </div>
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold flex items-center justify-center'>Get Started With Uber</h2>
                <Link to='/login' className='w-full flex items-center justify-center bg-indigo-600 text-white py-3 rounded-md mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home