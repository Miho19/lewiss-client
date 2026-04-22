import { http, HttpResponse } from 'msw';
import { toURL } from '..';
import {
  CustomerBasicInformationZodObject,
  type CustomerCreateType,
  type CustomerType,
} from '../../../zod/Customer';
import { testCustomers } from './customer-example';
import { v4 as uuidV4 } from 'uuid';

const customerNewHandler = [
  http.post<{}, CustomerCreateType, CustomerType>(toURL('/customer'), async ({ request }) => {
    const formData = await request.json();

    try {
      const parseData = await CustomerBasicInformationZodObject.parseAsync(formData);

      const familyNameFound = testCustomers.find(
        (c) =>
          c.familyName.localeCompare(parseData.familyName, undefined, { sensitivity: 'base' }) ===
          0,
      );

      if (familyNameFound) return HttpResponse.json(familyNameFound);

      const mobileFound = testCustomers.find(
        (c) => c.mobile.localeCompare(parseData.mobile, undefined, { sensitivity: 'base' }) === 0,
      );
      if (mobileFound) return HttpResponse.json(mobileFound);

      const emailFound = testCustomers.find(
        (c) => c.email.localeCompare(parseData.email, undefined, { sensitivity: 'base' }) === 0,
      );

      if (emailFound) return HttpResponse.json(emailFound);

      const newCustomer: CustomerType = { id: uuidV4(), ...parseData };

      testCustomers.push(newCustomer);

      console.log(`new customer`);
      console.log(newCustomer);

      return HttpResponse.json(newCustomer);
    } catch (error) {
      console.log('hello');
      console.error(error);
    }
  }),
];

export default customerNewHandler;
