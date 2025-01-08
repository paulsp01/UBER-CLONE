import React, {useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  axios  from "axios"
import { CaptainDataContext } from "../context/CaptainContext"

const CaptainProtectedWrapper = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const {captain, setCaptain} = useContext(CaptainDataContext)
  const [isLoding, setIsLoding] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"))
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  useEffect(() => {
    if (!token) {
      navigate("/captain-login")
    }
  }, [token, navigate])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      if (response.status === 200) {
       setCaptain(response.data.captain)
       setIsLoding(false)
      }
      }).catch((error) => {
        console.error("Error logging out:", error.response ? error.response.data : error.message)
        localStorage.removeItem("token")
        navigate("/captain-login")
      })
 

  if(isLoding){
    return (
        <div>Loading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectedWrapper