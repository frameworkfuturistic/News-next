"use client"
import { Noto_Sans_Devanagari } from 'next/font/google';
import React from 'react'
import { useRouter } from "next/navigation";

const notoSans = Noto_Sans_Devanagari({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})

const Tile1 = ({ image, text, link }) => {
    const route = useRouter()

    console.log("link",link)

    const truncatedText = text.length > 60 ? `${text.slice(0, 70)}` : text;
    return (
        <>
            <div onClick={() => route.push(link)} className='flex items-start w-full m-2 cursor-pointer hover:bg-gray-100'>
                <img className='h-16 w-32 border' src={image} alt="Test Image" srcset="" />
                <p className={` ${notoSans.className} w-full text-md text-gray-800 mx-4 font-semibold`}>{truncatedText}</p>
            </div>

        </>
    )
}

export default Tile1