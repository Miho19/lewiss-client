import { CircleArrowLeft } from 'lucide-react';
import CustomerButton from '../components/customer/CustomerButton';
import { useNavigate } from 'react-router';
import NewCustomerForm from '../components/customer/NewCustomerForm';

function NewCustomerPage() {
  const navigator = useNavigate();
  function backButtonOnClickHandler() {
    navigator('/customer');
  }
  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="flex w-full justify-end">
        <CustomerButton
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <NewCustomerForm />
    </main>
  );
}

export default NewCustomerPage;
