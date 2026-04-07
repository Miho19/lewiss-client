import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import ProductFormCommonElements from './ProductFormCommonElements';
import ProductFormKineticsRollerBottomRail from './ProductFormKineticsRollerBottomRail';
import ProductFormKineticsRollerBracket from './ProductFormKineticsRollerBracket';
import ProductFormKineticsRollerFabric from './ProductFormKineticsRollerFabric';
import ProductFormKineticsRollerOperation from './ProductFormKineticsRollerOperation';
import ProductFormKineticsRollerPelmet from './ProductFormKineticsRollerPelmet';

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
      <ProductFormKineticsRollerFabric {...props} />
      <ProductFormKineticsRollerBracket {...props} />
      <ProductFormKineticsRollerBottomRail {...props} />
      <ProductFormKineticsRollerPelmet {...props} />
    </div>
  );
}

export default ProductFormFactoryKineticsRoller;
