import { currencyFormat } from '../../utility/CurrencyFormattor';
import type { WorksheetType } from '../../zod/Worksheet';

type Props = {
  worksheet: WorksheetType;
};
function WorksheetPricingInformation(props: Props) {
  const { worksheet } = props;

  return (
    <div className="w-full flex flex-col space-y-3 shadow-md px-3 py-6 border-t border-black/5 md:w-fit">
      <div className="flex w-full justify-between md:space-x-24">
        <p>Call out Fee</p>
        <p>{currencyFormat(worksheet.calloutFee)}</p>
      </div>

      <div className="flex w-full justify-between md:space-x-24">
        <p>Discount</p>
        <p>{currencyFormat(worksheet.discount)}</p>
      </div>

      <div className="flex w-full justify-between md:space-x-24 border-t border-black/10 pt-6 mt-3">
        <p>Total Price</p>
        <p>{currencyFormat(worksheet.price)}</p>
      </div>
    </div>
  );
}

export default WorksheetPricingInformation;
