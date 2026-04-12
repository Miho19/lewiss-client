import CustomerSearchResultElement from './CustomerSearchResultElement';
import { testCustomers } from '../../utility/msw/customer/customer-example';

function CustomerSearchResultList() {
  const customerSearchResultElements = testCustomers.map((c) => (
    <CustomerSearchResultElement key={c.id} customer={c} />
  ));

  if (customerSearchResultElements.length === 0) return <div></div>;

  return (
    <div className="flex w-full flex-col space-y-3 shadow-md px-3 pt-3 border-t border-black/5 pb-6 md:w-xl">
      <h2 className="py-6 text-gray-400">Showing Results: {customerSearchResultElements.length}</h2>
      <ul className="flex flex-col flex-1 space-y-10 w-full overflow-y-scroll p-3">
        {customerSearchResultElements}
      </ul>
    </div>
  );
}

export default CustomerSearchResultList;
