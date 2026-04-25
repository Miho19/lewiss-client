import { http, HttpResponse } from 'msw';
import { toURL } from '..';
import type { WorksheetType } from '../../../zod/Worksheet';
import { testWorksheets } from './worksheet-example';

const worksheetListHandler = [
  http.get<{ customerId: string }, {}, WorksheetType[]>(
    toURL('/customer/:customerId/worksheet'),
    async ({ params }) => {
      const { customerId } = params;

      const customerWorksheets = testWorksheets.filter((w) => w.customerId === customerId);

      return HttpResponse.json(customerWorksheets);
    },
  ),
];

export default worksheetListHandler;
