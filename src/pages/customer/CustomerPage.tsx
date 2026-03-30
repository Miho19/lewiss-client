import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';
import ButtonGrey from '../../components/common/ButtonGrey';
import CustomerSearchForm from '../../components/customer/CustomeSearchForm';
import CustomerSearchResultList from '../../components/customer/CustomerSearchResultList';

function CustomerPage() {
  const navigator = useNavigate();
  function newButtonOnClickHandler() {
    navigator('/customer/new');
  }

  return (
    <div className="w-full h-full flex flex-col space-y-6 md:items-center">
      <div className="flex w-full md:w-xl md:justify-end">
        <ButtonGrey onClickHandler={newButtonOnClickHandler} buttonText="New" icon={Plus} />
      </div>
      <CustomerSearchForm />
      <CustomerSearchResultList />
    </div>
  );
}

export default CustomerPage;
