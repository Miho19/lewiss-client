import type { ChangeEvent } from 'react';
import {
  ProductFitTypeEnum,
  ProductFixingToEnum,
  type ProductEntryTypes,
} from '../../../zod/BaseProduct';

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

  const fitTypeOptions = ProductFitTypeEnum.options.map((fitType) => <option>{fitType}</option>);
  const fixingToOptions = ProductFixingToEnum.options.map((fixingTo) => (
    <option>{fixingTo}</option>
  ));

  return (
    <>
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
          className="p-2 pl-3 bg-gray-100 border border-white rounded-lg w-50"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="width">Width</label>
        <div className="flex w-50 items-center justify-between bg-gray-100 border border-white rounded-lg">
          <input
            name="width"
            id="width"
            type="number"
            min={0}
            max={3600}
            value={product.width}
            onChange={onChangeHandlerInput}
            className="p-2 pl-3 flex-1"
          />
          <span className="border-l border-gray-300 px-3">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="height">Height</label>
        <div className="flex w-50 items-center justify-between bg-gray-100 border border-white rounded-lg">
          <input
            name="height"
            id="height"
            type="number"
            min={0}
            max={3600}
            value={product.height}
            onChange={onChangeHandlerInput}
            className="p-2 pl-3 flex-1"
          />
          <span className="border-l border-gray-300 px-3">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="reveal">Reveal</label>
        <div className="flex w-50 items-center justify-between bg-gray-100 border border-white rounded-lg">
          <input
            name="reveal"
            id="reveal"
            type="number"
            min={0}
            max={3600}
            value={product.reveal}
            onChange={onChangeHandlerInput}
            className="p-2 pl-3 flex-1"
          />
          <span className="border-l border-gray-300 px-3">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="installHeight">Install Height</label>
        <div className="flex w-50 items-center justify-between bg-gray-100 border border-white rounded-lg">
          <input
            name="installHeight"
            id="installHeight"
            type="number"
            min={0}
            max={3600}
            value={product.installHeight}
            onChange={onChangeHandlerInput}
            className="p-2 pl-3 flex-1"
          />
          <span className="border-l border-gray-300 px-3">mm</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="fitType">Fit</label>
        <div className="relative w-50">
          <select className="appearance-none w-full pl-3 pr-8 py-2 text-sm border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <svg
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-black h-full w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ProductFormCommonElements;

// <select
//   name="fitType"
//   id="fitType"
//   value={product.fitType}
//   onChange={onChangeHandlerSelect}
//   className="p-3 bg-gray-100 border border-white rounded-lg ml-3 w-50"
// >
//   {fitTypeOptions}
// </select>;
