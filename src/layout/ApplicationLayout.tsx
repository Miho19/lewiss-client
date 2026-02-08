import { Outlet } from 'react-router';

function ApplicationLayout() {
  return (
    <div className="min-h-screen flex">
      <Outlet />
    </div>
  );
}

export default ApplicationLayout;
