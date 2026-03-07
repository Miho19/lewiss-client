import { NavLink } from 'react-router';
import type { ProductEntryTypes } from '../../zod/BaseProduct';

type Props = {
  product: ProductEntryTypes;
};

function ProductListElement(props: Props) {
  const { product } = props;

  return (
    <li
      className={`flex flex-1 w-full p-3 shadow-md sm:rounded-lg hover:bg-gray-100 hover:-translate-y-3 cursor-pointer transition-all duration-100 ease-in-out group border-t border-black/5`}
    >
      <NavLink
        to={`/workshet/${product.worksheetId}/${product.id}`}
        className={`w-full flex flex-col`}
      ></NavLink>
    </li>
  );
}

export default ProductListElement;
