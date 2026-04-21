import { http, HttpResponse } from 'msw';
import { toURL } from '..';
import type { CustomerType } from '../../../zod/Customer';
import { testCustomers } from './customer-example';

const customerSearchHandler = [
  http.get<{}, {}, CustomerType[]>(toURL('/customer'), ({ request }) => {
    const url = new URL(request.url);

    if (url.searchParams.size === 0) {
      return HttpResponse.json([]);
    }

    const familyName = url.searchParams.get('familyName');
    const mobile = url.searchParams.get('mobile');
    const email = url.searchParams.get('email');

    const filteredCustomers = testCustomers.filter((c) => {
      if (familyName) {
        if (c.familyName.localeCompare(familyName, undefined, { sensitivity: 'base' }) !== 0)
          return false;
      }

      if (mobile) {
        if (c.mobile !== mobile) return false;
      }

      if (email) {
        if (c.email.localeCompare(email, undefined, { sensitivity: 'base' }) !== 0) return false;
      }

      return true;
    });

    return HttpResponse.json(filteredCustomers);
  }),
];

export default customerSearchHandler;
