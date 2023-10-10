
"use client"
import React, { useState } from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { Search } from 'lucide-react'
import { MagnifyingGlass } from 'react-loader-spinner'
import { BiSearch } from 'react-icons/bi'
import Container from '@/components/Container'
import { AiOutlineDelete } from 'react-icons/ai'
const JobApplication = (props) => {
    const [qualificationData, setQualificationData] = useState([])
    const [searchingData, setSearchingData] = useState(false)
    
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
    
    const searchData = (values) => {
        setSearchingData(true)
        console.log("values", values)
        setTimeout(() => {
            setSearchingData(false)
            console.log("Search Done..")
        }, 3000);
    }

    const handleAddEducationQualification = () => {
        const data = {
            degree: formik.values.degree,
            collage: formik.values.collage,
            subject: formik.values.subject,
            percentage: formik.values.percentage,
        }
        setQualificationData([...qualificationData, data])
        // formik.setValues("degree", "")
        // formik.setValues("collage", "")
        // formik.setValues("subject", "")
        // formik.setValues("percentage", "")
    }

    const handleDeleteQualification = (id) => {
        const updatedQualificationData = qualificationData.filter((qualification, index) => index !== id);
        // Update the state with the new array
        setQualificationData(updatedQualificationData);
        console.log(id)
    }

    // console.log("data", qualificationData)

    return (
        <>
            <Container>

                <div className="">
                    <div className="border bg-white rounded p-3 pb-8">
                        <h2 className="text-3xl font-bold leading-tight text-gray-700">Apply For Job</h2>
                        <p className="mt-2 text-base text-gray-600">
                            You can apply this job here.
                        </p>
                        <form className='mt-8' onSubmit={formik.handleSubmit} onChange={handleChange}>
                            <div className="  md:px-5 ">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div className='w-full'>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">Apply For</label>
                                        <div className="mt-1">
                                            <select
                                                disabled={searchingData}
                                                className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text" {...formik.getFieldProps('searchBy')}>
                                                <option value="">Select</option>
                                                <option value="1">Reporter</option>
                                                <option value="1">Anchor</option>
                                                <option value="1">VT Editor</option>
                                                <option value="1">Graphics</option>
                                                <option value="1">Camera</option>
                                                <option value="1">Bulletin Producer</option>
                                                <option value="1">Programming</option>
                                                <option value="1">Marketing</option>
                                                <option value="1">PCR</option>
                                                <option value="1">MCR</option>
                                                <option value="1">It/Car Room</option>
                                                <option value="1">Input</option>
                                                <option value="1">Social Media Handling</option>
                                                <option value="1">Make Artist</option>
                                            </select>
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.searchBy && formik.errors.searchBy ? formik.errors.searchBy : null}</p>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <div className="">
                                            <label className="text-base font-medium text-gray-900">Applicant Name</label>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                disabled={searchingData}
                                                placeholder="Enter Search Text"
                                                className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text" {...formik.getFieldProps('applicantName')} />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.applicantName && formik.errors.applicantName ? formik.errors.applicantName : null}</p>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <div className="">
                                            <label className="text-base font-medium text-gray-900">Mobile No.</label>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                disabled={searchingData}
                                                placeholder="Enter Search Text"
                                                className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text" {...formik.getFieldProps('mobileNo')} />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</p>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <div className="">
                                            <label className="text-base font-medium text-gray-900">Email</label>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                disabled={searchingData}
                                                placeholder="Enter Email Address"
                                                className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                {...formik.getFieldProps('emailAddress')} />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.emailAddress && formik.errors.emailAddress ? formik.errors.emailAddress : null}</p>
                                        </div>
                                    </div>
                                    <div className='w-full col-span-2'>
                                        <div className="">
                                            <label className="text-base font-medium text-gray-900">Current Address</label>
                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                disabled={searchingData}
                                                placeholder="Enter Current Address"
                                                className=" w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                rows={3}
                                                {...formik.getFieldProps('currentAddress')} />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.currentAddress && formik.errors.currentAddress ? formik.errors.currentAddress : null}</p>
                                        </div>
                                    </div>
                                    <div className='col-span-2'>
                                        <div className="">
                                            <label className="text-base font-medium text-gray-900">Permanent Address</label>
                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                disabled={searchingData}
                                                placeholder="Enter Permanent Address"
                                                className=" w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                rows={3}
                                                {...formik.getFieldProps('permanentAddress')} />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.permanentAddress && formik.errors.permanentAddress ? formik.errors.permanentAddress : null}</p>
                                        </div>
                                    </div>
                                    <div className='col-span-2'>
                                        <div className="">
                                            <label className="text-base font-medium text-gray-900">Education Qualification</label>
                                        </div>
                                        <div className="mt-1 flex justify-center items-end gap-x-5 border rounded p-3">
                                            <div className='w-full'>
                                                <label className="text-sm font-medium text-gray-900">Degree</label>
                                                <select
                                                    disabled={searchingData}
                                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text" {...formik.getFieldProps('degree')}>
                                                    <option value="">Select</option>
                                                    <option value="10th">10th</option>
                                                    <option value="12th">12th</option>
                                                    <option value="Graduation">Graduation</option>
                                                    <option value="Masters">Masters</option>
                                                </select>
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.degree && formik.errors.degree ? formik.errors.degree : null}</p>
                                            </div>
                                            <div className='w-full'>
                                                <label className="text-sm font-medium text-gray-900">Collage/University</label>
                                                <input
                                                    disabled={searchingData}
                                                    placeholder="Collage/University"
                                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    {...formik.getFieldProps('collage')} />
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.collage && formik.errors.collage ? formik.errors.collage : null}</p>
                                            </div>
                                            <div className='w-full'>
                                                <label className="text-sm font-medium text-gray-900">Subject</label>
                                                <input
                                                    disabled={searchingData}
                                                    placeholder="Subject"
                                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    {...formik.getFieldProps('subject')} />
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.subject && formik.errors.subject ? formik.errors.subject : null}</p>
                                            </div>
                                            <div className='w-full'>
                                                <label className="text-sm font-medium text-gray-900">Percentage</label>
                                                <input
                                                    disabled={searchingData}
                                                    placeholder="Percentage"
                                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    {...formik.getFieldProps('percentage')} />
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.percentage && formik.errors.percentage ? formik.errors.percentage : null}</p>
                                            </div>
                                            <div>
                                                <button type='button' onClick={handleAddEducationQualification} className='bg-sky-500 text-white px-3 py-1 rounded shadow h-10'>Add</button>
                                            </div>
                                        </div>
                                        <div className='grid-cols-2'>
                                            <div className="grid grid-cols-6">
                                                <div className="bg-sky-50 px-2 py-1 border-b">
                                                    <p>Sl.</p>
                                                </div>
                                                <div className="bg-sky-50 px-2 py-1 border-b">
                                                    <p>Degree.</p>
                                                </div>
                                                <div className="bg-sky-50 px-2 py-1 border-b">
                                                    <p>Collage/University</p>
                                                </div>
                                                <div className="bg-sky-50 px-2 py-1 border-b">
                                                    <p>Subject</p>
                                                </div>
                                                <div className="bg-sky-50 px-2 py-1 border-b">
                                                    <p>Percentage</p>
                                                </div>
                                                <div className="bg-sky-50 px-2 py-1 border-b">
                                                    <p>Action</p>
                                                </div>
                                            </div>

                                            {qualificationData?.map((item, index) => (
                                                <div key={index} className="bg-sky-50 grid grid-cols-6 gap-2 px-2 py-1 border-b">
                                                    <p>{index + 1}</p>
                                                    <p>{item?.degree}</p>
                                                    <p>{item?.collage}</p>
                                                    <p>{item?.subject}</p>
                                                    <p>{item?.percentage}</p>
                                                    <p className="cursor-pointer hover:bg-gray-100 rounded-full text-red-600" onClick={() => handleDeleteQualification(index)}><AiOutlineDelete /></p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-5'>
                                <button type='submit' disabled={searchingData} className="flex justify-center items-center gap-x-2 rounded-md bg-green-600 px-5 py-1 text-base font-semibold leading-7 text-white hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50">
                                    Apply Now
                                </button>
                            </div>
                        </form>
                        <>
                            {searchingData &&
                                <>
                                    <div className='flex justify-center mt-2'>
                                        <MagnifyingGlass
                                            visible={true}
                                            height="70"
                                            width="70"
                                            ariaLabel="MagnifyingGlass-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="MagnifyingGlass-wrapper"
                                            glassColor='#c0efff'
                                            color='#6366F1'
                                        />
                                    </div>
                                    <p className='text-center'>saving...</p>
                                </>}

                        </>
                    </div>
                </div>
            </Container>

        </>
    )
}
export default JobApplication
