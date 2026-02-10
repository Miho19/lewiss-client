import { useState, type ChangeEvent } from 'react';

type CustomerSearchFormData = {
  familyName: string;
  mobileNumber: string;
  emailAddress: string;
};

const initialCustomerSearchFormData: CustomerSearchFormData = {
  familyName: '',
  mobileNumber: '',
  emailAddress: '',
};

type Props = {};

function CustomerSearchForm(props: Props) {
  const [customerSearchData, setCustomerSearchData] = useState(initialCustomerSearchFormData);

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCustomerSearchData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="w-full flex flex-col md:items-center space-y-6">
      <h2 className="border-b border-black/5 py-6">Customer Search</h2>
      <form className="grid grid-cols-5 gap-4 md:grid-cols-3 md:grid-rows-2 ">
        <label htmlFor="familyName" className="col-span-2 md:col-span-1 md:row-start-1">
          Family name:
        </label>
        <input
          id="familyName"
          className="bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-2 md:ml-0"
          name="familyName"
          onChange={handleInputOnChange}
          value={customerSearchData.familyName}
        />

        <label htmlFor="mobileNumber" className="col-span-2 md:col-span-1 md:row-start-1">
          Mobile number:
        </label>
        <input
          id="mobileNumber"
          className="bg-gray-100 border border-white rounded-lg ml-3 col-span-3 md:col-span-1 md:row-start-2 md:ml-0"
          name="mobileNumber"
          onChange={handleInputOnChange}
          value={customerSearchData.mobileNumber}
        />

        <label htmlFor="emailAddress" className="col-span-2 md:col-span-1 md:row-start-1">
          Email address:
        </label>
        <input
          id="emailAddress"
          className="bg-gray-100 border border-white rounded-lg ml-3 col-span-3  md:col-span-1 md:row-start-2 md:ml-0"
          type="email"
          name="emailAddress"
          onChange={handleInputOnChange}
          value={customerSearchData.emailAddress}
        />

        <button
          type="submit"
          className="border border-black rounded-lg col-span-full md:col-span-1 md:w-24"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CustomerSearchForm;
