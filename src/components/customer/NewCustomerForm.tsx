import React, { useState, type ChangeEvent, type SubmitEventHandler } from 'react';
import type { CustomerCreateType } from '../../zod/Customer';
import { UserPlus } from 'lucide-react';
import ButtonGrey from '../common/ButtonGrey';

export const initialNewCustomerData: CustomerCreateType = {
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

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col shadow-md px-3 py-6 border-t border-black/5 md:w-96 space-y-6">
      <h2 className="border-b border-black/5 py-6 text-lg">New Customer</h2>
      <form className="w-full flex flex-col space-y-10" onSubmit={onSubmitHandler}>
        <div className="w-full flex justify-between items-center">
          <label htmlFor="familyName">Family Name</label>
          <input
            id="familyName"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="familyName"
            onChange={handleInputOnChange}
            value={newCustomerData.familyName}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="mobile"
            onChange={handleInputOnChange}
            value={newCustomerData.mobile}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="email"
            onChange={handleInputOnChange}
            value={newCustomerData.email}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="street"
            onChange={handleInputOnChange}
            value={newCustomerData.street}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="suburb">Suburb</label>
          <input
            id="suburb"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="suburb"
            onChange={handleInputOnChange}
            value={newCustomerData.suburb}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="city">City</label>
          <input
            id="city"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="city"
            onChange={handleInputOnChange}
            value={newCustomerData.city}
          />
        </div>

        <div className="col-span-5 md:col-span-1 md:col-start-3 md:flex md:justify-end md:w-full ">
          <ButtonGrey buttonText="Create" icon={UserPlus} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default NewCustomerForm;
