import { NavLink } from 'react-router';
import type { ProductEntryTypes } from '../../zod/BaseProduct';
import { currencyFormat } from '../../utility/CurrencyFormattor';

type Props = {
  product: ProductEntryTypes;
  index: number;
};

function ProductListElement(props: Props) {
  const { product, index } = props;

  return (
    <li
      className={`flex flex-1 w-full p-3 shadow-md sm:rounded-lg hover:bg-gray-100 hover:-translate-y-3 cursor-pointer transition-all duration-100 ease-in-out group border-t border-black/5`}
    >
      <NavLink
        to={`/workshet/${product.worksheetId}/${product.id}`}
        className={`w-full flex flex-col space-y-3`}
      >
        <div className="w-full flex justify-between border-b border-black/5 pb-3">
          <p className="text-xs text-gray-400">{index + 1}</p>
          <p className="text-xs text-gray-400 text-right">{product.productType}</p>
        </div>

        <div className="w-full flex flex-col space-y-3">
          <div className="flex w-full justify-between">
            <p className="">{product.location}</p>
            <p className="text-sm">
              {product.width}x{product.height}
            </p>
          </div>
          <div className="w-full flex flex-col">
            <p className="text-sm">{product.fabric}</p>
            <p className="text-sm">{product.operationType}</p>
          </div>
        </div>

        <div className="flex w-full justify-between border-t border-black/5 mt-2 pt-3">
          <p className="text-xs italic text-gray-400">{product.id}</p>
          <p>{currencyFormat(product.price)}</p>
        </div>
      </NavLink>
    </li>
  );
}

export default ProductListElement;
