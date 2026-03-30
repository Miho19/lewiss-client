import type { ChangeEvent } from 'react';
import { ProductOperationSideEnum, type ProductEntryTypes } from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';
import {
  kineticsRollerChainColourEnum,
  kineticsRollerChainLengthOptions,
  kineticsRollerOperationEnum,
  type KineticsRollerProductEntryType,
} from '../../../zod/KineticsRoller';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormKineticsRollerOperation(props: Props) {
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
        labelValue="Operation"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsRollerOperationEnum.options}
        selectName="operationType"
        value={(product as KineticsRollerProductEntryType).operationType}
      />

      <FormSelectInput
        labelValue="Operation Side"
        onSelectHandler={onChangeHandlerSelect}
        options={ProductOperationSideEnum.options}
        selectName="operationSide"
        value={product.operationSide}
      />

      {product.operationType === 'Chain' && (
        <FormSelectInput
          labelValue="Chain Colour"
          onSelectHandler={onChangeHandlerSelect}
          options={kineticsRollerChainColourEnum.options}
          selectName="chainColour"
          value={(product as KineticsRollerProductEntryType).chainColour}
        />
      )}

      {product.operationType === 'Chain' && (
        <FormSelectInput
          labelValue="Chain Length"
          onSelectHandler={onChangeHandlerSelect}
          options={kineticsRollerChainLengthOptions}
          selectName="chainLength"
          value={(product as KineticsRollerProductEntryType).chainLength}
        />
      )}
    </div>
  );
}

export default ProductFormKineticsRollerOperation;
