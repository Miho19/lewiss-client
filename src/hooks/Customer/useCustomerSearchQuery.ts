import { useQuery } from '@tanstack/react-query';
import { type CustomerType } from '../../zod/Customer';
import GETCustomerSearchQuery from '../../http/GETCustomerSearchQuery';
import type { CustomerSearchFormData } from '../../components/customer/search/CustomerSearch';

function useCustomerSearchQuery(formData: CustomerSearchFormData) {
  const { familyName, mobile, email } = formData;

  return useQuery<CustomerType[]>({
    queryKey: [`customer search name: ${familyName} mobile: ${mobile} email: ${email}`],
    queryFn: () => GETCustomerSearchQuery(formData),
    enabled: false,
    retry: 3,
  });
}

export default useCustomerSearchQuery;
