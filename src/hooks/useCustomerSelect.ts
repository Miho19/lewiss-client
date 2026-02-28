import { useContext } from 'react';
import { CustomerSelectedContext } from '../context/CustomerSelectedContext';

function useCustomerSelect() {
  const context = useContext(CustomerSelectedContext);
  if (typeof context === 'undefined')
    throw new Error('Customer Select used outside of CustomerSelectedProvider');
  return context;
}

export default useCustomerSelect;
