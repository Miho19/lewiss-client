import type { ChangeEvent } from 'react';
import {
  ProductFitTypeEnum,
  ProductFixingToEnum,
  type ProductEntryTypes,
} from '../../../zod/BaseProduct';
import FormSelectInput from '../../common/FormSelectInput';

type Props = {
  product: ProductEntryTypes;
  setProduct: React.Dispatch<React.SetStateAction<ProductEntryTypes>>;
};

function ProductFormCommonElements(props: Props) {
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
      <div className="w-full flex justify-between items-center">
        <label htmlFor="location">Location</label>
        <input
          name="location"
          id="location"
          type="text"
          minLength={2}
          maxLength={32}
          value={product.location}
          onChange={onChangeHandlerInput}
          className="w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="width">Width</label>
        <div className="flex justify-between w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer">
          <input
            name="width"
            id="width"
            type="number"
            min={0}
            max={3600}
            value={product.width}
            onChange={onChangeHandlerInput}
            className="w-full"
          />
          <span className="border-l border-gray-300 px-3 w-6">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="height">Height</label>
        <div className="flex justify-between w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer">
          <input
            name="height"
            id="height"
            type="number"
            min={0}
            max={3600}
            value={product.height}
            onChange={onChangeHandlerInput}
            className="w-full"
          />
          <span className="border-l border-gray-300 px-3 w-6">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="reveal">Reveal</label>
        <div className="flex justify-between w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer">
          <input
            name="reveal"
            id="reveal"
            type="number"
            min={0}
            max={3600}
            value={product.reveal}
            onChange={onChangeHandlerInput}
            className="w-full"
          />
          <span className="border-l border-gray-300 px-3 w-6">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="installHeight">Install Height</label>
        <div className="flex justify-between w-50 pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 cursor-pointer">
          <input
            name="installHeight"
            id="installHeight"
            type="number"
            min={0}
            max={3600}
            value={product.installHeight}
            onChange={onChangeHandlerInput}
            className="w-full"
          />
          <span className="border-l border-gray-300 px-3 w-6">mm</span>
        </div>
      </div>

      <FormSelectInput
        labelValue="Fit"
        onSelectHandler={onChangeHandlerSelect}
        options={ProductFitTypeEnum.options}
        selectName="fitType"
        value={product.fitType}
      />

      <FormSelectInput
        labelValue="Fixing To"
        onSelectHandler={onChangeHandlerSelect}
        options={ProductFixingToEnum.options}
        selectName="fixingTo"
        value={product.fixingTo}
      />
    </div>
  );
}

export default ProductFormCommonElements;
