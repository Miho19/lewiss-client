import type { KineticsCellularProductEntryType } from '../../zod/KineticsCellular';
import { testWorksheet } from './worksheet-example';
import { v4 as uuidv4 } from 'uuid';

const testProduct1: KineticsCellularProductEntryType = {
  headrailColour: 'White',
  sideChannelColour: 'White',
  worksheetId: testWorksheet.id,
  location: 'Kitchen',
  width: 1200,
  height: 900,
  reveal: 80,
  remoteNumber: 0,
  remoteChannel: 0,
  installHeight: 1000,
  fitType: 'Inside',
  fixingTo: 'wood',
  productType: 'Kinetics Cellular',
  fabric: '001 Translucent Cotton',
  operationType: 'Cord',
  operationSide: 'Left',
  id: uuidv4(),
  price: 449.86,
};

const testProduct2: KineticsCellularProductEntryType = {
  headrailColour: 'Black',
  sideChannelColour: 'None',
  worksheetId: testWorksheet.id,
  location: 'Kitchen',
  width: 1689,
  height: 1230,
  reveal: 80,
  remoteNumber: 1,
  remoteChannel: 1,
  installHeight: 1000,
  fitType: 'Outside',
  fixingTo: 'wood',
  productType: 'Kinetics Cellular',
  fabric: '001 Translucent Cotton',
  operationType: 'Lithium-ion',
  operationSide: 'Right',
  id: uuidv4(),
  price: 449.86 + 255,
};

export const testWorksheet1ProductList = [testProduct1, testProduct2];
