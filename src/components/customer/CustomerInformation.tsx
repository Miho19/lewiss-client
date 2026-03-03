import { useEffect } from 'react';
import useCustomerSelect from '../../hooks/useCustomerSelect';
import { NavLink, useNavigate } from 'react-router';
import { UserPen } from 'lucide-react';

function CustomerInformation() {
  const navigator = useNavigate();
  const customerSelected = useCustomerSelect();

  useEffect(() => {
    if (typeof customerSelected.customer === 'undefined') navigator('/customer');
  }, [customerSelected]);

  if (typeof customerSelected.customer === 'undefined') {
    return <div></div>;
  }

  return (
    <div className="flex w-full flex-col space-y-3 shadow-md px-3 pt-3 border-t border-black/5 pb-6">
      <div className="w-full flex flex-col space-y-4 p-3">
        <p className="text-lg font-semibold border-b border-black/15 pb-3">
          {customerSelected.customer.familyName}
        </p>
        <p className="text-sm">{customerSelected.customer.mobile}</p>
        <p className="text-sm">{customerSelected.customer.email}</p>
      </div>
      <div className="flex w-full justify-end">
        <NavLink
          to={`/customer/edit`}
          className={`flex flex-1 w-full border space-x-3 md:max-w-32 md:min-w-32 border-black/5 bg-gray-50 rounded-lg p-2 cursor-pointer group-hover:bg-gray-200 hover:-translate-y-1 group transition-all delay-75 duration-75 ease-in-out md:justify-around`}
        >
          <UserPen />
          <p>Edit</p>
        </NavLink>
      </div>
    </div>
  );
}

export default CustomerInformation;
