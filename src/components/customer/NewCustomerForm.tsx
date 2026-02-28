import { useState, type ChangeEvent } from 'react';
import type { CustomerCreateType } from '../../zod/Customer';
import CustomerButton from './CustomerButton';
import { UserPlus } from 'lucide-react';

const initialNewCustomerData: CustomerCreateType = {
  familyName: '',
  street: '',
  city: '',
  suburb: '',
  mobile: '',
  email: '',
};

function NewCustomerForm() {
  const [newCustomerData, setNewCustomerData] = useState(initialNewCustomerData);

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewCustomerData((prev) => ({ ...prev, [name]: value }));
  }

  function handleOnSubmit() {}
  return (
    <div className="w-full flex flex-col md:items-center space-y-6 h-full shadow-md border-t border-black/5 px-3">
      <h2 className="border-b border-black/5 py-6">New Customer</h2>
      <form
        className="w-full grid grid-cols-5 gap-5 md:grid-cols-3 md:grid-rows-4"
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="familyName" className="col-span-2 md:col-span-1 md:row-start-1">
          Family name:
        </label>
        <input
          placeholder="Doe"
          id="familyName"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-2 md:ml-0"
          name="familyName"
          onChange={handleInputOnChange}
          value={newCustomerData.familyName}
        />

        <label htmlFor="mobileNumber" className="col-span-2 md:col-span-1 md:row-start-1">
          Mobile number:
        </label>
        <input
          type="tel"
          placeholder="123-456-7890"
          id="mobileNumber"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-2 md:ml-0"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="mobileNumber"
          onChange={handleInputOnChange}
          value={newCustomerData.mobile}
        />

        <label htmlFor="emailAddress" className="col-span-2 md:col-span-1 md:row-start-1">
          Email address:
        </label>
        <input
          id="emailAddress"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-2 md:ml-0"
          type="email"
          name="emailAddress"
          onChange={handleInputOnChange}
          value={newCustomerData.email}
        />

        <label htmlFor="street" className="col-span-2 md:col-span-1 md:row-start-3">
          Street:
        </label>
        <input
          placeholder="Doe"
          id="street"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-4 md:ml-0"
          name="street"
          onChange={handleInputOnChange}
          value={newCustomerData.street}
        />

        <label htmlFor="suburb" className="col-span-2 md:col-span-1 md:row-start-3">
          Suburb:
        </label>
        <input
          placeholder="Doe"
          id="suburb"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-4 md:ml-0"
          name="suburb"
          onChange={handleInputOnChange}
          value={newCustomerData.suburb}
        />

        <label htmlFor="city" className="col-span-2 md:col-span-1 md:row-start-3">
          City:
        </label>
        <input
          placeholder="Doe"
          id="city"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-4 md:ml-0"
          name="city"
          onChange={handleInputOnChange}
          value={newCustomerData.city}
        />

        <div className="col-span-5 md:col-span-1 md:col-start-3 md:flex md:justify-end md:w-full ">
          <CustomerButton buttonText="Create" icon={UserPlus} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default NewCustomerForm;
