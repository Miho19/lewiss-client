import * as z from 'zod';

export const WorksheetZodObject = z.object({
  id: z.uuidv4(),
  customerId: z.uuidv4(),
  price: z.number(),
  discount: z.number(),
  newBuild: z.boolean(),
  calloutFee: z.number(),
});

export type WorksheetType = z.infer<typeof WorksheetZodObject>;
