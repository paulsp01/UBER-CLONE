import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { UserDataContext } from "../context/UserContext"

const UserProtectedWrapper = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const { user, setUser } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)
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
      navigate("/login")
    } 
      
    
  }, [token, navigate])


  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    setUser(response.data)
    setIsLoading(false)
  }).catch(() => {
    console.error("Error logging out:", error.response ? error.response.data : error.message)
    localStorage.removeItem("token")
    navigate("/login")
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper