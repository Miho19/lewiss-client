import { CircleArrowLeft } from 'lucide-react';
import ButtonGrey from '../../components/common/ButtonGrey';
import { useNavigate } from 'react-router';
import NewCustomerForm from '../../components/customer/NewCustomerForm';

function NewCustomerPage() {
  const navigator = useNavigate();
  function backButtonOnClickHandler() {
    navigator('/customer');
  }
  return (
    <div className="w-full h-full flex flex-col space-y-6 items-center">
      <div className="w-full flex md:w-xl md:justify-end">
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
// trying to fix the extra buttons grey button so that it matches the change in size of forms etc.

export default NewCustomerPage;
