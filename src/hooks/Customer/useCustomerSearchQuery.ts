import { useQuery } from '@tanstack/react-query';

function useCustomerSearchQuery() {
  return useQuery({
    queryKey: ['customer search'],
    queryFn: () => {},
  });
}

export default useCustomerSearchQuery;
