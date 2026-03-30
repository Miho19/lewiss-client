import { Plus } from 'lucide-react';
import { testWorksheet1ProductList } from '../../utility/msw/product-example';
import type { WorksheetType } from '../../zod/Worksheet';
import ButtonGrey from '../common/ButtonGrey';
import ProductListElement from './ProductListElement';
import { currencyFormat } from '../../utility/CurrencyFormattor';

type Props = {
  worksheet: WorksheetType;
};

function ProductList(props: Props) {
  const { worksheet } = props;

  const productList = testWorksheet1ProductList;

  const blindTotal = productList.reduce((acc, prev) => {
    return acc + prev.price;
  }, 0.0);

  const productListElements = productList.map((p, index) => (
    <ProductListElement key={p.id} product={p} index={index} />
  ));

  return (
    <div className="w-full flex flex-col space-y-6 shadow-md px-6 py-6 border-t border-black/5 md:w-xl">
      <div className="flex w-full justify-between border-b border-black/5 pb-6">
        <h2 className="">Products</h2>
        <p>{currencyFormat(blindTotal)}</p>
      </div>

      <ul className="flex flex-col space-y-10 overflow-y-scroll p-3">{productListElements}</ul>

      <div className="w-full flex md:justify-end">
        <ButtonGrey buttonText="New" onClickHandler={() => {}} icon={Plus} />
      </div>
    </div>
  );
}

export default ProductList;
