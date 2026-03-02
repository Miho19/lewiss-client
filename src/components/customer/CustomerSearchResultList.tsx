import CustomerSearchResultElement from './CustomerSearchResultElement';
import { testCustomers } from '../../utility/msw/customer-example';

function CustomerSearchResultList() {
  const customerSearchResultElements = testCustomers.map((c) => (
    <CustomerSearchResultElement key={c.id} customer={c} />
  ));

  if (customerSearchResultElements.length === 0) return <div></div>;

  return (
    <div className="w-full flex flex-col md:items-center space-y-6">
      <h2 className=" py-6">Showing Results: {customerSearchResultElements.length}</h2>
      <ul className="flex flex-col flex-1 space-y-10 ">{customerSearchResultElements}</ul>
    </div>
  );
}

export default CustomerSearchResultList;
