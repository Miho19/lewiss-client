import type { ChangeEvent } from 'react';
import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';
import {
  kineticsRollerBracketColourEnum,
  kineticsRollerBracketTypeEnum,
  kineticsRollerRollTypeEnum,
  type KineticsRollerProductEntryType,
} from '../../../zod/KineticsRoller';

type Props = {
  product: ProductEntryTypes;

  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormKineticsRollerBracket(props: Props) {
  const { product, setProduct } = props;

  if (typeof product === 'undefined') return <></>;

  function onChangeHandlerInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setProduct((prev: ProductEntryTypes): ProductEntryTypes => {
      const newState = { ...prev, [name]: value };
      return newState;
    });
  }

  function onChangeHandlerSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div className="w-full flex flex-col space-y-16 shadow-md px-6 pt-6 pb-12 border-t border-black/5">
      <p className="text-xs italic text-gray-400 border-b border-black/5 mb-6 pb-3">
        {product.productType}
      </p>

      <FormSelectInput
        labelValue="Roll Type"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerRollTypeEnum.options}
        selectName="rollType"
        value={(product as KineticsRollerProductEntryType).rollType}
      />

      <FormSelectInput
        labelValue="Bracket Type"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerBracketTypeEnum.options}
        selectName="bracketType"
        value={(product as KineticsRollerProductEntryType).bracketType}
      />

      <FormSelectInput
        labelValue="Bracket Colour"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerBracketColourEnum.options}
        selectName="bracketColour"
        value={(product as KineticsRollerProductEntryType).bracketColour}
      />
    </div>
  );
}

export default ProductFormKineticsRollerBracket;
