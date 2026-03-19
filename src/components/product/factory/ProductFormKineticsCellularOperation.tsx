import type { ChangeEvent } from 'react';
import { ProductOperationSideEnum, type ProductEntryTypes } from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';
import {
  kineticsCellular10mmFabricEnum,
  kineticsCellular10mmOperationEnum,
  kineticsCellular20mmFabricEnum,
  kineticsCellular20mmOperationEnum,
  kineticsCellularCombSizeEnum,
  kineticsCellularHeadrailColourEnum,
  kineticsCellularSideChannelColourEnum,
  type KineticsCellularProductEntryType,
} from '../../../zod/KineticsCellular';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormKineticsCellularOperation(props: Props) {
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
    <div className="w-full flex flex-col space-y-16 shadow-md px-6 pt-6 pb-12 border-t border-black/5 md:w-xl">
      <p className="text-xs italic text-gray-400 border-b border-black/5 mb-6 pb-3">
        {product.productType}
      </p>

      <FormSelectInput
        labelValue="Comb Size"
        onSelectHandler={onChangeHandlerSelect}
        options={kineticsCellularCombSizeEnum.options}
        selectName="combSize"
        value={(product as KineticsCellularProductEntryType).combSize}
      />

      <FormSelectInput
        labelValue="Operation"
        onSelectHandler={onChangeHandlerSelect}
        options={
          (product as KineticsCellularProductEntryType).combSize === '10mm'
            ? kineticsCellular10mmOperationEnum.options
            : kineticsCellular20mmOperationEnum.options
        }
        selectName="operationType"
        value={(product as KineticsCellularProductEntryType).operationType}
      />

      <FormSelectInput
        labelValue="Operation Side"
        onSelectHandler={onChangeHandlerSelect}
        options={ProductOperationSideEnum.options}
        selectName="operationSide"
        value={product.operationSide}
      />

      <FormSelectInput
        labelValue="Fabric"
        onSelectHandler={onChangeHandlerSelect}
        options={
          (product as KineticsCellularProductEntryType).combSize === '10mm'
            ? kineticsCellular10mmFabricEnum.options
            : kineticsCellular20mmFabricEnum.options
        }
        selectName="fabric"
        value={(product as KineticsCellularProductEntryType).fabric}
      />

      <FormSelectInput
        labelValue="Headrail Colour"
        onSelectHandler={onChangeHandlerSelect}
        options={
          (product as KineticsCellularProductEntryType).combSize === '10mm'
            ? kineticsCellularHeadrailColourEnum.options
            : kineticsCellularHeadrailColourEnum.options
        }
        selectName="headrailColour"
        value={(product as KineticsCellularProductEntryType).headrailColour}
      />

      <FormSelectInput
        labelValue="Side Channel Colour"
        onSelectHandler={onChangeHandlerSelect}
        options={
          (product as KineticsCellularProductEntryType).combSize === '10mm'
            ? kineticsCellularSideChannelColourEnum.options
            : kineticsCellularSideChannelColourEnum.options
        }
        selectName="sideChannelColour"
        value={(product as KineticsCellularProductEntryType).sideChannelColour}
      />

      {/* <div className="w-full flex justify-between items-center">
        <label htmlFor="remoteNumber">Remote</label>
        <div className="flex justify-between w-50 pl-3 pr-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer">
          <input
            name="remoteNumber"
            id="remoteNumber"
            type="number"
            min={0}
            max={15}
            value={product.remoteNumber}
            onChange={onChangeHandlerInput}
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="remoteChannel">Channel</label>
        <div className="flex justify-between w-50 pl-3  pr-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer">
          <input
            name="remoteChannel"
            id="remoteChannel"
            type="number"
            min={0}
            max={15}
            value={product.remoteChannel}
            onChange={onChangeHandlerInput}
            className="w-full"
          />
        </div>
      </div> */}
    </div>
  );
}

export default ProductFormKineticsCellularOperation;
