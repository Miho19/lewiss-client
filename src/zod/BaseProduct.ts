import * as z from 'zod';
import type {
  KineticsCellularProductCreateType,
  KineticsCellularProductEntryType,
} from './KineticsCellular';
import type {
  KineticsRollerProductCreateType,
  KineticsRollerProductEntryType,
} from './KineticsRoller';

const fitTypeEnum = z.enum(['Inside', 'Outside'] as const);
const fixingToEnum = z.enum(['wood'] as const);
const productTypeEnum = z.enum(['Kinetics Roller', 'Kinetics Cellular'] as const);
const operationSideEnum = z.enum(['Left', 'Right'] as const);

export const BaseProductCreateZodObject = z.object({
  // common between all product types
  worksheetId: z.uuidv4(),
  location: z.string(),
  width: z.number(),
  height: z.number(),
  reveal: z.number(),
  installHeight: z.number(),
  fitType: fitTypeEnum,
  fixingTo: fixingToEnum,

  // dependent on product type

  productType: productTypeEnum,
  fabric: z.string(),
  operationType: z.string(),
  operationSide: operationSideEnum,
  remoteNumber: z.number(),
  remoteChannel: z.number(),
});

export type ProductEntryTypes = KineticsCellularProductEntryType | KineticsRollerProductEntryType;
export type ProductCreateTypes =
  | KineticsCellularProductCreateType
  | KineticsRollerProductCreateType;
