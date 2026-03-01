import { CircleArrowLeft } from 'lucide-react';
import useCustomerSelect from '../hooks/useCustomerSelect';
import { useNavigate } from 'react-router';
import ButtonGrey from '../components/common/ButtonGrey';
import { useEffect } from 'react';
import WorksheetList from '../components/worksheet/WorksheetList';

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
    <div className="w-full h-full flex flex-col items-center space-y-10">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <div className="w-full h-full flex flex-col space-y-6 shadow-md px-3 border-t border-black/5">
        <WorksheetList />
      </div>
    </div>
  );
}

export default WorksheetHomePage;
