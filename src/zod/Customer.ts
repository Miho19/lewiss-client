import * as z from 'zod';

const EditableCustomerInformationZodObject = z.object({
  street: z.string(),
  city: z.string(),
  suburb: z.string(),
  mobile: z.string(),
  email: z.email(),
});

const CustomerBasicInformationZodObject = z.object({
  familyName: z.string(),
  ...EditableCustomerInformationZodObject.shape,
});

const CustomerZodObject = z.object({
  id: z.uuid(),
  ...CustomerBasicInformationZodObject.shape,
});

export type CustomerCreateType = z.infer<typeof CustomerBasicInformationZodObject>;
export type CustomerType = z.infer<typeof CustomerZodObject>;
export type CustomerEditType = z.infer<typeof EditableCustomerInformationZodObject>;
