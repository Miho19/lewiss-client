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
    <div className="w-full flex flex-col">
      <h2 className="border-b border-black/5 py-6">Customer Search</h2>
      <form className="flex flex-col space-y-6">
        <label className="">
          Family name:
          <input
            className="bg-gray-100 border border-white rounded-lg ml-3"
            name="familyName"
            onChange={handleInputOnChange}
            value={customerSearchData.familyName}
          />
        </label>
        <label>
          Mobile number:
          <input
            className="bg-gray-100 border border-white rounded-lg ml-3"
            name="mobileNumber"
            onChange={handleInputOnChange}
            value={customerSearchData.mobileNumber}
          />
        </label>

        <label>
          Email address:
          <input
            className="bg-gray-100 border border-white rounded-lg ml-3"
            type="email"
            name="emailAddress"
            onChange={handleInputOnChange}
            value={customerSearchData.emailAddress}
          />
        </label>
      </form>
    </div>
  );
}

export default CustomerSearchForm;
