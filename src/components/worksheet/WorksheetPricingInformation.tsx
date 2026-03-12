import { currencyFormat } from '../../utility/CurrencyFormattor';
import { testWorksheet1ProductList } from '../../utility/msw/product-example';
import type { WorksheetType } from '../../zod/Worksheet';

type Props = {
  worksheet: WorksheetType;
};
function WorksheetPricingInformation(props: Props) {
  const { worksheet } = props;

  const productList = testWorksheet1ProductList;

  const blindTotal = productList.reduce((acc, prev) => {
    return acc + prev.price;
  }, 0.0);

  return (
    <div className="w-full flex flex-col space-y-3 shadow-md px-6 py-6 border-t border-black/5 md:w-lg">
      <p className="text-xs italic text-gray-400 border-b border-black/5 pb-3">{worksheet.id}</p>

      <div className="flex w-full justify-between md:space-x-24">
        <p>Blind Total</p>
        <p>{currencyFormat(blindTotal)}</p>
      </div>

      <div className="flex flex-col w-full justify-between md:space-x-24">
        <div className="flex w-full justify-between">
          <p>Additionals</p>
          <p className="text-right">{currencyFormat(worksheet.calloutFee)}</p>
        </div>
        <div className="flex flex-col w-full pl-3 text-sm text-black/50">
          <div className="flex w-full justify-between">
            <p>Remote x 3</p>
            <p>{currencyFormat(114)}</p>
          </div>

          <div className="flex w-full justify-between">
            <p>USB Charger Cable x 1</p>
            <p>{currencyFormat(114)}</p>
          </div>

          <div className="flex w-full justify-between">
            <p>Height Assessment</p>
            <p>{currencyFormat(150)}</p>
          </div>

          <div className="flex w-full justify-between">
            <p>SmartLink Hub</p>
            <p>{currencyFormat(152)}</p>
          </div>
        </div>
      </div>

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
