import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';

export default function App() {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* Protected */}
      <Route path="/*" element={token ? <Dashboard /> : <Navigate to="/login" />} />
    </Routes>
  );
}