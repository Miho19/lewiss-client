import type { ChangeEvent } from 'react';

type Props = {
  labelValue: string;
  selectName: string;
  options: readonly string[] | readonly number[];
  value: string | number;
  onSelectHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function FormSelectInput(props: Props) {
  const { labelValue, selectName, options, value, onSelectHandler } = props;

  const optionList = options.map((o) => <option key={o}>{o}</option>);

  return (
    <div className="w-full flex justify-between items-center">
      <label htmlFor={`${selectName}`}>{labelValue}</label>
      <div className="relative w-50">
        <select
          name={`${selectName}`}
          id={`${selectName}`}
          value={value}
          onChange={onSelectHandler}
          className="appearance-none w-full pl-3 pr-8 py-2 text-sm border border-gray-300 rounded shadow-sm focus:outline-none focus:border-black cursor-pointer"
        >
          {optionList}
        </select>

        <svg
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-black h-full w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default FormSelectInput;
