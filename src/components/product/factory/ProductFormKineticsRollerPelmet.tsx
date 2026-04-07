import type { ChangeEvent } from 'react';
import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';
import {
  kineticsRollerBottomRailColourEnum,
  kineticsRollerBottomRailTypeEnum,
  kineticsRollerBracketColourEnum,
  kineticsRollerBracketTypeEnum,
  kineticsRollerPelmetColourEnum,
  kineticsRollerPelmetTypeEnum,
  kineticsRollerRollTypeEnum,
  type KineticsRollerProductEntryType,
} from '../../../zod/KineticsRoller';

type Props = {
  product: ProductEntryTypes;

  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormKineticsRollerPelmet(props: Props) {
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
        labelValue="Pelmet Type"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerPelmetTypeEnum.options}
        selectName="pelmetType"
        value={(product as KineticsRollerProductEntryType).pelmetType}
      />

      <FormSelectInput
        labelValue="Pelmet Colour"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerPelmetColourEnum.options}
        selectName="pelmetColour"
        value={(product as KineticsRollerProductEntryType).pelmetColour}
      />
    </div>
  );
}

export default ProductFormKineticsRollerPelmet;
