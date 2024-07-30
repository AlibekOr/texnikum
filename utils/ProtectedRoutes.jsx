import { useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

const ProtectedRoutes = () => {

  const user = window.localStorage.getItem('token')
  // const user = true
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes