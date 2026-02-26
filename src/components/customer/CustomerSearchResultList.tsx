import type { CustomerType } from '../../zod/Customer';
import { v4 as uuidv4 } from 'uuid';
import CustomerSearchResultElement from './CustomerSearchResultElement';

const testCustomers: CustomerType[] = [
  {
    familyName: 'April',
    street: 'street 1',
    city: 'city 1',
    suburb: 'suburb 1',
    mobile: 'mobile 1',
    email: 'email@address.com',
    id: uuidv4(),
  },
  {
    familyName: 'Woodward',
    street: 'street 2',
    city: 'city 2',
    suburb: 'suburb 2',
    mobile: 'mobile 2',
    email: 'email2@address.com',
    id: uuidv4(),
  },
  {
    familyName: 'Todd',
    street: 'street 3',
    city: 'city 3',
    suburb: 'suburb 3',
    mobile: 'mobile 3',
    email: 'email3@address.com',
    id: uuidv4(),
  },
];

function CustomerSearchResultList() {
  const customerSearchResultElements = testCustomers.map((c) => (
    <CustomerSearchResultElement key={c.id} customer={c} />
  ));

  if (customerSearchResultElements.length === 0) return <div></div>;

  return (
    <div className="w-full flex flex-col md:items-center space-y-6">
      <h2 className=" py-6">Showing Results: {customerSearchResultElements.length}</h2>
      <ul className="flex flex-col flex-1 space-y-5 ">{customerSearchResultElements}</ul>
    </div>
  );
}

export default CustomerSearchResultList;
