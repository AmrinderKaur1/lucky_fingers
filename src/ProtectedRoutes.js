import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector((state) => ({
        isAuthenticated: state.login.isAuthenticated,
      }));
    if (!isAuthenticated) {
        return <Navigate to={'/login'} />
    }
    return <Outlet />
}

export default ProtectedRoute
