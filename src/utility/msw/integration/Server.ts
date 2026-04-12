import { setupServer } from 'msw/node';
import { mswAllHandlers } from '..';

export const server = setupServer(...mswAllHandlers);
