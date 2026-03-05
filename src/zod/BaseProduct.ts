import * as z from 'zod';

const fitTypeEnum = z.enum(['Inside', 'Outside'] as const);
const fixingToEnum = z.enum(['wood'] as const);
const productTypeEnum = z.enum(['Kinetics Roller', 'Kinetics Cellular'] as const);
const operationSideEnum = z.enum(['Left', 'Right'] as const);

export const BaseProductCreateZodObject = z.object({
  worksheetId: z.uuidv4(),
  location: z.string(),
  width: z.number(),
  height: z.number(),
  reveal: z.number(),
  remoteNumber: z.number(),
  remoteChannel: z.number(),
  installHeight: z.number(),
  fitType: fitTypeEnum,
  fixingTo: fixingToEnum,
  productType: productTypeEnum,
  fabric: z.string(),
  operationType: z.string(),
  operationSide: operationSideEnum,
});
