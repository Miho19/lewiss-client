import type { WorksheetType } from '../../zod/Worksheet';

type Props = {
  worksheet: WorksheetType;
};

function WorksheetListElement(props: Props) {
  const { worksheet } = props;

  const priceFormatted = worksheet.price.toLocaleString('en-us', {
    style: 'currency',
    currency: 'NZD',
  });

  const discountFormatted = worksheet.discount.toLocaleString('en-us', {
    style: 'currency',
    currency: 'NZD',
  });

  return (
    <li
      className="flex flex-1 w-full flex-col p-3 shadow-md sm:rounded-lg 
    hover:bg-gray-100 transition-all duration-100 ease-in-out group cursor-pointer hover:-translate-y-3 border-t border-black/5"
    >
      <p>Price: {}</p>
      <p className="text-xs italic text-gray-400 border-t border-black/5 mt-2">{worksheet.id}</p>
    </li>
  );
}

export default WorksheetListElement;
