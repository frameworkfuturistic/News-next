"use client"
import React, { useState } from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import DataTable1 from '@/components/datatable/DataTable1'
import { FiEdit3 } from 'react-icons/fi'
import { BsTrash2 } from 'react-icons/bs'

const AddNewNews = () => {

    const validationSchema = yup.object({
        searchBy: yup.string().required('Require'),
        searchText: yup.string().required('Require'),
    })
    const initialValues = {
        searchBy: '',
        searchText: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            // console.log("Value.....", values)
            searchData(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        // { name === 'propertyType' && ((value == '1') ? setpropertyTypeStatusToggle(true) : setpropertyTypeStatusToggle(false)) }
        // { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
    };


    //Category Data

    const COLUMNS = [

        {
            Header: 'Category  name',
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
            Header: "Description",
            accessor: "listName",
            Cell: ({ cell }) => (
                <div className=''>
                    {cell.row.values.listName ? cell.row.values.listName : <p className=' text-red-700 px-2'>NA</p>}
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
                <p className='text-xl'>Categories</p>
                <div className='grid grid-cols-12 m-5 gap-5'>

                    <div className='col-span-4'>
                        <form className='' onSubmit={formik.handleSubmit} onChange={handleChange}>
                            <div className="space-y-5">
                                <div className=''>
                                    <div className="">
                                        <label className="text-base font-medium text-gray-900">News Category</label>
                                    </div>
                                    <div className="mt-1 w-full">
                                        <input
                                            placeholder="Enter Category"
                                            className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text" {...formik.getFieldProps('applicantName')} />
                                        <p className='text-red-500 text-xs absolute'>{formik.touched.applicantName && formik.errors.applicantName ? formik.errors.applicantName : null}</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="">
                                        <label className="text-base font-medium text-gray-900">Description</label>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            placeholder="Enter Description"
                                            className=" w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            rows={3}
                                            {...formik.getFieldProps('permanentAddress')} />
                                        <p className='text-red-500 text-xs absolute'>{formik.touched.permanentAddress && formik.errors.permanentAddress ? formik.errors.permanentAddress : null}</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-start my-5'>
                                <button type='submit' className="rounded text-sm bg-blue-400 px-5 py-1 font-normal leading-7 text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50">
                                    Add New Category
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* View List of Category */}
                    <div className='col-span-8'>

                        <div className='border '>
                            <DataTable1
                                columns={COLUMNS} data={data} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddNewNews