"use client"
import ApiList from '@/components/Auth/ApiList'
// import AuthIndex from '@/components/Auth/AuthIndex'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNewNews = () => {
    const [categoryData, setCategoryData] = useState()
    const [value, setValue] = useState('');
    const [image, setImage] = useState("");
    const inputFile = useRef(null);
    const [selectedLayout, setSelectedLayout] = useState(1)

    const { api_viewAllCategory, api_addCategory } = ApiList()
    // const { header } = AuthIndex();


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

    const handlePublishButton = () => {
        console.log(value)
    }

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;

            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

            setImage(files[0]);
        }
    };

    console.log(image)


    return (
        <>

            <div className='grid grid-cols-12'>

                <div className='col-span-8'>
                    <div className='m-5 space-y-3 mx-3'>
                        <p className='font-semibold'>Add New Post</p>
                        <input
                            type="text"
                            className='px-2 border w-full h-8 border-gray-300'
                            placeholder='Enter Title Here'
                        />
                        <div className=''>
                            <ReactQuill theme="snow" value={value} onChange={setValue} className='bg-white w-full h-60' />
                        </div>

                        <div className='mt-10'>
                            <p className='font-semibold'>Select Layout</p>
                            <div className='flex justify-between'>
                                <Image onClick={() => setSelectedLayout(1)} className={`bg-white px-1 border ${selectedLayout == 1 ? 'border-sky-700 border-2' : 'border-sky-200'} cursor-pointer hover:brightness-125`} height={100} width={150} src={"/layouts/layout1.jpg"} />
                                <Image onClick={() => setSelectedLayout(2)} className={`bg-white px-1 border ${selectedLayout == 2 ? 'border-sky-700 border-2' : 'border-sky-200'} cursor-pointer hover:brightness-125`} height={100} width={150} src={"/layouts/layout2.jpg"} />
                                <Image onClick={() => setSelectedLayout(3)} className={`bg-white px-1 border ${selectedLayout == 3 ? 'border-sky-700 border-2' : 'border-sky-200'} cursor-pointer hover:brightness-125`} height={100} width={150} src={"/layouts/layout3.jpg"} />
                                <Image onClick={() => setSelectedLayout(4)} className={`bg-white px-1 border ${selectedLayout == 4 ? 'border-sky-700 border-2' : 'border-sky-200'} cursor-pointer hover:brightness-125`} height={100} width={150} src={"/layouts/layout4.jpg"} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cols Span 4 */}
                <div className='col-span-4 my-5 mx-2 space-y-3'>
                    {/* Publish */}
                    <div className='border bg-white'>
                        <p className='font-semibold px-2'>Publish</p>
                        <div className='px-4 py-2 border-t'>
                            <div className=''>
                                <div className='flex justify-between text-white text-sm'>
                                    <button className='border rounded text-sm bg-gray-500 px-2 py-1'>Save Draft</button>
                                    <button type='button' onClick={handlePublishButton} className='border rounded text-sm bg-blue-500 px-2 py-1'>Publish</button>
                                </div>
                                <div>
                                    <p>Status : Draft</p>
                                    <p>Validity : Public</p>
                                    <p>Publish: immediately</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Select Category */}
                    <div className='border bg-white'>
                        <p className='font-semibold px-2 '>Categories</p>
                        <div className='px-4 py-2 border-t'>
                            <div className=''>
                                {
                                    categoryData?.map((item, index) => (
                                        <p key={index}>
                                            <input type="checkbox" name={item?.category} id="" /> <span>{item?.category}</span>
                                        </p>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    {/* Tags */}
                    <div className='border bg-white'>
                        <p className='font-semibold px-2 '>Tags</p>
                        <div className='px-4 py-2 border-t space-y-5'>
                            <div className='flex gap-x-3'>
                                <input type="text" className='border rounded' />
                                <button className='bg-gray-300 border-gray-500 text-gray-800 text-sm py-1 px-2 shadow rounded'>Add</button>
                            </div>
                            <div className='flex flex-wrap gap-2 overscroll-none'>
                                {
                                    categoryData?.map((item, index) => (
                                        <p key={index}>
                                            <span className='border rounded bg-sky-200 px-1 text-xs flex items-center gap-x-1'>{item?.category} <AiFillCloseCircle color='red' /></span>
                                        </p>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    {/* Feature Image */}
                    <div className='border bg-white'>
                        <p className='font-semibold px-2 '>Feature Image</p>
                        <div className='px-4 py-2 border-t space-y-5'>
                            <p onClick={handleFileUpload} ></p>
                            <div>

                                <div>
                                    {image && <img src={image} alt="Preview" />}
                                </div>
                                <input
                                    style={{ display: "none" }}
                                    accept=".jpg,.jpeg, .png"
                                    ref={inputFile}
                                    onChange={handleFileUpload}
                                    type="file"
                                />
                                <div
                                    onClick={onButtonClick}
                                    className='underline text-indigo-500 hover:text-indigo-600 cursor-pointer text-sm'
                                >
                                    {image ? "Change Image" : "Set feature image"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddNewNews