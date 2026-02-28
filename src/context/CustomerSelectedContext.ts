import { createContext } from 'react';
import type { CustomerType } from '../zod/Customer';

export type CustomerSelectedType = {
  customer: CustomerType | undefined;
  selectCustomer: (customer: CustomerType) => void;
};

export const CustomerSelectedContext = createContext<CustomerSelectedType | undefined>(undefined);
