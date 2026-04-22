import { http, HttpResponse } from 'msw';
import { toURL } from '..';
import { CustomerZodObject, type CustomerType } from '../../../zod/Customer';
import { testCustomers } from './customer-example';

const customerEditHandler = [
  http.put<
    { customerId: string },
    CustomerType,
    CustomerType | { error: string; statusCode: number }
  >(toURL('/customer'), async ({ request }) => {
    // this is mutating operation, have to do it because we are importing the array...

    const jsonBody = await request.json();

    try {
      const updatedCustomer = await CustomerZodObject.parseAsync(jsonBody);

      const index = testCustomers.findIndex((c) => c.id === updatedCustomer.id);

      if (index === -1) {
        return HttpResponse.json({ error: 'User not found', statusCode: 404 });
      }

      testCustomers[index] = { ...updatedCustomer };

      return HttpResponse.json(updatedCustomer);
    } catch (error) {
      return HttpResponse.json({ error: 'Bad Request', statusCode: 400 });
    }
  }),
];

export default customerEditHandler;
