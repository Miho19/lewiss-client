import { Save } from 'lucide-react';
import ButtonGrey from '../common/ButtonGrey';
import type { ProductEntryTypes } from '../../zod/BaseProduct';
import React from 'react';
import ProductFormFactory from './factory/ProductFormFactory';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductEntryForm(props: Props) {
  const formChildren = <ProductFormFactory {...props} />;

  return (
    <div className="w-full flex flex-col shadow-md px-3 py-6 border-t border-black/5 md:w-96">
      <form className="w-full flex flex-col space-y-10">
        {formChildren}
        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default ProductEntryForm;
