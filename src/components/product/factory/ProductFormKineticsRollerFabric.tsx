import type { ChangeEvent } from 'react';
import type { ProductEntryTypes } from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';
import {
  kineticsFabricTypeEnum,
  kineticsRollerFabricBOEnum,
  kineticsRollerFabricLFEnum,
  kineticsRollerFabricSSEnum,
  type KineticsFabricType,
  type KineticsRollerProductEntryType,
} from '../../../zod/KineticsRoller';

type Props = {
  product: ProductEntryTypes;

  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormKineticsRollerFabric(props: Props) {
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

  function getFabricOptionList(fabricOpacity: KineticsFabricType) {
    switch (fabricOpacity) {
      case 'LF':
        return kineticsRollerFabricLFEnum.options;
      case 'BO':
        return kineticsRollerFabricBOEnum.options;
      case 'SS':
        return kineticsRollerFabricSSEnum.options;
      default:
        return kineticsRollerFabricLFEnum.options;
    }
  }

  return (
    <div className="w-full flex flex-col space-y-16 shadow-md px-6 pt-6 pb-12 border-t border-black/5">
      <p className="text-xs italic text-gray-400 border-b border-black/5 mb-6 pb-3">
        {product.productType}
      </p>
      <FormSelectInput
        labelValue="Fabric Opacity"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsFabricTypeEnum.options}
        selectName="fabricType"
        value={(product as KineticsRollerProductEntryType).fabricType}
      />

      <FormSelectInput
        labelValue="Fabric"
        onSelectHandler={onChangeHandlerSelect}
        options={getFabricOptionList((product as KineticsRollerProductEntryType).fabricType)}
        selectName="fabric"
        value={(product as KineticsRollerProductEntryType).fabric}
      />
    </div>
  );
}

export default ProductFormKineticsRollerFabric;
