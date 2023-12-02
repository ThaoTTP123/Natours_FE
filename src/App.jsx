import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import Overview from './pages/Overview';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect } from 'react';
import { isLoggedIn } from './features/authSlice';
import { useDispatch } from 'react-redux';
import TourDetails from './pages/TourDetails';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Overview />} />
          <Route path='/:id' element={<TourDetails />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
