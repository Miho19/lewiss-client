import * as z from 'zod';
import { BaseProductCreateZodObject } from './BaseProduct';

const headrailColourEnum = z.enum(['White', 'Black'] as const);
const sideChannelColourEnum = z.enum(['White', 'Black', 'None'] as const);

const KineticsCellularZodObject = z.object({
  headrailColour: headrailColourEnum,
  sideChannelColour: sideChannelColourEnum,
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
