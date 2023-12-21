import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Overview from './pages/Overview';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect } from 'react';
import { isLoggedIn } from './features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import TourDetails from './pages/TourDetails';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import History from './pages/History';
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
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
