import { NavLink } from 'react-router';
import type { WorksheetType } from '../../zod/Worksheet';
import { Pencil } from 'lucide-react';

type Props = {
  worksheet: WorksheetType;
};

function WorksheetAdditionalProduct(props: Props) {
  const { worksheet } = props;

  return (
    <div className="w-full flex flex-col space-y-3 shadow-md px-3 py-6 border-t border-black/5 md:w-96 justify-evenly">
      <div className="w-full flex justify-between">
        <p>Remotes</p>
        <p>{worksheet.remotes}</p>
      </div>
      <div className="w-full flex justify-between">
        <p>USB Charger Cable</p>
        <p>{worksheet.usbChargers}</p>
      </div>
      <div className="w-full flex justify-between">
        <p>Height Assessment</p>
        <p>{worksheet.heightAssessment === true ? 'Yes' : 'No'}</p>
      </div>

      <div className="w-full flex justify-between">
        <p>SmartLink Hub</p>
        <p>{worksheet.smartLinkHub === true ? 'Yes' : 'No'}</p>
      </div>

      <div className="flex w-full justify-end mt-3">
        <NavLink
          to={`/worksheet/${worksheet.id}/additional/`}
          className={`flex flex-1 w-full border space-x-3 2xl:max-w-32 2xl:min-w-32 border-black/5 bg-gray-50 rounded-lg p-2 cursor-pointer group-hover:bg-gray-200 hover:-translate-y-1 group transition-all delay-75 duration-75 ease-in-out 2xl:justify-around`}
        >
          <Pencil />
          <p>Edit</p>
        </NavLink>
      </div>
    </div>
  );
}

export default WorksheetAdditionalProduct;
