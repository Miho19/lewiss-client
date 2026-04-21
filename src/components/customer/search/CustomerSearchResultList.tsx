import CustomerSearchResultElement from './CustomerSearchResultElement';
import type { CustomerType } from '../../../zod/Customer';

type Props = {
  customers: CustomerType[];
};

function CustomerSearchResultList(props: Props) {
  const { customers } = props;

  const customerSearchResultElements = customers.map((c) => (
    <CustomerSearchResultElement key={c.id} customer={c} />
  ));

  if (customerSearchResultElements.length === 0)
    return (
      <div className="flex w-full flex-col space-y-3 shadow-md px-3 pt-3 border-t border-black/5 pb-6 md:w-xl">
        <h2 className="py-6 text-gray-400">No results to show</h2>
      </div>
    );
  return (
    <div className="flex w-full flex-col space-y-3 shadow-md px-3 pt-3 border-t border-black/5 pb-6 md:w-xl">
      <h2 className="py-6 text-gray-400">Showing results: {customerSearchResultElements.length}</h2>
      <ul className="flex flex-col flex-1 space-y-10 w-full overflow-y-scroll p-3">
        {customerSearchResultElements}
      </ul>
    </div>
  );
}

export default CustomerSearchResultList;
