import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import ProductFormCommonElements from './ProductFormCommonElements';
import ProductFormKineticsRollerOperation from './ProductFormKineticsRollerOperation';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormFactoryKineticsRoller(props: Props) {
  const { product } = props;

  if (typeof product === 'undefined') return <></>;

  return (
    <div className="w-full flex flex-col space-y-10 items-center">
      <ProductFormCommonElements {...props} />
      <ProductFormKineticsRollerOperation {...props} />
    </div>
  );
}

export default ProductFormFactoryKineticsRoller;
