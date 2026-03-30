import * as z from 'zod';
import { BaseProductCreateZodObject } from './BaseProduct';

const kineticsRollerRollTypeEnum = z.enum(['Front', 'Back'] as const);
export const kineticsRollerChainColourEnum = z.enum([
  'White',
  'Black',
  'Grey',
  'Stainless',
] as const);
const kineticsRollerBracketTypeEnum = z.enum(['Standard', 'Extra Large'] as const);
const kineticsRollerBracketColourEnum = z.enum(['White', 'Black'] as const);
const kineticsRollerBottomRailTypeEnum = z.enum(['Flat', 'Deluxe'] as const);
const kineticsRollerBottomRailColourEnum = z.enum([
  'White',
  'Black',
  'Silver',
  'Off White',
] as const);
const kineticsRollerPelmetTypeEnum = z.enum(['None'] as const);
const kineticsRollerPelmetColourEnum = z.enum(['White', 'Black'] as const);

export const kineticsRollerChainLengthOptions = [1500, 1750, 2000, 2250, 2500] as const;

const kineticsRollerChainLengthEnum = z.union(
  kineticsRollerChainLengthOptions.map((n) => z.literal(n)),
);

export const kineticsRollerOperationEnum = z.enum(['Chain', 'Lithium-ion', 'Hardwire'] as const);
export const kineticsRollerFabricLFEnum = z.enum([
  'Adagio | Black',
  'Back To Nature | Apodasmia LF',
  'Byron | Blue',
] as const);
export const kineticsRollerFabricBOEnum = z.enum([
  'Austro | Amaze',
  'Broome II | Bluewash',
  'Everyday Thermal | Amour',
] as const);
export const kineticsRollerFabricSSEnum = z.enum([
  'Fenescreen 10% | Charcoal',
  'Fenescreen 2% | Smoke',
  'Mermet E Screen 10% | Charcoal',
] as const);

export const kineticsFabricTypeEnum = z.enum(['LF', 'BO', 'SS'] as const);
export type KineticsFabricType = z.infer<typeof kineticsFabricTypeEnum>;

const KineticsRollerZodObject = z.object({
  rollType: kineticsRollerRollTypeEnum,
  chainColour: kineticsRollerChainColourEnum,
  chainLength: kineticsRollerChainLengthEnum,
  bracketType: kineticsRollerBracketTypeEnum,
  bracketColour: kineticsRollerBracketColourEnum,
  bottomRailType: kineticsRollerBottomRailTypeEnum,
  bottomRailColour: kineticsRollerBottomRailColourEnum,
  pelmetType: kineticsRollerPelmetTypeEnum,
  pelmetColour: kineticsRollerPelmetColourEnum,

  operationType: kineticsRollerOperationEnum,
  fabricType: kineticsFabricTypeEnum,
  fabric: kineticsRollerFabricSSEnum.or(kineticsRollerFabricBOEnum.or(kineticsRollerFabricLFEnum)),
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
