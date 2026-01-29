import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: Props) {
  // TEMPORÁRIO
  const isAdmin = false; // depois vem do JWT

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
