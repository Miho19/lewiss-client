import type { Path } from 'msw';

export const BACKENDBASEADDRESS = '${"http://localhost:5052"}/api/v1/';

export const mswAllHandlers = [];

export function toURL(path: string): Path {
  return new URL(path, BACKENDBASEADDRESS).toString();
}
