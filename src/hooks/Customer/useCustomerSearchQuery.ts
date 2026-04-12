import { useQuery } from '@tanstack/react-query';
import { type CustomerType } from '../../zod/Customer';

function useCustomerSearchQuery() {
  return useQuery<CustomerType[]>({
    queryKey: ['customer search'],
    queryFn: () => {},
    enabled: false,
  });
}

export default useCustomerSearchQuery;
