"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsArrowRightCircle } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import { useFormik, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import ApiList from '@/components/Auth/ApiList'
import AuthIndex from '@/components/Auth/AuthIndex'


const Login = (props) => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({})

    const router = useRouter()

    const { api_login } = ApiList();

    const { isLoggedIn, userIs } = AuthIndex();

    // useEffect(() => {
    //     if (isLoggedIn == true && userIs == "user") navigate("/")
    //     if (isLoggedIn == true && userIs == "admin") navigate("/admin")
    // }, [])

    // formik Start

    const validationSchema = yup.object({
        email: yup.string().required('Require'),
        password: yup.string().required('Require'),
    })
    const initialValues = {
        email: '',
        password: '',
    }
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values, resetForm) => {
            console.log("Value.....", values)
            handleLogin(values)
        },
        validationSchema
    })
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        // { name === 'propertyType' && ((value == '1') ? setpropertyTypeStatusToggle(true) : setpropertyTypeStatusToggle(false)) }
        // { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
    };

    // Formik END

    const handleLogin = (data) => {
        setMessage()
        setLoading(true)

        axios.post(api_login, { "email": data?.email, "password": data?.password })
            .then((res) => {
                if (res.data.status) {
                    setLoading(false)
                    setMessage({ status: true, message: res.data.message })
                    console.log("Login Successful", res)
                    window.localStorage.setItem("userData", JSON.stringify(res.data.data))
                    router.push("/admin/dashboard")
                } else {
                    setMessage({ status: false, message: res.data.message })
                    setLoading(false)
                    console.log("Invalid Credentials", res)
                }
            })
            .catch((error) => {
                console.log("Error while login", error)
                setLoading(false)
                setMessage({ status: false, message: error.response.data.data })
            })
    }

    return (
        <>
            <section className="h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Login
                            </h1>
                            <form onSubmit={formik.handleSubmit} onChange={handleChange} className="space-y-4 md:space-y-6">
                                <div className="space-y-5">
                                    <div>
                                        <label
                                            htmlFor=""
                                            className="text-base font-medium text-gray-900"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                placeholder="Email"
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email" {...formik.getFieldProps('email')} />
                                            <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Password
                                            </label>
                                            <span
                                                onClick={() => navigate('/forgot-password')}
                                                className="text-sm cursor-pointer font-medium text-indigo-600 hover:underline hover:text-indigo-700 focus:text-indigo-700"
                                            >
                                                Forgot password?
                                            </span>
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                placeholder="Password"
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password" {...formik.getFieldProps('password')} />
                                            <p className='text-red-500 text-xs'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
                                        </div>
                                    </div>
                                    {message?.message &&
                                        <div className={`py-1 text-center text-sm font-medium border rounded ${message?.status ? 'text-green-500 bg-green-100 border-green-400' : 'text-red-500 bg-red-100 border-red-400'} `}>
                                            {message && message?.message}
                                        </div>
                                    }
                                    <div>
                                        <button type="submit" disabled={loading} className="w-full flex justify-center items-center disabled:bg-gray-400 text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            {!loading && "Sign In"}
                                            <RotatingLines
                                                strokeColor="white"
                                                strokeWidth="6"
                                                animationDuration="0.75"
                                                width="20"
                                                visible={loading}
                                            />
                                        </button>
                                        {/* <p className="text-sm font-light text-gray-500 ">
                                            Don't have account ? <span onClick={() => navigate('/register')} className="font-medium text-gray-600 hover:underline cursor-pointer">Sign Up</span>
                                        </p> */}
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </ section>

        </>
    )
}
export default Login
