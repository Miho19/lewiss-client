import { useEffect } from 'react';
import useCustomerSelect from '../../hooks/useCustomerSelect';
import { useNavigate } from 'react-router';
import ButtonGrey from '../common/ButtonGrey';
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

  function editButtonOnClickHandler() {}

  return (
    <div className="flex w-full flex-col space-y-3 shadow-md p-3 border-t border-black/5">
      <div className="w-full flex flex-col space-y-4 p-3">
        <p className="text-lg font-semibold border-b border-black/15 pb-3">
          {customerSelected.customer.familyName}
        </p>
        <p className="text-sm">{customerSelected.customer.mobile}</p>
        <p className="text-sm">{customerSelected.customer.email}</p>
        <p className="text-sm">{customerSelected.customer.street}</p>
        <p className="text-sm">{customerSelected.customer.suburb}</p>
        <p className="text-sm">{customerSelected.customer.city}</p>
      </div>
      <div className="flex w-full justify-end">
        <ButtonGrey buttonText="Edit" onClickHandler={editButtonOnClickHandler} icon={UserPen} />
      </div>
    </div>
  );
}

export default CustomerInformation;
