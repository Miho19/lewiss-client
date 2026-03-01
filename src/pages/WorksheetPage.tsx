import { useNavigate, useParams } from 'react-router';
import ButtonGrey from '../components/common/ButtonGrey';
import { CircleArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import useCustomerSelect from '../hooks/useCustomerSelect';

type WorksheetPageParams = {
  worksheetId: string;
};

function WorksheetPage() {
  const params = useParams<WorksheetPageParams>();
  const navigator = useNavigate();
  const selectedCustomer = useCustomerSelect();

  useEffect(() => {
    if (typeof selectedCustomer.customer === 'undefined') {
      navigator('/customer');
    }
  }, []);

  function backButtonOnClickHandler() {
    navigator('/customer');
  }
  // use react query to get worksheet from backend...

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
        {params.worksheetId}
      </div>
    </div>
  );
}

export default WorksheetPage;
