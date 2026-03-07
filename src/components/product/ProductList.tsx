import { Plus } from 'lucide-react';
import { testWorksheet1ProductList } from '../../utility/msw/product-example';
import type { WorksheetType } from '../../zod/Worksheet';
import ButtonGrey from '../common/ButtonGrey';
import ProductListElement from './ProductListElement';

type Props = {
  worksheet: WorksheetType;
};

function ProductList(props: Props) {
  const { worksheet } = props;

  const productList = testWorksheet1ProductList;

  const productListElements = productList.map((p, index) => (
    <ProductListElement key={p.id} product={p} index={index} />
  ));

  return (
    <div className="w-full flex flex-col space-y-6 shadow-md px-3 py-6 border-t border-black/5 md:w-96">
      <h2 className="border-b border-black/5 py-6">Products</h2>
      <div className="w-full flex md:justify-end">
        <ButtonGrey buttonText="New" onClickHandler={() => {}} icon={Plus} />
      </div>

      <ul className="flex flex-col flex-1 space-y-10 ">{productListElements}</ul>
    </div>
  );
}

export default ProductList;
