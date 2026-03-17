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
      <form className="w-full flex flex-col">{formChildren}</form>

      <div className="flex flex-col w-full space-y-16 md:flex-row-reverse md:justify-between md:space-y-0 md:fixed md:bottom-6 md:right-6">
        <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        <ButtonGrey buttonText="Reset" icon={RotateCcw} onClickHandler={props.resetProduct} />
      </div>
    </div>
  );
}

export default ProductEntryForm;
