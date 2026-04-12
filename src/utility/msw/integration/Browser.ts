import { setupWorker } from 'msw/browser';
import { mswAllHandlers } from '..';

export const worker = setupWorker(...mswAllHandlers);
