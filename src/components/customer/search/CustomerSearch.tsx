import { useState, type SubmitEvent } from 'react';
import CustomerSearchResultList from './CustomerSearchResultList';
import CustomerSearchForm from './CustomeSearchForm';
import useCustomerSearchQuery from '../../../hooks/Customer/useCustomerSearchQuery';

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

  const { data, isSuccess, isError, isLoading, error } = useCustomerSearchQuery(customerSearchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !isSuccess) return <div>Error: {error?.message}</div>;

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
      <CustomerSearchResultList customers={data} />
    </>
  );
}

export default CustomerSearch;
