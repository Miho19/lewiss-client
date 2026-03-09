import * as z from 'zod';

const StatusEnum = z.enum(['New', 'Processed', 'Completed', 'Error'] as const);

const DiscountNameEnum = z.enum([
  'None',
  'Free Installation',
  'Free Motorisation',
  '10%',
  '20%',
  '30%',
] as const);

export const WorksheetZodObject = z.object({
  id: z.uuidv4(),
  customerId: z.uuidv4(),
  price: z.number(),
  discount: z.number(),
  discountName: DiscountNameEnum,
  newBuild: z.boolean(),
  calloutFee: z.number(),
  remotes: z.number(),
  usbChargers: z.number(),
  heightAssessment: z.boolean(),
  smartLinkHub: z.boolean(),
  status: StatusEnum,
});

export type WorksheetType = z.infer<typeof WorksheetZodObject>;

export type WorksheetStatusEnum = z.infer<typeof StatusEnum>;
export type WorksheetDiscountEnum = z.infer<typeof DiscountNameEnum>;
