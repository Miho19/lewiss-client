import type { Path } from 'msw';
import customerHandler from './customer/customer-handler';
import { BACKENDBASEADDRESS } from '../../http/backendConstants';

export function toURL(path: string): Path {
  return new URL(path, BACKENDBASEADDRESS).toString();
}

export const mswAllHandlers = [...customerHandler];
