import useCustomerSelect from '../hooks/useCustomerSelect';

function WorksheetPage() {
  const selectedCustomer = useCustomerSelect();

  return <div className="flex-1 p-6 bg-black text-white">Worksheet</div>;
}

export default WorksheetPage;
