import type { WorksheetType } from '../../zod/Worksheet';
import { v4 as uuidv4 } from 'uuid';

const testCustomerId = uuidv4();

export const testWorksheet: WorksheetType = {
  id: uuidv4(),
  customerId: testCustomerId,
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

export const testWorksheets: WorksheetType[] = [
  testWorksheet,
  {
    id: uuidv4(),
    customerId: testCustomerId,
    price: 1200.4,
    discount: 350.0,
    buildType: 'Existing',
    calloutFee: 95,
    status: 'Processed',
    remotes: 2,
    heightAssessment: false,
    smartLinkHub: false,
    usbChargers: 1,
    discountName: 'None',
  },
  {
    id: uuidv4(),
    customerId: testCustomerId,
    price: 640.66,
    discount: 0,
    buildType: 'Existing',
    calloutFee: 155,
    status: 'Completed',
    remotes: 1,
    heightAssessment: false,
    smartLinkHub: false,
    usbChargers: 1,
    discountName: 'None',
  },
  {
    id: uuidv4(),
    customerId: testCustomerId,
    price: 3200.0,
    discount: 0,
    buildType: 'Existing',
    calloutFee: 0,
    status: 'Error',
    remotes: 0,
    heightAssessment: false,
    smartLinkHub: false,
    usbChargers: 1,
    discountName: 'None',
  },
];
