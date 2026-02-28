import CustomerSearchResultList from './CustomerSearchResultList';
import CustomerSearchForm from './CustomeSearchForm';

function CustomerSearch() {
  return (
    <div className="w-full h-full flex flex-col space-y-10 shadow-md px-6 border-t border-black/5">
      <CustomerSearchForm />
      <CustomerSearchResultList />
    </div>
  );
}

export default CustomerSearch;
