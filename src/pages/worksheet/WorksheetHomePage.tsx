import { CircleArrowLeft } from 'lucide-react';
import useCustomerSelect from '../../hooks/useCustomerSelect';
import { useNavigate } from 'react-router';
import ButtonGrey from '../../components/common/ButtonGrey';
import { useEffect } from 'react';
import WorksheetList from '../../components/worksheet/WorksheetList';
import CustomerInformation from '../../components/customer/CustomerInformation';

function WorksheetHomePage() {
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

  return (
    <div className="w-full h-full flex flex-col space-y-6 items-center">
      <div className="w-full flex md:w-xl md:justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>

      <CustomerInformation />
      <WorksheetList />
    </div>
  );
}

export default WorksheetHomePage;
