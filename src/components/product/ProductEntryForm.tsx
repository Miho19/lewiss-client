import { RotateCcw, Save } from 'lucide-react';
import ButtonGrey from '../common/ButtonGrey';
import type { ProductEntryTypes } from '../../zod/BaseProduct';
import React from 'react';
import ProductFormFactory from './factory/ProductFormFactory';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
  resetProduct: () => void;
};

function ProductEntryForm(props: Props) {
  const formChildren = <ProductFormFactory {...props} />;

  return (
    <div className="w-full flex flex-col space-y-6 md:w-xl items-center">
      <form className="w-full flex flex-col items-center md:w-xl" id="productForm">
        {formChildren}
      </form>

      <div className="flex w-full flex-col space-y-10 lg:w-xl lg:flex-row-reverse lg:space-y-0 lg:justify-between">
        <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        <ButtonGrey buttonText="Reset" icon={RotateCcw} onClickHandler={props.resetProduct} />
      </div>
    </div>
  );
}

export default ProductEntryForm;
