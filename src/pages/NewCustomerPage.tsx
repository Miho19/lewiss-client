import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../components/common/ButtonGrey';
import { useNavigate } from 'react-router';
import NewCustomerForm from '../components/customer/NewCustomerForm';

function NewCustomerPage() {
  const navigator = useNavigate();
  function backButtonOnClickHandler() {
    navigator('/customer');
  }
  return (
    <div className="w-full h-full flex flex-col items-center space-y-10">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <NewCustomerForm />
    </div>
  );
}

export default NewCustomerPage;
