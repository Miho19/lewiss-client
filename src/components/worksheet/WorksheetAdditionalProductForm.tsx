import { useEffect, useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { WorksheetAdditionalFormDataType } from '../../zod/Worksheet';
import { testWorksheet } from '../../utility/msw/worksheet-example';
import ButtonGrey from '../common/ButtonGrey';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router';
import FormSelectInput from '../common/FormSelectInput';

const initialFormData: WorksheetAdditionalFormDataType = {
  remotes: 0,
  usbChargers: 0,
  heightAssessment: false,
  smartLinkHub: false,
};

function WorksheetAdditionalProductForm() {
  const [additionalProductFormData, setAdditionalProductFormData] =
    useState<WorksheetAdditionalFormDataType>(initialFormData);

  const navigator = useNavigate();

  const worksheet = testWorksheet;

  useEffect(() => {
    setAdditionalProductFormData({
      remotes: worksheet.remotes,
      usbChargers: worksheet.usbChargers,
      heightAssessment: worksheet.heightAssessment,
      smartLinkHub: worksheet.smartLinkHub,
    });
  }, []);

  function onSubmitHandler(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(additionalProductFormData);
    navigator(`/worksheet/${worksheet.id}`);
  }

  function onChangeHandlerInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setAdditionalProductFormData((prev) => ({ ...prev, [name]: value }));
  }

  function onChangeHandlerSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    const valueAdjusted = value === 'Yes' ? true : false;
    setAdditionalProductFormData((prev) => ({ ...prev, [name]: valueAdjusted }));
  }

  return (
    <div className="w-full flex flex-col shadow-md px-6 py-6 border-t border-black/5 md:w-lg">
      <form className="w-full flex flex-col space-y-10" onSubmit={onSubmitHandler}>
        <div className="w-full flex justify-between items-center">
          <label htmlFor="remotes">Remotes</label>
          <input
            id="remotes"
            name="remotes"
            type="number"
            max={15}
            min={0}
            value={additionalProductFormData.remotes}
            onChange={onChangeHandlerInput}
            className="w-50 pl-3 pr-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="usbChargers">USB Charger Cables</label>
          <input
            id="usbChargers"
            name="usbChargers"
            type="number"
            max={15}
            min={0}
            value={additionalProductFormData.usbChargers}
            onChange={onChangeHandlerInput}
            className="w-50 pl-3 pr-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
          />
        </div>

        <FormSelectInput
          labelValue="Height Assessment"
          onSelectHandler={onChangeHandlerSelect}
          value={additionalProductFormData.heightAssessment === true ? 'Yes' : 'No'}
          options={['Yes', 'No']}
          selectName="heightAssessment"
        />

        <FormSelectInput
          labelValue="SmartLink Hub"
          onSelectHandler={onChangeHandlerSelect}
          value={additionalProductFormData.smartLinkHub === true ? 'Yes' : 'No'}
          options={['Yes', 'No']}
          selectName="smartLinkHub"
        />

        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default WorksheetAdditionalProductForm;
