import type { LucideIcon } from 'lucide-react';
import { NavLink, type To } from 'react-router';
import useCustomerSelect from '../../hooks/useCustomerSelect';

export type SidebarLinkProps = {
  name: String;
  path: To;
  icon: LucideIcon;
  closeSidebar: () => void;
  checkForCustomerSelected: boolean;
};

function SidebarLink(prosp: SidebarLinkProps) {
  const { name, path, icon: Icon, closeSidebar, checkForCustomerSelected } = prosp;
  const selectedCustomer = useCustomerSelect();

  function navLinkClasses({ isActive }: { isActive: boolean }) {
    const base =
      'flex p-3 gap-x-5 rounded-lg border border-black/5 cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out';

    const stateClasses = isActive ? ` font-semibold bg-black/5 shadow-md` : ``;

    return base + stateClasses;
  }

  function isButtonDisabledFunction(): boolean {
    if (!checkForCustomerSelected) return false;
    return typeof selectedCustomer.customer === 'undefined';
  }

  const isButtonDisabled = isButtonDisabledFunction();

  return isButtonDisabled === true ? (
    <span className="flex p-3 gap-x-5 rounded-lg border border-black/5 opacity-50 cursor-not-allowed">
      <Icon />
      <p>{name}</p>
    </span>
  ) : (
    <NavLink className={navLinkClasses} to={path} end onClick={closeSidebar}>
      <Icon />
      <p>{name}</p>
    </NavLink>
  );
}

export default SidebarLink;
