import { useState, type ChangeEvent, type SubmitEventHandler } from 'react';
import type { CustomerCreateType } from '../../zod/Customer';
import { UserPlus } from 'lucide-react';
import ButtonGrey from '../common/ButtonGrey';
import useCustomerNewMutation from '../../hooks/Customer/useCustomerNewMutation';

import handleCustomerNewFormValidation from '../../utility/CustomerNewFormValidation';

export const initialCustomerNewFormData: CustomerCreateType = {
  familyName: '',
  street: '',
  city: '',
  suburb: '',
  mobile: '',
  email: '',
};

const initialCustomerNewFormDataErrorObject: CustomerCreateType = {
  ...initialCustomerNewFormData,
};

function NewCustomerForm() {
  const [customerNewFormData, setCustomerNewFormData] = useState(initialCustomerNewFormData);
  const customerNewMutation = useCustomerNewMutation();
  const [customerNewFormDataErrorObject, setCustomerNewFormDataErrorObject] = useState(
    initialCustomerNewFormDataErrorObject,
  );

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCustomerNewFormData((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (customerNewMutation.isPending) return;

    const formDataErrors = handleCustomerNewFormValidation(customerNewFormData);
    if (formDataErrors.isError) {
      setCustomerNewFormDataErrorObject({ ...formDataErrors.errorObject });
      return;
    }

    await customerNewMutation.mutateAsync(customerNewFormData);
  };

  return (
    <div className="w-full flex flex-col shadow-md px-6 py-6 border-t border-black/5 space-y-6 md:w-xl">
      <h2 className="border-b border-black/5 py-6 text-lg">New Customer</h2>
      <form className="w-full flex flex-col space-y-10" onSubmit={onSubmitHandler}>
        <div className="w-full flex justify-between items-center">
          <label htmlFor="familyName">Family Name</label>
          <input
            id="familyName"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="familyName"
            onChange={handleInputOnChange}
            value={customerNewFormData.familyName}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="mobile"
            onChange={handleInputOnChange}
            value={customerNewFormData.mobile}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="email"
            onChange={handleInputOnChange}
            value={customerNewFormData.email}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="street"
            onChange={handleInputOnChange}
            value={customerNewFormData.street}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="suburb">Suburb</label>
          <input
            id="suburb"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="suburb"
            onChange={handleInputOnChange}
            value={customerNewFormData.suburb}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="city">City</label>
          <input
            id="city"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="city"
            onChange={handleInputOnChange}
            value={customerNewFormData.city}
          />
        </div>

        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Create" icon={UserPlus} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default NewCustomerForm;
