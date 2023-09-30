"use client"
import React from 'react'
import Container from '../Container'
import { useRouter } from 'next/navigation'

const TopHeader = () => {

    const router = useRouter()

    const data = [
        { id: 1, text: "About Us", link: "/#" },
        { id: 2, text: "Contact Us", link: "/#" },
        { id: 3, text: "Privacy Policy", link: "/#" },
        { id: 4, text: "Live Channel", link: "/#" },

    ]

    return (
        <>
            <div className=' text-gray-500 border-b mb-1'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <div className='flex text-xs my-3 mx-3 font-medium space-x-5 whitespace-nowrap'>
                            {
                                data?.map((item) => {
                                    return <p key={item.id} className='cursor-pointer hover:text-black'>{item.text}</p>
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => router.push("/login")} className='border text-white text-sm hover:bg-red-700 shadow bg-red-600 px-5 py-1'>Login</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TopHeader