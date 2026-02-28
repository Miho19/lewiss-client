import { useNavigate } from 'react-router';
import useCustomerSelect from '../../hooks/useCustomerSelect';
import type { CustomerType } from '../../zod/Customer';

type Props = {
  customer: CustomerType;
};
function CustomerSearchResultElement(props: Props) {
  const { customer } = props;
  const selectedCustomerContext = useCustomerSelect();
  const navigator = useNavigate();

  function onClickHandler() {
    selectedCustomerContext.selectCustomer(customer);
    navigator('/worksheet');
  }

  return (
    <li
      onClick={onClickHandler}
      className="flex flex-1 w-full flex-col px-3 pb-3 shadow-md sm:rounded-lg hover:bg-gray-100 transition-all duration-100 ease-in-out group cursor-pointer hover:-translate-y-3"
    >
      <div className="flex flex-1 w-full justify-between">
        <p className="text-lg">{customer.familyName}</p>
        <div className="flex flex-col max-w-28 min-w-44 text-wrap">
          <p className="text-sm text-right">
            {customer.street} {customer.suburb}
          </p>
          <p className="w-full text-right text-sm">{customer.city}</p>
        </div>
      </div>
      <div className="flex flex-1 justify-between">
        <p className="text-sm">{customer.mobile}</p>
        <p className="text-sm">{customer.email}</p>
      </div>
    </li>
  );
}

export default CustomerSearchResultElement;
