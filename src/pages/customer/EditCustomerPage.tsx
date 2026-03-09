import { CircleArrowLeft, UserPen } from 'lucide-react';
import ButtonGrey from '../components/common/ButtonGrey';
import { useNavigate } from 'react-router';

import { useEffect, useState, type ChangeEvent, type SubmitEventHandler } from 'react';
import useCustomerSelect from '../hooks/useCustomerSelect';
import type { CustomerEditType } from '../zod/Customer';

function EditCustomerPage() {
  const navigator = useNavigate();
  const selectedCustomer = useCustomerSelect();

  const initialCustomerDetails: CustomerEditType = {
    street: selectedCustomer.customer?.street || '',
    city: selectedCustomer.customer?.city || '',
    suburb: selectedCustomer.customer?.suburb || '',
    mobile: selectedCustomer.customer?.mobile || '',
    email: selectedCustomer.customer?.email || '',
  };

  const [customerEdit, setCustomerEdit] = useState<CustomerEditType>(initialCustomerDetails);

  useEffect(() => {
    if (typeof selectedCustomer.customer === 'undefined') navigator('/customer');
  }, [selectedCustomer]);

  function backButtonOnClickHandler() {
    navigator(-1);
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCustomerEdit((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full flex flex-col items-center space-y-10 md:items-center">
      <div className="flex w-full justify-end">
        <ButtonGrey
          buttonText="Back"
          icon={CircleArrowLeft}
          onClickHandler={backButtonOnClickHandler}
        />
      </div>
      <h2 className="text-lg border-b border-black/5 pb-5 w-full md:text-center md:w-fit">
        {selectedCustomer.customer?.familyName}
      </h2>
      <form
        className="w-full flex flex-col shadow-md border border-black/5 p-3 space-y-6 md:w-fit md:space-x-24"
        onSubmit={onSubmitHandler}
      >
        <div className="flex w-full justify-between">
          <label htmlFor="mobile">Mobile</label>
          <input
            name="mobile"
            id="mobile"
            value={customerEdit.mobile}
            onChange={onChangeHandler}
            className="pl-3 bg-gray-100 border border-white rounded-lg"
          />
        </div>
        <div className="flex w-full justify-between">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={customerEdit.email}
            onChange={onChangeHandler}
            className="pl-3 bg-gray-100 border border-white rounded-lg"
          />
        </div>

        <div className="flex w-full justify-between">
          <label htmlFor="street">Street</label>
          <input
            name="street"
            id="street"
            value={customerEdit.street}
            onChange={onChangeHandler}
            className="pl-3 bg-gray-100 border border-white rounded-lg"
          />
        </div>

        <div className="flex w-full justify-between">
          <label htmlFor="suburb">Suburb</label>
          <input
            name="suburb"
            id="suburb"
            value={customerEdit.suburb}
            onChange={onChangeHandler}
            className="pl-3 bg-gray-100 border border-white rounded-lg"
          />
        </div>

        <div className="flex w-full justify-between">
          <label htmlFor="city">City</label>
          <input
            name="city"
            id="city"
            value={customerEdit.city}
            onChange={onChangeHandler}
            className="pl-3 bg-gray-100 border border-white rounded-lg"
          />
        </div>
        <div className="w-full flex md:justify-end">
          <ButtonGrey buttonText="Submit" icon={UserPen} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default EditCustomerPage;
