import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../features/authSlice';

export default function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, []);
  return <Navigate to={'/login'} replace />;
}
