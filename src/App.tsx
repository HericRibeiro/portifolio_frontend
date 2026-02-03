import { Routes, Route } from 'react-router-dom';
import { useMousePosition } from '@/hooks/useMousePosition';
import { MouseGradient } from '@/components/MouseGradient';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Admin from '@/pages/Admin';

import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { PublicLayout } from '@/layouts/PublicLayout';
import { AdminLayout } from '@/layouts/AdminLayout';

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <MouseGradient mousePosition={mousePosition} />

      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay noise-overlay" />

      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
