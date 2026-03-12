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
import FormSelectInput from '../common/FormSelectInput';

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

  return (
    <div className="w-full flex flex-col shadow-md px-6 py-6 border-t border-black/5 md:w-lg">
      <form className="w-full flex flex-col space-y-10" onSubmit={onSubmitHandler}>
        <FormSelectInput
          labelValue="Build"
          onSelectHandler={onChangeHandlerSelect}
          options={WorksheetBuildTypeEnum.options}
          selectName="buildType"
          value={optionFormData.buildType}
        />

        <FormSelectInput
          labelValue="Discount"
          onSelectHandler={onChangeHandlerSelect}
          options={WorksheetDiscountNameEnum.options}
          selectName="discountName"
          value={optionFormData.discountName}
        />

        <FormSelectInput
          labelValue="Call out Fee"
          onSelectHandler={onChangeHandlerSelect}
          options={WorksheetCalloutFeeOptions}
          selectName="calloutFee"
          value={optionFormData.calloutFee}
        />
        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default WorksheetOptionForm;
