import type { CustomerType } from '../../../zod/Customer';
import { v4 as uuidv4 } from 'uuid';

export const testCustomner: CustomerType = {
  familyName: 'A',
  street: 'street 1',
  city: 'city 1',
  suburb: 'suburb 1',
  mobile: 'mobile 1',
  email: 'email@address.com',
  id: uuidv4(),
};

export const testCustomers: CustomerType[] = [
  testCustomner,
  {
    familyName: 'B',
    street: 'street 2',
    city: 'city 2',
    suburb: 'suburb 2',
    mobile: 'mobile 2',
    email: 'email2@address.com',
    id: uuidv4(),
  },
  {
    familyName: 'C',
    street: 'street 3',
    city: 'city 3',
    suburb: 'suburb 3',
    mobile: 'mobile 3',
    email: 'email3@address.com',
    id: uuidv4(),
  },
];
