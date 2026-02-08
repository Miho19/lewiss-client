import { NavLink } from 'react-router';
import Logo from '../../assets/logo/logoipsum-412.svg';

function Sidebar() {
  function navLinkClasses({ isActive }: { isActive: boolean }) {
    const base =
      'h-15 text-left text-black p-5 hover:bg-black/85 hover:cursor-pointer hover:text-white transition duration-300 ease-in-out border border-black/5 rounded-lg';

    const stateClasses = isActive ? ` font-bold bg-black/20` : ``;

    return base + stateClasses;
  }

  return (
    <aside className="w-64 bg-white shadow-md fixed md:relative h-screen hidden md:flex md:flex-col pt-6 px-3 gap-y-6">
      <div className="w-full h-16 ">
        <img src={Logo} alt="sidebar header logo" width={150} />
      </div>
      <div className="grow overflow-y-auto flex-col flex gap-y-5">
        <NavLink className={navLinkClasses} to="/" end>
          Home
        </NavLink>
        <NavLink className={navLinkClasses} to="/" end>
          Customer
        </NavLink>
        <NavLink className={navLinkClasses} to="/" end>
          Worksheet
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
