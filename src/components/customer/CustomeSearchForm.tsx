import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { Search } from 'lucide-react';
import ButtonGrey from '../common/ButtonGrey';

export type CustomerSearchFormData = {
  familyName: string;
  mobile: string;
  email: string;
};

const initialCustomerSearchFormData: CustomerSearchFormData = {
  familyName: '',
  mobile: '',
  email: '',
};

function CustomerSearchForm() {
  const [customerSearchData, setCustomerSearchData] = useState(initialCustomerSearchFormData);

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCustomerSearchData((prev) => ({ ...prev, [name]: value }));
  }

  function handleOnSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(customerSearchData);
  }
  return (
    <div className="w-full flex flex-col shadow-md px-6 py-6 border-t border-black/5 md:w-96 space-y-6">
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
