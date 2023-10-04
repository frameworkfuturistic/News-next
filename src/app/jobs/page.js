"use client"
import Container from '@/components/Container'
import { useRouter } from 'next/navigation'
import React from 'react'

const JobList = () => {
    const router = useRouter()

    const jobList = [
        { id: 1, jobTitle: "This is Job 1", link: '/jobs/1011111', jobDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, animi accusantium iure repellat maxime nihil, doloremque distinctio a pariatur molestiae atque beatae numquam facilis esse vel id, assumenda fugit at!" },
        { id: 2, jobTitle: "This is Job 2", link: '/jobs/5254141', jobDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, animi accusantium iure repellat maxime nihil, doloremque distinctio a pariatur molestiae atque beatae numquam facilis esse vel id, assumenda fugit at!" },
    ]

    const handleClick = (link) => {
        console.log(link)
        router.push(link)
    }


    return (
        <>
            <Container>
                <div className='mb-20 mt-8'>
                    <div className='text-center text-2xl font-semibold uppercase'>List of job openings</div>

                    {
                        jobList?.map((item) => (
                            <div onClick={() => handleClick(item.link)} className='border p-2 m-5 rounded shadow-md hover:bg-gray-50 cursor-pointer'>
                                <p className='float-right'><button className=' bg-indigo-600 text-white px-3 py-1 rounded shadow text-sm'>Apply Now</button></p>
                                <p className='text-2xl font-semibold'>{item?.jobTitle}</p>
                                <p>{item?.jobDescription}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default JobList