import { useState, type SubmitEvent } from 'react';
import CustomerSearchResultList from './CustomerSearchResultList';
import CustomerSearchForm from './CustomeSearchForm';
import useCustomerSearchQuery from '../../../hooks/Customer/useCustomerSearchQuery';
import type { CustomerType } from '../../../zod/Customer';

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

  const { data, isSuccess, isError, isLoading, error, refetch } =
    useCustomerSearchQuery(customerSearchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.error(error.message);
  }

  let customerList: CustomerType[];
  if (!isSuccess) {
    customerList = [];
  } else {
    customerList = data;
  }

  function handleOnSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    refetch();
  }

  return (
    <>
      <CustomerSearchForm
        customerSearchData={customerSearchData}
        setCustomerSearchData={setCustomerSearchData}
        handleOnSubmit={handleOnSubmit}
      />
      <CustomerSearchResultList customers={customerList} />
    </>
  );
}

export default CustomerSearch;
