import { useMemo } from 'react';
import { useTable, useBlockLayout } from 'react-table';

import styles from './Table.module.scss';

const Table = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Product',
        accessor: 'product',
        width: 200,
      },
      {
        Header: 'Quantity',
        accessor: 'qty',
        width: 200,
      },
      {
        Header: 'Price (£)',
        accessor: 'price',
        width: 200,
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        product: 'Table',
        qty: 20,
        price: 100,
      },
      {
        product: 'Chair',
        qty: 100,
        price: 30,
      },
      {
        product: 'Wardrobe',
        qty: 50,
        price: 80,
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
    columns,
    data,
    },
    useBlockLayout
  );

  return (
    <div className={styles.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
