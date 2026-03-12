import { NavLink } from 'react-router';
import { currencyFormat } from '../../utility/CurrencyFormattor';
import type { WorksheetType } from '../../zod/Worksheet';
import { Pencil } from 'lucide-react';

type Props = {
  worksheet: WorksheetType;
};

function WorksheetOption(props: Props) {
  const { worksheet } = props;

  return (
    <div className="w-full flex flex-col space-y-3 shadow-md px-6 py-6 border-t border-black/5 md:w-lg justify-evenly">
      <div className="w-full flex justify-between">
        <p>Build</p>
        <p>{worksheet.buildType}</p>
      </div>
      <div className="w-full flex justify-between">
        <p>Call out Fee</p>
        <p>{currencyFormat(worksheet.calloutFee)}</p>
      </div>
      <div className="w-full flex justify-between">
        <p>Discount</p>
        <p>{worksheet.discountName}</p>
      </div>

      <div className="flex w-full justify-end mt-3">
        <NavLink
          to={`/worksheet/${worksheet.id}/option/`}
          className={`flex flex-1 w-full border space-x-3 2xl:max-w-32 2xl:min-w-32 border-black/5 bg-gray-50 rounded-lg p-2 cursor-pointer group-hover:bg-gray-200 hover:-translate-y-1 group transition-all delay-75 duration-75 ease-in-out 2xl:justify-around`}
        >
          <Pencil />
          <p>Edit</p>
        </NavLink>
      </div>
    </div>
  );
}

export default WorksheetOption;
