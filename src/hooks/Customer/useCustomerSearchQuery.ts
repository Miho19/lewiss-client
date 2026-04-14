import { useQuery } from '@tanstack/react-query';
import { type CustomerType } from '../../zod/Customer';
import GETCustomerSearchQuery from '../../http/GETCustomerSearchQuery';
import type { CustomerSearchFormData } from '../../components/customer/search/CustomerSearch';

function useCustomerSearchQuery(formData: CustomerSearchFormData) {
  return useQuery<CustomerType[]>({
    queryKey: ['customer search'],
    queryFn: () => GETCustomerSearchQuery(formData),
    enabled: false,
    retry: 3,
  });
}

export default useCustomerSearchQuery;
