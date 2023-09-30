"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
// import { ArrowRight } from 'lucide-react'\
import { BsArrowRightCircle } from 'react-icons/bs'

export function Login() {
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            router.push("/admin")
        }, 3000);
    }

    return (
        <section className=' h-max'>
            <div className="flex items-center justify-center pt-20">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-white border p-4 rounded-lg shadow-lg">

                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Sign in to your account
                    </h2>
                    <form className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                    ></input>
                                </div>
                            </div>
                            <div>

                                <button
                                    onClick={handleLogin}
                                    disabled={loading}
                                    type="button"
                                    className="inline-flex disabled:bg-indigo-900 w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-indigo-700"
                                >
                                    {
                                        loading ?
                                            <span className="loading loading-spinner"></span> :
                                            <>Login < BsArrowRightCircle className="ml-2" size={16} /></>
                                    }
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}


export default Login