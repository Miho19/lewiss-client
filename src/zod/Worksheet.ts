import * as z from 'zod';

const StatusEnums = z.enum(['New', 'Processed', 'Completed', 'Error']);

export const WorksheetZodObject = z.object({
  id: z.uuidv4(),
  customerId: z.uuidv4(),
  price: z.number(),
  discount: z.number(),
  newBuild: z.boolean(),
  calloutFee: z.number(),
  status: StatusEnums,
});

export type WorksheetType = z.infer<typeof WorksheetZodObject>;

export type WorksheetStatusEnum = z.infer<typeof StatusEnums>;
