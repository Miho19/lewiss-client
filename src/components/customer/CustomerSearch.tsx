import CustomerSearchResultList from './CustomerSearchResultList';
import CustomerSearchForm from './CustomeSearchForm';

function CustomerSearch() {
  return (
    <div className="w-full flex flex-col space-y-10 px-6 border-t border-black/5 shadow-md pb-6">
      <CustomerSearchForm />
      <CustomerSearchResultList />
    </div>
  );
}

export default CustomerSearch;
