import { Hammer, FileClock, FileCheck, BadgeAlert, LoaderCircle } from 'lucide-react';
import type { WorksheetStatusEnum, WorksheetType } from '../../zod/Worksheet';
import { NavLink } from 'react-router';

type Props = {
  worksheet: WorksheetType;
};

function getStatusIcon(status: WorksheetStatusEnum) {
  switch (status) {
    case 'Completed':
      return <FileCheck className="text-green-400 opacity-50" />;
    case 'Error':
      return <BadgeAlert className="text-red-400 opacity-50" />;
    case 'New':
      return <Hammer className="text-blue-400 opacity-50" />;
    case 'Processed':
      return <FileClock className="text-yellow-400 opacity-50" />;
    default:
      <LoaderCircle className="text-yellow-100 opacity-50" />;
  }
}

function WorksheetListElement(props: Props) {
  const { worksheet } = props;

  const priceFormatted = worksheet.price.toLocaleString('en-us', {
    style: 'currency',
    currency: 'NZD',
  });

  const Icon = getStatusIcon(worksheet.status);

  return (
    <li
      className="flex flex-1 w-full flex-col p-3 shadow-md sm:rounded-lg 
    hover:bg-gray-100 transition-all duration-100 ease-in-out group cursor-pointer hover:-translate-y-3 border-t border-black/5"
    >
      <NavLink to={`/worksheet/${worksheet.id}`} end>
        <div className="w-full flex">
          <p className="w-full text-left flex-1">{priceFormatted}</p>
          {Icon}
        </div>

        <p className="text-xs italic text-gray-400 border-t border-black/5 mt-2 pt-3">
          {worksheet.id}
        </p>
      </NavLink>
    </li>
  );
}

export default WorksheetListElement;
