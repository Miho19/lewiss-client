import { CircleArrowLeft } from 'lucide-react';
import CustomerButton from '../components/customer/CustomerButton';
import { useNavigate } from 'react-router';

function NewCustomerPage() {
  const navigator = useNavigate();
  function backButtonOnClickHandler() {
    navigator('/customer');
  }
  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="flex w-full justify-end border border-black">
        <CustomerButton
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <div className="w-full border border-black"></div>
    </main>
  );
}

export default NewCustomerPage;
