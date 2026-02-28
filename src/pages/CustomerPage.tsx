import { Plus } from 'lucide-react';
import CustomerSearch from '../components/customer/CustomerSearch';
import { useNavigate } from 'react-router';
import CustomerButton from '../components/customer/CustomerButton';

function CustomerPage() {
  const navigator = useNavigate();
  function newButtonOnClickHandler() {
    navigator('/customer/new');
  }

  return (
    <div className="w-full h-full flex flex-col items-center space-y-7">
      <div className="flex flex-1 w-full justify-end md:pr-3">
        <CustomerButton onClickHandler={newButtonOnClickHandler} buttonText="New" icon={Plus} />
      </div>
      <CustomerSearch />
    </div>
  );
}

export default CustomerPage;
