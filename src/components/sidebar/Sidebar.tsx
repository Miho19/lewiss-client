import Logo from '../../assets/logo/logoipsum-412.svg';
import type { SidebarLinkProps } from './SidebarLink';
import SidebarLink from './SidebarLink';
import { House, CircleUser, StickyNote } from 'lucide-react';

const links: SidebarLinkProps[] = [
  {
    name: 'Home',
    path: '/',
    icon: House,
  },
  {
    name: 'Customer',
    path: '/customer',
    icon: CircleUser,
  },
  {
    name: 'Worksheet',
    path: '/worksheet',
    icon: StickyNote,
  },
];

function Sidebar() {
  const sidebarLinkElements = links.map((l) => (
    <SidebarLink key={`${l.name}:${l.path}`} name={l.name} path={l.path} icon={l.icon} />
  ));

  return (
    <aside className="w-64 bg-white shadow-md fixed md:relative h-screen hidden md:flex md:flex-col pt-6 px-3 gap-y-6">
      <div className="w-full h-16 ">
        <img src={Logo} alt="sidebar header logo" width={150} />
      </div>
      <nav className="grow overflow-y-auto flex-col flex gap-y-5">{sidebarLinkElements}</nav>
    </aside>
  );
}

export default Sidebar;
