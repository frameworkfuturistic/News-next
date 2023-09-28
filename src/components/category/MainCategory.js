"use client"
import React from 'react'
import Container from '../Container'
import Tile1 from '../tiles/Tile1'
import Title from '../Titile'
import LatestNewsWithImage from '../tiles/LatestNewsWithImage'
import Image from 'next/image'
import Ads1 from '../ads/Ads1'
import Link from 'next/link'


const MainCategory = ({ name, data }) => {


    return (
        <>
            <Container>

                <div className='grid grid-cols-1 md:grid-cols-12'>
                    <div className='col-span-9'>
                        <Title title={name} />
                        <div className='space-y-4'>

                            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                                <Link href={data[0]?.link} className='col-span-1 md:col-span-8 relative shadow border border-gray-200 hover:opacity-80 cursor-pointer'>
                                    <Image placeholder='empty' src={data[0]?.image} width={2000} height={1000} />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center p-4">
                                        <p className="font-semibold text-xs md:text-2xl">{data[0]?.text}</p>
                                    </div>
                                </Link>
                                <Link href={data[1]?.link} className='col-span-1 md:col-span-4 shadow border border-gray-200 hover:opacity-80 cursor-pointer'>
                                    <Image placeholder='empty' src={data[1]?.image} width={2000} height={2000} />
                                    <p className='font-semibold p-2'>{data[1]?.text}</p>
                                </Link>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                                {data?.filter((_, index) => index >= 2)?.map((item, index) => (
                                    <Link href={item?.link} key={index} className='shadow border border-gray-200 hover:opacity-80 cursor-pointer'>
                                        <Image placeholder='empty' src={item.image} width={2000} height={1000} />
                                        <div className='h-20 bg-white '>
                                            <p className='font-semibold p-2'>{item.text}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <Title title={"लेटेस्ट"} />
                        <LatestNewsWithImage />
                        <Ads1 />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default MainCategory