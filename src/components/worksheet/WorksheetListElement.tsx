import type { WorksheetType } from '../../zod/Worksheet';

type Props = {
  worksheet: WorksheetType;
};

function WorksheetListElement(props: Props) {
  return (
    <li className="flex flex-1 w-full flex-col p-3 shadow-md sm:rounded-lg hover:bg-gray-100 transition-all duration-100 ease-in-out group cursor-pointer hover:-translate-y-3 border-t border-black/5"></li>
  );
}

export default WorksheetListElement;
