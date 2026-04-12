import { useState, type SubmitEvent } from 'react';
import CustomerSearchResultList from './CustomerSearchResultList';
import CustomerSearchForm from './CustomeSearchForm';

export type CustomerSearchFormData = {
  familyName: string;
  mobile: string;
  email: string;
};

const initialCustomerSearchFormData: CustomerSearchFormData = {
  familyName: '',
  mobile: '',
  email: '',
};

function CustomerSearch() {
  const [customerSearchData, setCustomerSearchData] = useState(initialCustomerSearchFormData);

  function handleOnSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(customerSearchData);
  }

  return (
    <>
      <CustomerSearchForm
        customerSearchData={customerSearchData}
        setCustomerSearchData={setCustomerSearchData}
        handleOnSubmit={handleOnSubmit}
      />
      <CustomerSearchResultList />
    </>
  );
}

export default CustomerSearch;
