import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../../components/common/ButtonGrey';
import { useNavigate } from 'react-router';

import { useEffect } from 'react';
import useCustomerSelect from '../../hooks/useCustomerSelect';

import CustomerEditForm from '../../components/customer/CustomerEditForm';

function EditCustomerPage() {
  const navigator = useNavigate();
  const selectedCustomer = useCustomerSelect();

  useEffect(() => {
    if (typeof selectedCustomer.customer === 'undefined') navigator('/customer');
  }, [selectedCustomer]);

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  return (
    <div className="w-full h-full flex flex-col space-y-6 items-center">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <CustomerEditForm customer={selectedCustomer.customer!} />
    </div>
  );
}

export default EditCustomerPage;
