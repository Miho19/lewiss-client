import { CustomerZodObject, type CustomerCreateType, type CustomerType } from '../zod/Customer';
import { BACKENDBASEADDRESS } from './backendConstants';

export function POSTCustomerNewEndpoint(): URL {
  const url = new URL('/customer/', BACKENDBASEADDRESS);
  return url;
}

function generatePOSTCustomerNewFetchOptions(newFormData: CustomerCreateType): RequestInit {
  const fetchOptions: RequestInit = {
    mode: 'cors',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFormData),
    credentials: 'include',
  };

  return fetchOptions;
}

async function POSTCustomerNew(
  newFormData: CustomerCreateType,
  endpoint: URL = POSTCustomerNewEndpoint(),
): Promise<CustomerType> {
  // maybe we should parse the newformdata here
  const fetchOptions = generatePOSTCustomerNewFetchOptions(newFormData);

  try {
    const response: Response = await fetch(endpoint, fetchOptions);
    if (!response.ok) throw new Error(`Unexpected response from server`);

    const responseBody = await response.json();
    const parsedBody = await CustomerZodObject.parseAsync(responseBody);
    return parsedBody;
  } catch (error) {
    throw new Error(`Failed to fetch customers`);
  }
}

export default POSTCustomerNew;
