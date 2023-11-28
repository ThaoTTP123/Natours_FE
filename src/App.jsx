import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import Overview from './pages/Overview';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
