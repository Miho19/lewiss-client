import * as z from 'zod';

export const WorksheetStatusEnum = z.enum(['New', 'Processed', 'Completed', 'Error'] as const);

export const WorksheetDiscountNameEnum = z.enum([
  'None',
  'Free Installation',
  'Free Motorisation',
  '10%',
  '20%',
  '30%',
] as const);

export const WorksheetBuildTypeEnum = z.enum(['Existing', 'New'] as const);

export const WorksheetCalloutFeeOptions = [0, 95, 115, 155, 195] as const;

const calloutFeeSchema = z.union(WorksheetCalloutFeeOptions.map((n) => z.literal(n)));

const WorksheetOptionZodObject = z.object({
  discountName: WorksheetDiscountNameEnum,
  buildType: WorksheetBuildTypeEnum,
  calloutFee: calloutFeeSchema,
});

const WorksheetAdditionalZodObject = z.object({
  remotes: z.number(),
  usbChargers: z.number(),
  heightAssessment: z.boolean(),
  smartLinkHub: z.boolean(),
});

export const WorksheetZodObject = z.object({
  id: z.uuidv4(),
  customerId: z.uuidv4(),
  price: z.number(),
  discount: z.number(),

  ...WorksheetAdditionalZodObject.shape,
  ...WorksheetOptionZodObject.shape,
  status: WorksheetStatusEnum,
});

export const WorksheetZodObjectArray = z.array(WorksheetZodObject);

export type WorksheetType = z.infer<typeof WorksheetZodObject>;

export type WorksheetStatusEnum = z.infer<typeof WorksheetStatusEnum>;
export type WorksheetDiscountEnum = z.infer<typeof WorksheetDiscountNameEnum>;

export type WorksheetOptionFormDataType = z.infer<typeof WorksheetOptionZodObject>;
export type WorksheetAdditionalFormDataType = z.infer<typeof WorksheetAdditionalZodObject>;
