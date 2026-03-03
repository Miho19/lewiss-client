import { Plus } from 'lucide-react';
import CustomerSearch from '../components/customer/CustomerSearch';
import { useNavigate } from 'react-router';
import ButtonGrey from '../components/common/ButtonGrey';

function CustomerPage() {
  const navigator = useNavigate();
  function newButtonOnClickHandler() {
    navigator('/customer/new');
  }

  return (
    <div className="w-full h-full flex flex-col items-center space-y-7">
      <div className="flex w-full justify-end">
        <ButtonGrey onClickHandler={newButtonOnClickHandler} buttonText="New" icon={Plus} />
      </div>
      <CustomerSearch />
    </div>
  );
}

export default CustomerPage;
