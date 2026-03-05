import * as z from 'zod';
import { BaseProductCreateZodObject } from './BaseProduct';

const rollTypeEnum = z.enum(['Front', 'Back'] as const);
const chainColourEnum = z.enum(['White', 'Black', 'Grey', 'Stainless'] as const);
const bracketTypeEnum = z.enum(['Standard', 'Extra Large'] as const);
const bracketColourEnum = z.enum(['White', 'Black'] as const);
const bottomRailTypeEnum = z.enum(['Flat', 'Deluxe'] as const);
const bottomRailColourEnum = z.enum(['White', 'Black', 'Silver', 'Off White'] as const);
const pelmetTypeEnum = z.enum(['None'] as const);
const pelmetColourEnum = z.enum(['White', 'Black'] as const);

const KineticsRollerZodObject = z.object({
  rollType: rollTypeEnum,
  chainColour: chainColourEnum,
  chainLength: z.number(),
  bracketType: bracketTypeEnum,
  bracketColour: bracketColourEnum,
  bottomRailType: bottomRailTypeEnum,
  bottomRailColour: bottomRailColourEnum,
  pelmetType: pelmetTypeEnum,
  pelmetColour: pelmetColourEnum,
});

export const KineticsRollerProductCreateZodObject = z.object({
  ...BaseProductCreateZodObject.shape,
  ...KineticsRollerZodObject.shape,
});

export const KineticsRollerProductEntryZodObject = z.object({
  id: z.uuid(),
  price: z.number(),
  ...BaseProductCreateZodObject.shape,
  ...KineticsRollerZodObject.shape,
});

export type KineticsRollerProductCreateType = z.infer<typeof KineticsRollerProductCreateZodObject>;
export type KineticsRollerProductEntryType = z.infer<typeof KineticsRollerProductEntryZodObject>;
