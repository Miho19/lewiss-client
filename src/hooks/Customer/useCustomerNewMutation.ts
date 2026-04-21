import { useMutation } from '@tanstack/react-query';
import type { CustomerCreateType } from '../../zod/Customer';
import POSTCustomerNew from '../../http/POSTCustomerNew';

function useCustomerNewMutation() {
  return useMutation({
    mutationFn: (newFormData: CustomerCreateType) => POSTCustomerNew(newFormData),
  });
}

export default useCustomerNewMutation;
