import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { CustomerType } from '../../zod/Customer';
import { useState } from 'react';

const columnHelper = createColumnHelper<CustomerType>();

const columns = [
  columnHelper.accessor('mobile', {
    header: () => 'Mobile',
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor('familyName', {
    header: () => 'Family Name',
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor('email', {
    header: () => 'Email Address',
    cell: (info) => info.getValue(),
  }),
];

function CustomerSearchResultList() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  const table = useReactTable({
    data: customers,
    columns,
    defaultColumn: {
      minSize: 60,
      maxSize: 800,
    },
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full flex flex-col md:items-center space-y-6">
      <h2 className="border-b border-black/5 py-6">Showing Results</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className={` w-[${table.getCenterTotalSize()}px]`}>
          <thead className="text-xs bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="flex w-fit">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`w-[${header.getSize()}px] flex`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                    <div
                      style={{
                        transform: header.column.getIsResizing()
                          ? `translateX(1 * (${table.getState().columnSizingInfo.deltaOffset ?? 0})px)`
                          : ``,
                      }}
                      className="h-full cursor-col-resize border border-black w-5"
                      onDoubleClick={() => {
                        header.column.resetSize();
                      }}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                    ></div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerSearchResultList;
