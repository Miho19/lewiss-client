import * as z from 'zod';

const EditableCustomerInformationZodObject = z.object({
  street: z.string(),
  city: z.string(),
  suburb: z.string(),
  mobile: z.string(),
  email: z.email(),
});

export const CustomerBasicInformationZodObject = z.object({
  familyName: z.string(),
  ...EditableCustomerInformationZodObject.shape,
});

export const CustomerZodObject = z.object({
  id: z.uuid(),
  ...CustomerBasicInformationZodObject.shape,
});

export const CustomerZodObjectArray = z.array(CustomerZodObject);

export type CustomerCreateType = z.infer<typeof CustomerBasicInformationZodObject>;
export type CustomerType = z.infer<typeof CustomerZodObject>;
