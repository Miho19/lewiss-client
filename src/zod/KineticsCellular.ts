import * as z from 'zod';
import { BaseProductCreateZodObject } from './BaseProduct';

export const kineticsCellularHeadrailColourEnum = z.enum(['White', 'Black'] as const);
export const kineticsCellularSideChannelColourEnum = z.enum(['White', 'Black', 'None'] as const);

export const kineticsCellular10mmOperationEnum = z.enum([
  'Lithium-ion',
  'Cord',
  'Skylight',
  'Top Down Bottom Up',
]);

export const kineticsCellular20mmOperationEnum = z.enum(['Cord', 'Top Down Bottom Up'] as const);

export const kineticsCellularCombSizeEnum = z.enum(['10mm', '20mm'] as const);

export const kineticsCellular10mmFabricEnum = z.enum(['001 Translucent Cotton'] as const);
export const kineticsCellular20mmFabricEnum = z.enum(['021 Translucent Gray Sheen'] as const);

const KineticsCellularZodObject = z.object({
  combSize: kineticsCellularCombSizeEnum,
  operationType: kineticsCellular10mmOperationEnum.or(kineticsCellular20mmOperationEnum),
  headrailColour: kineticsCellularHeadrailColourEnum,
  sideChannelColour: kineticsCellularSideChannelColourEnum,
  fabric: kineticsCellular10mmFabricEnum.or(kineticsCellular20mmFabricEnum),
});

export const KineticsCellularProductCreateZodObject = z.object({
  ...BaseProductCreateZodObject.shape,
  ...KineticsCellularZodObject.shape,
});

export const KineticsCellularProductEntryZodObject = z.object({
  id: z.uuidv4(),
  price: z.number(),
  ...BaseProductCreateZodObject.shape,
  ...KineticsCellularZodObject.shape,
});

export type KineticsCellularProductCreateType = z.infer<
  typeof KineticsCellularProductCreateZodObject
>;

export type KineticsCellularProductEntryType = z.infer<
  typeof KineticsCellularProductEntryZodObject
>;
