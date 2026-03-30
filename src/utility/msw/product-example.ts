import type { KineticsCellularProductEntryType } from '../../zod/KineticsCellular';
import type { KineticsRollerProductEntryType } from '../../zod/KineticsRoller';
import { testWorksheet } from './worksheet-example';
import { v4 as uuidv4 } from 'uuid';

export const testProduct1: KineticsCellularProductEntryType = {
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
  combSize: '10mm',
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
  combSize: '20mm',
  id: uuidv4(),
  price: 449.86 + 255,
};

export const testProduct3: KineticsRollerProductEntryType = {
  rollType: 'Front',
  chainColour: 'White',
  chainLength: 1750,
  bracketType: 'Standard',
  bracketColour: 'White',
  bottomRailType: 'Flat',
  bottomRailColour: 'White',
  pelmetType: 'None',
  pelmetColour: 'White',
  worksheetId: testWorksheet.id,
  location: 'Dining',
  width: 1600,
  height: 1200,
  reveal: 80,
  installHeight: 1200,
  fitType: 'Inside',
  fixingTo: 'wood',
  productType: 'Kinetics Roller',
  operationSide: 'Left',
  remoteNumber: 0,
  remoteChannel: 0,
  id: uuidv4(),
  price: 1200,
  operationType: 'Chain',
  fabricType: 'LF',
  fabric: 'Adagio | Black',
};

export const testWorksheet1ProductList = [testProduct1, testProduct2, testProduct3];
