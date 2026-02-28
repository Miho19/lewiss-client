import type React from 'react';
import { CustomerSelectedContext } from './CustomerSelectedContext';
import { useCallback, useMemo, useState } from 'react';
import type { CustomerType } from '../zod/Customer';

function CustomerSelectedProvider({ children }: { children: React.ReactNode }) {
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerType>();

  const setCustomer = useCallback((customer: CustomerType) => {
    setSelectedCustomer(customer);
  }, []);

  const contextValue = useMemo(
    () => ({
      customer: selectedCustomer,
      selectCustomer: setCustomer,
    }),
    [selectedCustomer, setCustomer],
  );

  return (
    <CustomerSelectedContext.Provider value={contextValue}>
      {children}
    </CustomerSelectedContext.Provider>
  );
}

export default CustomerSelectedProvider;
