import type { LucideIcon } from 'lucide-react';
import { NavLink, type To } from 'react-router';

export type SidebarLinkProps = {
  name: String;
  path: To;
  icon: LucideIcon;
};

function SidebarLink(prosp: SidebarLinkProps) {
  const { name, path } = prosp;

  function navLinkClasses({ isActive }: { isActive: boolean }) {
    const base =
      'h-15 text-left text-black p-5 hover:bg-black/85 hover:cursor-pointer hover:text-white transition duration-300 ease-in-out border border-black/5 rounded-lg';

    const stateClasses = isActive ? ` font-bold bg-black/20` : ``;

    return base + stateClasses;
  }

  return (
    <NavLink className={navLinkClasses} to={path} end>
      {name}
    </NavLink>
  );
}

export default SidebarLink;
