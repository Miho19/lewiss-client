import type { Path } from 'msw';
import customerHandler from './customer/customer-handler';
import { BACKENDBASEADDRESS } from '../../http/backendConstants';
import { worksheetHandler } from './worksheet/worksheet-handler';

export function toURL(path: string): Path {
  return new URL(path, BACKENDBASEADDRESS).toString();
}

export const mswAllHandlers = [...customerHandler, ...worksheetHandler];
