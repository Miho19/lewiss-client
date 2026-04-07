import type { ChangeEvent } from 'react';
import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';
import {
  kineticsRollerBottomRailColourEnum,
  kineticsRollerBottomRailTypeEnum,
  kineticsRollerBracketColourEnum,
  kineticsRollerBracketTypeEnum,
  kineticsRollerRollTypeEnum,
  type KineticsRollerProductEntryType,
} from '../../../zod/KineticsRoller';

type Props = {
  product: ProductEntryTypes;

  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormKineticsRollerBottomRail(props: Props) {
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
        labelValue="Bottom Rail Type"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerBottomRailTypeEnum.options}
        selectName="bottomRail"
        value={(product as KineticsRollerProductEntryType).bottomRailType}
      />

      <FormSelectInput
        labelValue="Bottom Rail Colour"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerBottomRailColourEnum.options}
        selectName="bottomRailColour"
        value={(product as KineticsRollerProductEntryType).bottomRailColour}
      />
    </div>
  );
}

export default ProductFormKineticsRollerBottomRail;
