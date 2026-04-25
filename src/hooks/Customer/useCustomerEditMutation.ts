import { useMutation } from '@tanstack/react-query';
import type { CustomerType } from '../../zod/Customer';
import { useNavigate } from 'react-router';
import useCustomerSelect from './useCustomerSelect';
import PUTCustomerEdit from '../../http/PUTCustomerEdit';

function useCustomerEditMutation() {
  const navigator = useNavigate();
  const selectedCustomerContext = useCustomerSelect();

  return useMutation({
    mutationFn: (formData: CustomerType) => PUTCustomerEdit(formData),

    onSuccess: (data: CustomerType) => {
      selectedCustomerContext.selectCustomer(data);
      navigator('/worksheet');
    },
  });
}

export default useCustomerEditMutation;
