import { url } from 'zod';
import type { CustomerSearchFormData } from '../components/customer/search/CustomerSearch';
import { BACKENDBASEADDRESS } from '../utility/msw';
import { testCustomers } from '../utility/msw/customer/customer-example';
import { CustomerZodObjectArray, type CustomerType } from '../zod/Customer';

export function GETCustomerSearchQueryEndpoint(formData: CustomerSearchFormData): URL {
  const url = new URL(`/customer`, BACKENDBASEADDRESS);

  const filteredFormData = Object.fromEntries(
    Object.entries(formData).filter(
      (_, value) =>
        typeof value !== 'undefined' || !String(value) || String(value).trim().length !== 0,
    ),
  );

  Object.entries(filteredFormData).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url;
}

function generateGETCustomerSearchQueryFetchOptions(): RequestInit {
  const fetchOptions: RequestInit = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  return fetchOptions;
}

async function GETCustomerSearchQuery(
  formData: CustomerSearchFormData,
  endpoint: URL = GETCustomerSearchQueryEndpoint(formData),
): Promise<CustomerType[]> {
  const fetchOptions = generateGETCustomerSearchQueryFetchOptions();

  try {
    const response: Response = await fetch(endpoint, fetchOptions);
    if (!response.ok) throw new Error(`Unexpected response from server`);

    const responseBody = await response.json();
    const parsedBody = await CustomerZodObjectArray.parseAsync(responseBody);
    return parsedBody;
  } catch (error) {
    throw new Error(`Failed to fetch customer search`);
  }
}

export default GETCustomerSearchQuery;
