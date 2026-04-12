import React, { type ChangeEvent, type SetStateAction, type SubmitEvent } from 'react';
import { Search } from 'lucide-react';
import ButtonGrey from '../../common/ButtonGrey';
import type { CustomerSearchFormData } from './CustomerSearch';

type Props = {
  customerSearchData: CustomerSearchFormData;
  setCustomerSearchData: React.Dispatch<SetStateAction<CustomerSearchFormData>>;
  handleOnSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
};

function CustomerSearchForm(props: Props) {
  const { customerSearchData, setCustomerSearchData, handleOnSubmit } = props;

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCustomerSearchData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="w-full flex flex-col shadow-md px-6 py-6 border-t border-black/5 md:w-xl space-y-6">
      <h2 className="border-b border-black/5 py-6 text-lg">Customer Search</h2>
      <form className="w-full flex flex-col space-y-10" onSubmit={handleOnSubmit}>
        <div className="w-full flex justify-between items-center">
          <label htmlFor="familyName">Family Name</label>
          <input
            id="familyName"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="familyName"
            onChange={handleInputOnChange}
            value={customerSearchData.familyName}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="mobile"
            onChange={handleInputOnChange}
            value={customerSearchData.mobile}
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
            name="email"
            onChange={handleInputOnChange}
            value={customerSearchData.email}
          />
        </div>

        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Search" icon={Search} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default CustomerSearchForm;
