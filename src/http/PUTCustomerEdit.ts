import { CustomerZodObject, type CustomerType } from '../zod/Customer';
import { BACKENDBASEADDRESS } from './backendConstants';

export function PUTCustomerEditEndpoint(): URL {
  const url = new URL('/customer/', BACKENDBASEADDRESS);
  return url;
}

function generatePUTCustomerEditFetchOptions(formData: CustomerType): RequestInit {
  const fetchOptions: RequestInit = {
    mode: 'cors',
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    credentials: 'include',
  };

  return fetchOptions;
}

async function PUTCustomerEdit(
  newFormData: CustomerType,
  endpoint: URL = PUTCustomerEditEndpoint(),
): Promise<CustomerType> {
  // maybe we should parse the newformdata here
  const fetchOptions = generatePUTCustomerEditFetchOptions(newFormData);

  try {
    const response: Response = await fetch(endpoint, fetchOptions);
    if (!response.ok) throw new Error(`Unexpected response from server`);

    const responseBody = await response.json();
    const parsedBody = await CustomerZodObject.parseAsync(responseBody);
    return parsedBody;
  } catch (error) {
    throw new Error(`Failed to update customer`);
  }
}

export default PUTCustomerEdit;
