
import React, { useEffect, useState } from 'react'
import { useTable, usePagination, useRowSelect, useSortBy, useGlobalFilter, } from 'react-table'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import SearchComponent from './SearchComponent';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { CSVLink } from "react-csv";
import { BiSortAlt2 } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
// import { UserPlus } from 'lucide-react';


function DataTable1({ searchText, fun, columns, data, addBtn, ...rest }) {
  const [bounce, setbounce] = useState('hidden')

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    setPageSize,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    }, useGlobalFilter, useSortBy, usePagination)
  // Render the UI for your table

  return (
    <>
      <div className="">
        <div className='flex justify-between items-center border-b md:mr-4'>
          <div className='mr-1'>
            {addBtn}
            {/* <button className='bg-gray-700 rounded py-1 text-sm px-3 text-white hover:shadow-2xl hover:bg-gray-800 text-center relative flex gap-2'>Add Contact <UserPlus className='mt-0.5' size={15} /> </button> */}
          </div>
          <div className='flex flex-row-reverse items-center'>
            <div className='ml-2'><button className='bg-gray-700 rounded text-sm md:text-base py-1 px-2 text-white hover:shadow-2xl hover:bg-gray-800 text-center relative' onMouseEnter={() => setbounce('')} onMouseLeave={() => setbounce('hidden')}><CSVLink data={data}> Export</CSVLink><div className={bounce + ' absolute h-full top-3 text-sm left-0 text-center animate-bounce'}><AiOutlineArrowDown /></div></button></div>
            <div className=''><SearchComponent searchText={searchText} filter={globalFilter} setFilter={setGlobalFilter} /></div>
          </div>

        </div>
        <div className='overflow-auto md:m-4'>

          <table {...getTableProps()} className="min-w-full md:leading-normal leading-tight ">
            <thead className='font-bold text-center md:text-sm text-xs '>
              {headerGroups.map(headerGroup => (
                <tr className='' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      className="px-2 py-3 border-b-2 border-gray-200 text-gray-800 text-xs uppercase text-left"
                      {...column.getHeaderProps(column.getSortByToggleProps())}>
                      <div className='flex'>
                        <span> {column.render('Header')}</span>
                        <span className='mt-0.5 mx-2'> {!column.isSorted && <BiSortAlt2 size={14} />} </span>
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr className='' {...row.getRowProps()} >
                    {row.cells.map(cell => {
                      return <td
                        style={{ backgroundColor: !row.isSelected ? "" : "#b6fcc0", color: !row.isSelected ? "" : "#000000" }}
                        className="px-2 py-2 bg-white text-left leading-4 text-sm text-gray-700 tracking-wider border-b-2"
                        {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}

      <div className="pagination grid grid-cols-12 mt-5 px-5">
        <div className='col-span-4'>
          <button className='hover:bg-gray-300 cursor-pointer' onClick={() => gotoPage(0)} disabled={!canPreviousPage}> <MdFirstPage /> </button>{' '}  {/* {'First PAge'} */}
          <button className='hover:bg-gray-300 cursor-pointer' onClick={() => previousPage()} disabled={!canPreviousPage}><MdNavigateBefore /> </button>{' '}
          <button className='hover:bg-gray-300 cursor-pointer' onClick={() => nextPage()} disabled={!canNextPage}><MdNavigateNext /></button>{' '} {/* {'Next Page'} */}
          <button className='hover:bg-gray-300 cursor-pointer' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><MdLastPage /></button>{' '} {/* LAst Page*/}
        </div>
        <div className='col-span-4 justify-self-center'>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </div>
        <div className='col-span-4 justify-self-end'>

          <select className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[5, 10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>

        </div>

      </div>
    </>
  )
}


export default DataTable1
