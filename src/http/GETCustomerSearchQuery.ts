import type { CustomerSearchFormData } from '../components/customer/search/CustomerSearch';
import { CustomerZodObjectArray, type CustomerType } from '../zod/Customer';
import { BACKENDBASEADDRESS } from './backendConstants';

export function GETCustomerSearchQueryEndpoint(formData: CustomerSearchFormData): URL {
  const url = new URL(`/customer`, BACKENDBASEADDRESS);

  const filteredFormData = Object.entries(formData).filter((current) => {
    const [key, value] = current;
    return String(value).trim().length !== 0;
  });

  filteredFormData.forEach((current) => {
    const [key, value] = current;
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
  console.log('running this code');
  const fetchOptions = generateGETCustomerSearchQueryFetchOptions();

  try {
    const response: Response = await fetch(endpoint, fetchOptions);
    if (!response.ok) throw new Error(`Unexpected response from server`);

    const responseBody = await response.json();
    const parsedBody = await CustomerZodObjectArray.parseAsync(responseBody);
    return parsedBody;
  } catch (error) {
    throw new Error(`Failed to fetch customers`);
  }
}

export default GETCustomerSearchQuery;
