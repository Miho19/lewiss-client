import * as z from 'zod';

const CustomerBasicInformationZodObject = z.object({
  familyName: z.string(),
  street: z.string(),
  city: z.string(),
  suburb: z.string(),
  mobile: z.string(),
  email: z.email(),
});

const CustomerCreateZodObject = z.object(CustomerBasicInformationZodObject);

const CustomerZodObject = z.object({
  id: z.uuid(),
  ...CustomerBasicInformationZodObject.shape,
});

export type CustomerCreateType = z.infer<typeof CustomerCreateZodObject>;
export type CustomerType = z.infer<typeof CustomerZodObject>;
