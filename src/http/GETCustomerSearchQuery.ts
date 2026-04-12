import { testCustomers } from '../utility/msw/customer/customer-example';
import type { CustomerType } from '../zod/Customer';

function GETCustomerSearchQuery(): Promise<CustomerType[]> {
  return new Promise(testCustomers);
}
