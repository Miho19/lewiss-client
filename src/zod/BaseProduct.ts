import * as z from 'zod';
import type {
  KineticsCellularProductCreateType,
  KineticsCellularProductEntryType,
} from './KineticsCellular';
import type {
  KineticsRollerProductCreateType,
  KineticsRollerProductEntryType,
} from './KineticsRoller';

export const ProductFitTypeEnum = z.enum(['Inside', 'Outside'] as const);
export const ProductFixingToEnum = z.enum(['wood'] as const);
export const ProductTypeEnum = z.enum(['Kinetics Roller', 'Kinetics Cellular'] as const);
export const ProductOperationSideEnum = z.enum(['Left', 'Right'] as const);

export const BaseProductCreateZodObject = z.object({
  // common between all product types
  worksheetId: z.uuidv4(),
  location: z.string(),
  width: z.number(),
  height: z.number(),
  reveal: z.number(),
  installHeight: z.number(),
  fitType: ProductFitTypeEnum,
  fixingTo: ProductFixingToEnum,
  productType: ProductTypeEnum,
  operationSide: ProductOperationSideEnum,

  // need to figure this out, it requires actually getting the entire list of products already created...
  remoteNumber: z.number(),
  remoteChannel: z.number(),
});

export type ProductEntryTypes = KineticsCellularProductEntryType | KineticsRollerProductEntryType;

export type ProductCreateTypes =
  | KineticsCellularProductCreateType
  | KineticsRollerProductCreateType;
