import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';

export function PublicLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
