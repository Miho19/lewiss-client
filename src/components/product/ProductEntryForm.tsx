import { Save } from 'lucide-react';
import ButtonGrey from '../common/ButtonGrey';
import type { ProductEntryTypes } from '../../zod/BaseProduct';
import { useState } from 'react';

function ProductEntryForm() {
  const [productCreateFormData, setProductCreateFormData] = useState<ProductEntryTypes>();
  return (
    <div className="w-full flex flex-col shadow-md px-3 py-6 border-t border-black/5 md:w-96">
      <form className="w-full flex flex-col space-y-10">
        <div className="flex w-full justify-end">
          <ButtonGrey buttonText="Save" icon={Save} onClickHandler={() => {}} />
        </div>
      </form>
    </div>
  );
}

export default ProductEntryForm;
