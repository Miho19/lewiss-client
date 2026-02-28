import { CircleArrowLeft } from 'lucide-react';
import useCustomerSelect from '../hooks/useCustomerSelect';
import { useNavigate } from 'react-router';
import CustomerButton from '../components/customer/CustomerButton';
import { useEffect } from 'react';

function WorksheetPage() {
  const selectedCustomer = useCustomerSelect();
  const navigator = useNavigate();

  function backButtonOnClickHandler() {
    navigator('/customer');
  }

  useEffect(() => {
    if (typeof selectedCustomer.customer === 'undefined') {
      navigator('/');
    }
  }, [selectedCustomer]);

  <div className="w-full h-full flex flex-col items-center">
    <div className="flex w-full justify-end">
      <CustomerButton
        buttonText="Back"
        icon={CircleArrowLeft}
        onClickHandler={backButtonOnClickHandler}
      />
    </div>
  </div>;
}

export default WorksheetPage;
