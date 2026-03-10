import { useEffect, useState, type ChangeEvent, type SubmitEvent } from 'react';
import {
  WorksheetBuildTypeEnum,
  WorksheetCalloutFeeOptions,
  WorksheetDiscountNameEnum,
  type WorksheetOptionFormDataType,
} from '../../zod/Worksheet';
import { testWorksheet } from '../../utility/msw/worksheet-example';
import ButtonGrey from '../common/ButtonGrey';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router';

const initialFormData: WorksheetOptionFormDataType = {
  discountName: 'None',
  buildType: 'Existing',
  calloutFee: 0,
};

function WorksheetOptionForm() {
  const [optionFormData, setOptionFormData] =
    useState<WorksheetOptionFormDataType>(initialFormData);

  const navigator = useNavigate();

  // Get Worksheet from react query
  const worksheet = testWorksheet;

  useEffect(() => {
    setOptionFormData({
      discountName: worksheet.discountName,
      calloutFee: worksheet.calloutFee,
      buildType: worksheet.buildType,
    });
  }, []);

  function onChangeHandlerSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setOptionFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function onSubmitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(optionFormData);
    navigator(`/worksheet/${worksheet.id}`);
  }

  const discountOptionList = WorksheetDiscountNameEnum.options.map((discount) => (
    <option>{discount}</option>
  ));

  const buildTypeOptionList = WorksheetBuildTypeEnum.options.map((buildType) => (
    <option>{buildType}</option>
  ));

  const calloutFeeOptionList = WorksheetCalloutFeeOptions.map((n) => <option>{n}</option>);

  return (
    <div className="w-full flex flex-col shadow-md px-3 py-6 border-t border-black/5 md:w-96">
      <form className="w-full flex flex-col space-y-10" onSubmit={onSubmitHandler}>
        <div className="w-full flex justify-between items-center">
          <label htmlFor="buildType">Build</label>
          <select
            name="buildType"
            id="buildType"
            value={optionFormData.buildType}
            onChange={onChangeHandlerSelect}
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
          >
            {buildTypeOptionList}
          </select>
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="discountName">Discount</label>
          <select
            name="discountName"
            id="discountName"
            value={optionFormData.discountName}
            onChange={onChangeHandlerSelect}
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
          >
            {discountOptionList}
          </select>
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="call">Call out Fee</label>
          <select
            name="calloutFee"
            id="calloutFee"
            value={optionFormData.calloutFee}
            onChange={onChangeHandlerSelect}
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
          >
            {calloutFeeOptionList}
          </select>
        </div>

        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default WorksheetOptionForm;
