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
    <div className="w-full flex flex-col space-y-6">
      <form className="w-full flex flex-col" id="productForm">
        {formChildren}
      </form>

      <div className="flex w-full flex-col space-y-10 md:flex-row-reverse md:space-y-0 md:justify-between md:absolute md:bottom-6">
        <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        <ButtonGrey buttonText="Reset" icon={RotateCcw} onClickHandler={props.resetProduct} />
      </div>
    </div>
  );
}

export default ProductEntryForm;
