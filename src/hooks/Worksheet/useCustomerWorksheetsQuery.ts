import { useQuery } from '@tanstack/react-query';
import { type CustomerType } from '../../zod/Customer';
import GETCustomerWorksheets from '../../http/GETCustomerWorksheets';
import type { WorksheetType } from '../../zod/Worksheet';

export function generateCustomerWorksheetsQueryKey(customer: CustomerType) {
  const { familyName, mobile, email } = customer;
  return `customer worksheets: ${familyName} mobile: ${mobile} email: ${email}`;
}

function useCustomerWorksheetsQuery(customer: CustomerType) {
  return useQuery<WorksheetType[]>({
    queryKey: [generateCustomerWorksheetsQueryKey(customer)],
    queryFn: () => GETCustomerWorksheets(customer),
  });
}

export default useCustomerWorksheetsQuery;
