import type { WorksheetType } from '../../zod/Worksheet';
import { v4 as uuidv4 } from 'uuid';
import WorksheetListElement from './WorksheetListElement';

const testCustomerId = uuidv4();

const testWorksheets: WorksheetType[] = [
  {
    id: uuidv4(),
    customerId: testCustomerId,
    price: 5000.0,
    discount: 120.0,
    newBuild: false,
    calloutFee: 95,
  },
  {
    id: uuidv4(),
    customerId: testCustomerId,
    price: 1200.4,
    discount: 350.0,
    newBuild: true,
    calloutFee: 95,
  },
  {
    id: uuidv4(),
    customerId: testCustomerId,
    price: 640.66,
    discount: 0,
    newBuild: false,
    calloutFee: 155,
  },
];

function WorksheetList() {
  const worksheetListElements = testWorksheets.map((w) => (
    <WorksheetListElement key={w.id} worksheet={w} />
  ));
  return (
    <div className="w-full flex flex-col space-y-10">
      <h2 className="border-b border-black/5 py-6">Worksheets</h2>
      <ul className="flex flex-col flex-1 space-y-10">{worksheetListElements}</ul>
    </div>
  );
}

export default WorksheetList;
