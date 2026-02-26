import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import CustomerButton from './CustomerButton';
import { Search } from 'lucide-react';

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
    <div className="w-full flex flex-col md:items-center space-y-6">
      <h2 className="border-b border-black/5 py-6">Customer Search</h2>
      <form
        className="w-full grid grid-cols-5 gap-4 md:grid-cols-3 md:grid-rows-2"
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
          value={customerSearchData.familyName}
        />

        <label htmlFor="mobile" className="col-span-2 md:col-span-1 md:row-start-1">
          Mobile number:
        </label>
        <input
          id="mobile"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-2 md:ml-0"
          name="mobile"
          onChange={handleInputOnChange}
          value={customerSearchData.mobile}
        />

        <label htmlFor="email" className="col-span-2 md:col-span-1 md:row-start-1">
          Email address:
        </label>
        <input
          id="email"
          className="pl-3 bg-gray-100 border border-white rounded-lg ml-3 col-span-3  md:col-span-1 md:row-start-2 md:ml-0"
          type="email"
          name="email"
          onChange={handleInputOnChange}
          value={customerSearchData.email}
        />
        <div className="col-span-5 md:col-span-1 md:col-start-3 md:flex md:justify-end md:w-full ">
          <CustomerButton buttonText="Submit" icon={Search} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default CustomerSearchForm;
