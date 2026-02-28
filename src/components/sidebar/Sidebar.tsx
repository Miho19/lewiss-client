import Logo from '../../assets/logo/logoipsum-412.svg';
import type { SidebarLinkProps } from './SidebarLink';
import SidebarLink from './SidebarLink';
import { House, CircleUser, StickyNote, X } from 'lucide-react';

type Props = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

function Sidebar(props: Props) {
  const { isSidebarOpen, closeSidebar }: Props = props;

  const links: SidebarLinkProps[] = [
    {
      name: 'Home',
      path: '/',
      icon: House,
      closeSidebar,
      checkForCustomerSelected: false,
    },
    {
      name: 'Customer',
      path: '/customer',
      icon: CircleUser,
      closeSidebar,
      checkForCustomerSelected: false,
    },
    {
      name: 'Worksheet',
      path: '/worksheet',
      icon: StickyNote,
      closeSidebar,
      checkForCustomerSelected: true,
    },
  ];

  const sidebarLinkElements = links.map((l) => (
    <SidebarLink
      key={`${l.name}:${l.path}`}
      name={l.name}
      path={l.path}
      icon={l.icon}
      closeSidebar={closeSidebar}
      checkForCustomerSelected={l.checkForCustomerSelected}
    />
  ));

  return (
    <>
      {!!isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={closeSidebar}></div>
      )}
      <aside
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? `translate-x-0` : `-translate-x-full`} transition duration-300 ease-in-out bg-white w-64 p-4 flex flex-col space-y-4 z-40 md:translate-x-0 md:relative shadow-md pt-6 px-3 gap-y-6`}
      >
        <div className="flex w-full h-16 space-x-6">
          <button className="md:hidden" onClick={closeSidebar}>
            <X size={24} color="black" />
          </button>
          <img src={Logo} alt="sidebar header logo" width={150} />
        </div>
        <nav className="grow overflow-y-auto flex-col flex gap-y-5">{sidebarLinkElements}</nav>
      </aside>
    </>
  );
}

export default Sidebar;
