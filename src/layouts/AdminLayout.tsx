import { Outlet } from 'react-router-dom';
import { AdminHeader } from '@/components/admin/AdminHeader';

export function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}
