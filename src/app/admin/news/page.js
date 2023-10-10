"use client"
import DataTable1 from '@/components/datatable/DataTable1'
import React from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { BsTrash2 } from 'react-icons/bs'
import { FiEdit3 } from 'react-icons/fi'

const NewsList = () => {

    const COLUMNS = [

        {
            Header: 'News Title',
            accessor: ({ userName, phoneNo }) =>
                <div>
                    <p className='font-semibold capitalize'>{userName}</p>
                    <p className='text-xs text-gray-600 capitalize'>{phoneNo}</p>
                </div>,
            Cell: ({ value }) => (
                <div>
                    <p>{value}</p>
                </div>
            )
        },
        {
            Header: "Auther",
            accessor: "listName",
            Cell: ({ cell }) => (
                <div className=''>
                    {cell.row.values.listName ? cell.row.values.listName : <p className=' text-red-700 px-2'>NA</p>}
                </div>
            )
        },
        {
            Header: "Tags",
            accessor: "tag_id",
            Cell: ({ cell }) => (
                <div>
                    {cell?.row?.values?.tag_id?.split(',').map((tag, index) => (
                        <div key={index} className='inline-block mx-1'>
                            <div className=' text-xs font-bold border rounded-2xl px-2 py-1 bg-sky-100'>
                                {tag}
                            </div>
                        </div>
                    ))}
                </div>
            )
        },


        {
            Header: 'Status',
            accessor: 'category',
            Cell: ({ cell }) => (
                <div className='uppercase text-xs font-bold'>
                    {cell.row.values.category == 'subscribed' && <p className='bg-green-200 text-green-700 border w-fit px-2'>SUBSCRIBED</p>}
                    {cell.row.values.category == 'unsubscribed' && <p className='bg-yellow-200 text-yellow-700 border w-fit px-2'>UNSUBSCRIBED</p>}
                    {!cell.row.values.category && <p className='bg-red-200 text-red-700 border w-fit px-2'>NA</p>}
                </div>
            )
        },
        {
            Header: "createdAt",
            accessor: "created_at",
            Cell: ({ cell }) => (cell.row.values.created_at)
        },

        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <div className='flex gap-x-2'>
                    <a data-tooltip-id="my-tooltip" data-tooltip-content="Edit Contact"><FiEdit3 onClick={() => handleEdit(cell.row.values.id)} className='cursor-pointer' size={15} color='blue' /></a>
                    <a data-tooltip-id="my-tooltip" data-tooltip-content="Delete Contact"><BsTrash2 onClick={() => handleDelete(cell.row.values.id)} className='cursor-pointer' size={15} color='red' /></a>
                </div>
            )
        }
    ]

    const data = [
        { id: 1, userName: "सबूत सौंपने की बात आई तो पैंतरेबाजी पर उतरे ट्रूडो, बोले- कनाडा ने कई सप्ताह पहले भारत को दिए थे साक्ष्य", phoneNo: "", listName: "Raj Kumar", tag_id: "raj kumar", category: "Any", created_at: "22/02/2022" }
    ]

    return (
        <>
            <div className='m-5'>

                <div className=''>
                    <div className='flex gap-x-5'>
                        <p className='text-lg'>Posts</p>
                        <button className='border border-blue-600 text-blue-500 hover:bg-gray-100 text-sm rounded px-2'>Add New</button>
                    </div>

                    <div className='border '>
                        <DataTable1
                            columns={COLUMNS} data={data} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsList