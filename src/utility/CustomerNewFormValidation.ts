import type { CustomerCreateType } from '../zod/Customer';

function handleCustomerNewFormValidation(newFormData: CustomerCreateType): {
  isError: boolean;
  errorObject: CustomerCreateType;
} {
  return {
    isError: false,
    errorObject: {
      street: '',
      city: '',
      suburb: '',
      mobile: '',
      email: '',
      familyName: '',
    },
  };
}

export default handleCustomerNewFormValidation;
