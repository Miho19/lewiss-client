import { useMutation } from '@tanstack/react-query';
import type { CustomerCreateType, CustomerType } from '../../zod/Customer';
import POSTCustomerNew from '../../http/POSTCustomerNew';
import { useNavigate } from 'react-router';
import useCustomerSelect from './useCustomerSelect';

function useCustomerNewMutation() {
  const navigator = useNavigate();
  const selectedCustomerContext = useCustomerSelect();

  return useMutation({
    mutationFn: (newFormData: CustomerCreateType) => POSTCustomerNew(newFormData),

    onSuccess: (data: CustomerType) => {
      selectedCustomerContext.selectCustomer(data);
      navigator('/worksheet');
    },
  });
}

export default useCustomerNewMutation;
