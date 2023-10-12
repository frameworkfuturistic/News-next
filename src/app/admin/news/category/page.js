"use client"
import React, { useEffect, useState } from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import DataTable1 from '@/components/datatable/DataTable1'
import { FiEdit3 } from 'react-icons/fi'
import { BsTrash2 } from 'react-icons/bs'
import axios from 'axios'
import ApiList from '@/components/Auth/ApiList'
import AuthIndex from '@/components/Auth/AuthIndex'

const ManageNewsCategory = () => {
    const [categoryData, setCategoryData] = useState();
    const [addingCategory, setAddingCategory] = useState(false)

    const { api_viewAllCategory, api_addCategory } = ApiList()
    const { header } = AuthIndex();

    const validationSchema = yup.object({
        newsCategory: yup.string().required('Require'),
        newsDescription: yup.string().required('Require'),
    })
    const initialValues = {
        newsCategory: '',
        newsDescription: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            // console.log("Value.....", values)
            saveData(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    };


    // Add Category
    const saveData = (data) => {
        setAddingCategory(true)
        let payload = {
            category: data?.newsCategory,
            description: data?.newsDescription
        }
        console.log(header)

        axios.post(api_addCategory, payload, header)
            .then((res) => {
                setAddingCategory(false)
                if (res.data.status || res.data.authenticated) {
                    console.log("category added..", res)
                    fetchCategoryData() // Fetch Category data after adding
                    setCategoryData(res?.data?.data)
                } else {
                    console.log("Error while adding category")
                }
            })
            .catch((err) => {
                setAddingCategory(false)
                console.log("Error while adding category..", err)
            })
    }
    // Delete Category
    const handleDelete = (data) => {
        setAddingCategory(true)
        let payload = {
            category: data?.newsCategory,
            description: data?.newsDescription
        }
        console.log(header)

        axios.post(api_addCategory, payload, header)
            .then((res) => {
                setAddingCategory(false)
                if (res.data.status || res.data.authenticated) {
                    console.log("category added..", res)
                    fetchCategoryData() // Fetch Category data after adding
                    setCategoryData(res?.data?.data)
                } else {
                    console.log("Error while adding category")
                }
            })
            .catch((err) => {
                setAddingCategory(false)
                console.log("Error while adding category..", err)
            })
    }


    //Category column

    const COLUMNS = [
        {
            Header: "Category Name",
            accessor: "category",
            Cell: ({ cell }) => (cell.row.values.category)
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ cell }) => (
                <div className='uppercase text-xs font-bold'>
                    {cell.row.values.status == 'subscribed' && <p className='bg-green-200 text-green-700 border w-fit px-2'>SUBSCRIBED</p>}
                    {cell.row.values.status == 'unsubscribed' && <p className='bg-yellow-200 text-yellow-700 border w-fit px-2'>UNSUBSCRIBED</p>}
                    {!cell.row.values.status && <p className='bg-red-200 text-red-700 border w-fit px-2'>NA</p>}
                </div>
            )
        },
        {
            Header: "Created At",
            accessor: "created_date",
            Cell: ({ cell }) => (cell.row.values.created_date)
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


    //Fetch Category Data
    const fetchCategoryData = () => {

        axios.post(api_viewAllCategory)
            .then((res) => {
                if (res.data.status) {
                    console.log("data", res)
                    setCategoryData(res?.data?.data)
                } else {
                    console.log("Error while fetchong data")
                }
            })
            .catch((err) => {
                console.log("Error while fetching..", err)
            })
    }

    useEffect(() => {
        fetchCategoryData()
    }, [])


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
                                            type="text" {...formik.getFieldProps('newsCategory')} />
                                        <p className='text-red-500 text-xs absolute'>{formik.touched.newsCategory && formik.errors.newsCategory ? formik.errors.newsCategory : null}</p>
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
                                            {...formik.getFieldProps('newsDescription')} />
                                        <p className='text-red-500 text-xs absolute'>{formik.touched.newsDescription && formik.errors.newsDescription ? formik.errors.newsDescription : null}</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-start my-5'>
                                <button disabled={addingCategory} type='submit' className="rounded text-sm bg-blue-500 px-5 py-1 font-normal leading-7 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50">
                                    {addingCategory ? 'adding' : "Add New Category"}
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* View List of Category */}
                    <div className='col-span-8'>

                        <div className='border '>
                            {categoryData?.length > 0 && <DataTable1
                                columns={COLUMNS} data={categoryData} />}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ManageNewsCategory