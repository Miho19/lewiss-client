import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';

function ApplicationLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default ApplicationLayout;
