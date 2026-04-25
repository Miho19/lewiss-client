import type { WorksheetType } from '../../../zod/Worksheet';
import { v4 as uuidv4 } from 'uuid';
import { testCustomner } from '../customer/customer-example';

export const testWorksheet: WorksheetType = {
  id: uuidv4(),
  customerId: testCustomner.id,
  price: 5000.0,
  discount: 120.0,
  buildType: 'New',
  calloutFee: 95,
  status: 'New',
  remotes: 1,
  heightAssessment: false,
  smartLinkHub: false,
  usbChargers: 1,
  discountName: 'None',
};

export const testWorksheets: WorksheetType[] = [testWorksheet];
