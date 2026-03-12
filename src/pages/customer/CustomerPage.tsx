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
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="flex w-full justify-end">
        <ButtonGrey onClickHandler={newButtonOnClickHandler} buttonText="New" icon={Plus} />
      </div>
      <div
        className="w-full h-full flex flex-col space-y-6 items-center xl:flex-row xl:items-start xl:justify-evenly
      "
      >
        <CustomerSearchForm />
        <CustomerSearchResultList />
      </div>
    </div>
  );
}

export default CustomerPage;
