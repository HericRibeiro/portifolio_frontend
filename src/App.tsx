import { Routes, Route } from 'react-router-dom';
import { useMousePosition } from '@/hooks/useMousePosition';
import { Navigation } from '@/components/Navigation';
import { MouseGradient } from '@/components/MouseGradient';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Admin from './pages/Admin';
// import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <MouseGradient mousePosition={mousePosition} />

      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay noise-overlay" />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
