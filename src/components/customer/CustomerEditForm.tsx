import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { CustomerType } from '../../zod/Customer';
import ButtonGrey from '../common/ButtonGrey';
import { Save } from 'lucide-react';
import useCustomerEditMutation from '../../hooks/Customer/useCustomerEditMutation';
import { initialCustomerNewFormData } from './NewCustomerForm';
import handleCustomerNewFormValidation from '../../utility/CustomerNewFormValidation';

type Props = {
  customer: CustomerType;
};

function CustomerEditForm(props: Props) {
  const { customer } = props;
  const [customerFormData, setCustomerFormData] = useState<CustomerType>(customer);
  const editCustomerMutation = useCustomerEditMutation();
  const [customerFormDataErrorObject, setCustomerFormDataErrorObject] = useState(
    initialCustomerNewFormData,
  );

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCustomerFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (editCustomerMutation.isPending) return;

    const formDataErrors = handleCustomerNewFormValidation(customerFormData);
    if (formDataErrors.isError) {
      setCustomerFormDataErrorObject({ ...formDataErrors.errorObject });
      return;
    }

    await editCustomerMutation.mutateAsync(customerFormData);
  }

  return (
    <div className="w-full flex flex-col shadow-md px-6 py-6 border-t border-black/5 md:w-xl space-y-6">
      <h2 className="text-lg border-b border-black/5 pb-5 w-full">{customer.familyName}</h2>

      <form className="w-full flex flex-col space-y-10" onSubmit={onSubmitHandler}>
        <div className="w-full flex justify-between items-center">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="mobile"
            onChange={handleInputOnChange}
            value={customerFormData.mobile}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="email"
            onChange={handleInputOnChange}
            value={customerFormData.email}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="street"
            onChange={handleInputOnChange}
            value={customerFormData.street}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="suburb">Suburb</label>
          <input
            id="suburb"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="suburb"
            onChange={handleInputOnChange}
            value={customerFormData.suburb}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="city">City</label>
          <input
            id="city"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="city"
            onChange={handleInputOnChange}
            value={customerFormData.city}
          />
        </div>

        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default CustomerEditForm;
