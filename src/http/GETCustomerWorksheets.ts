import type { CustomerType } from '../zod/Customer';
import { WorksheetZodObjectArray, type WorksheetType } from '../zod/Worksheet';
import { BACKENDBASEADDRESS } from './backendConstants';

export function GETCustomerWorksheetEndpoint(customer: CustomerType): URL {
  const url = new URL(`/customer/${customer.id}/worksheet/`, BACKENDBASEADDRESS);

  return url;
}

function generateGETCustomerWorksheetFetchOptions(): RequestInit {
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

async function GETCustomerWorksheets(
  customer: CustomerType,
  endpoint: URL = GETCustomerWorksheetEndpoint(customer),
): Promise<WorksheetType[]> {
  const fetchOptions = generateGETCustomerWorksheetFetchOptions();

  try {
    const response: Response = await fetch(endpoint, fetchOptions);
    if (!response.ok) throw new Error(`Unexpected response from server`);

    const responseBody = await response.json();
    const parsedBody = await WorksheetZodObjectArray.parseAsync(responseBody);
    return parsedBody;
  } catch (error) {
    throw new Error(`Failed to fetch customer worksheets`);
  }
}

export default GETCustomerWorksheets;
