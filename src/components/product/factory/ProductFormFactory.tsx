import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import ProductFormFactoryKineticsCellular from './ProductFormFactoryKineticsCellular';
import ProductFormFactoryKineticsRoller from './ProductFormFactoryKineticsRoller';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormFactory(props: Props) {
  const { product } = props;

  // initial load is always kinetics cellular...
  switch (product.productType) {
    case 'Kinetics Cellular':
      return <ProductFormFactoryKineticsCellular {...props} />;
    case 'Kinetics Roller':
      return <ProductFormFactoryKineticsRoller {...props} />;
    default:
      return <></>;
  }
}

export default ProductFormFactory;
