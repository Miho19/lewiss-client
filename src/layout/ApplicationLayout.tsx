import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function ApplicationLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <header className="bg-black/50 shadow-md p-4 flex justify-between items-center md:hidden">
        <button
          className="md:hidden"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          {isSidebarOpen ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
        </button>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default ApplicationLayout;
