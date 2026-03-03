import { useEffect } from 'react';
import useCustomerSelect from '../../hooks/useCustomerSelect';
import { useNavigate } from 'react-router';
import CustomerSearchResultElement from './CustomerSearchResultElement';
import ButtonGrey from '../common/ButtonGrey';
import { UserPen } from 'lucide-react';

function CustomerInformation() {
  const navigator = useNavigate();
  const customerSelected = useCustomerSelect();

  useEffect(() => {
    if (typeof customerSelected.customer === 'undefined') navigator('/customer');
  }, [customerSelected]);

  if (typeof customerSelected.customer === 'undefined') {
    return <div></div>;
  }

  function editButtonOnClickHandler() {}

  return (
    <div className="flex w-full flex-col space-y-3">
      <CustomerSearchResultElement customer={customerSelected.customer} hoverable={false} />
      <div className="flex w-full justify-end">
        <ButtonGrey buttonText="Edit" onClickHandler={editButtonOnClickHandler} icon={UserPen} />
      </div>
    </div>
  );
}

export default CustomerInformation;
