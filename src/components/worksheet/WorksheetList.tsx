import useCustomerWorksheetsQuery from '../../hooks/Worksheet/useCustomerWorksheetsQuery';

import type { CustomerType } from '../../zod/Customer';
import WorksheetListElement from './WorksheetListElement';

type Props = {
  customer: CustomerType;
};

function WorksheetList(props: Props) {
  const { customer } = props;
  const {
    data: worksheetList,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useCustomerWorksheetsQuery(customer);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {error.message}</div>;
  if (!isSuccess) return <div>failed to fetch customer worksheets</div>;

  const worksheetListElements = worksheetList.map((w) => (
    <WorksheetListElement key={w.id} worksheet={w} />
  ));

  return (
    <div className="w-full flex flex-col space-y-10 shadow-md px-3 pt-3 pb-6 border-t border-black/5 md:w-xl">
      <h2 className="border-b border-black/5 py-6">Worksheets</h2>
      <ul className="flex flex-col flex-1 space-y-10">{worksheetListElements}</ul>
    </div>
  );
}

export default WorksheetList;
