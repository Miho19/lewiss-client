import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import ProductFormCommonElements from './ProductFormCommonElements';
import ProductFormKineticsCellularOperation from './ProductFormKineticsCellularOperation';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormFactoryKineticsCellular(props: Props) {
  const { product } = props;

  if (typeof product === 'undefined') return <></>;

  return (
    <div className="w-full flex flex-col space-y-10 items-center">
      <ProductFormCommonElements {...props} />
      <ProductFormKineticsCellularOperation {...props} />
    </div>
  );
}

export default ProductFormFactoryKineticsCellular;
