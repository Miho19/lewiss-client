import type { LucideIcon } from 'lucide-react';
import { NavLink, type To } from 'react-router';

export type SidebarLinkProps = {
  name: String;
  path: To;
  icon: LucideIcon;
  closeSidebar: () => void;
};
// h-15 text-left text-black p-5 hover:bg-gray-150 hover:cursor-pointer transition duration-300 ease-in-out border border-black/5 rounded-lg

function SidebarLink(prosp: SidebarLinkProps) {
  const { name, path, icon: Icon, closeSidebar } = prosp;

  function navLinkClasses({ isActive }: { isActive: boolean }) {
    const base =
      'flex p-3 gap-x-5 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out border border-black/5';

    const stateClasses = isActive ? ` font-semibold bg-black/5 shadow-md` : ``;

    return base + stateClasses;
  }

  return (
    <NavLink className={navLinkClasses} to={path} end onClick={closeSidebar}>
      <Icon />
      <p>{name}</p>
    </NavLink>
  );
}

export default SidebarLink;
