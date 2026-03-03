import { testWorksheets } from '../../utility/msw/worksheet-example';
import WorksheetListElement from './WorksheetListElement';

function WorksheetList() {
  const worksheetListElements = testWorksheets.map((w) => (
    <WorksheetListElement key={w.id} worksheet={w} />
  ));
  return (
    <div className="w-full flex flex-col space-y-10 shadow-md px-3 pt-3 pb-6 border-t border-black/5 md:items-center">
      <h2 className="border-b border-black/5 py-6">Worksheets</h2>
      <ul className="flex flex-col flex-1 space-y-10">{worksheetListElements}</ul>
    </div>
  );
}

export default WorksheetList;
