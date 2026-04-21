import { useMutation } from '@tanstack/react-query';
import type { CustomerCreateType, CustomerType } from '../../zod/Customer';
import POSTCustomerNew from '../../http/POSTCustomerNew';
import { useNavigate } from 'react-router';

function useCustomerNewMutation() {
  const navigator = useNavigate();

  return useMutation({
    mutationFn: (newFormData: CustomerCreateType) => POSTCustomerNew(newFormData),
    onSuccess: (data: CustomerType) => navigator('/customer'),
  });
}

export default useCustomerNewMutation;
