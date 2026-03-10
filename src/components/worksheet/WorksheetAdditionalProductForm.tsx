import { useEffect, useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { WorksheetAdditionalFormDataType } from '../../zod/Worksheet';
import { testWorksheet } from '../../utility/msw/worksheet-example';
import ButtonGrey from '../common/ButtonGrey';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router';

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
    <div className="w-full flex flex-col shadow-md px-3 py-6 border-t border-black/5 md:w-96">
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
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
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
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
          />
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="heightAssessment">Height Assessment</label>
          <select
            name="heightAssessment"
            id="heightAssessment"
            value={additionalProductFormData.heightAssessment === true ? 'Yes' : 'No'}
            onChange={onChangeHandlerSelect}
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="w-full flex justify-between items-center">
          <label htmlFor="smartLinkHub">SmartLink Hub</label>
          <select
            name="smartLinkHub"
            id="smartLinkHub"
            value={additionalProductFormData.smartLinkHub === true ? 'Yes' : 'No'}
            onChange={onChangeHandlerSelect}
            className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default WorksheetAdditionalProductForm;
