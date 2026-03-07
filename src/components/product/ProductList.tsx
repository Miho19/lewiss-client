import { testWorksheet1ProductList } from '../../utility/msw/product-example';
import type { WorksheetType } from '../../zod/Worksheet';
import ProductListElement from './ProductListElement';

type Props = {
  worksheet: WorksheetType;
};

function ProductList(props: Props) {
  const { worksheet } = props;

  const productList = testWorksheet1ProductList;

  const productListElements = productList.map((p) => <ProductListElement key={p.id} product={p} />);

  return (
    <div className="w-full flex flex-col space-y-3 shadow-md px-3 py-6 border-t border-black/5 md:w-fit">
      <ul className="flex flex-col flex-1 space-y-10 ">{productListElements}</ul>
    </div>
  );
}

export default ProductList;
