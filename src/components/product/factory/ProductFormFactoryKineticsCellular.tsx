import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import ProductFormCommonElements from './ProductFormCommonElements';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormFactoryKineticsCellular(props: Props) {
  const { product } = props;

  if (typeof product === 'undefined') return <></>;

  return (
    <>
      <ProductFormCommonElements {...props} />
    </>
  );
}

export default ProductFormFactoryKineticsCellular;
