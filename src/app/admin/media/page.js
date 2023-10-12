"use client"
import React, { useState } from 'react'
import { GrList, GrGrid } from 'react-icons/gr'
import { TbGenderGenderfluid } from 'react-icons/tb'

const MediaIndex = () => {

    const [isViewGrid, setIsViewGrid] = useState(true)

    const imageList = [
        { id: 1, url: "https://img.freepik.com/premium-photo/beer-snacks-food-from-bar_830198-2733.jpg", date: "22/02/2023" },
        { id: 2, url: "https://img.freepik.com/free-vector/stylish-durga-puja-happy-navratri-traditional-festival-greeting-card-vector_1055-18752.jpg", date: "22/02/2023" },
        { id: 3, url: "https://img.freepik.com/free-vector/stylish-durga-puja-happy-navratri-traditional-festival-greeting-card-vector_1055-18752.jpg", date: "22/02/2023" },
        { id: 4, url: "https://img.freepik.com/premium-photo/beer-snacks-food-from-bar_830198-2733.jpg", date: "22/02/2023" },
        { id: 5, url: "https://img.freepik.com/free-vector/religious-happy-navratri-durga-puja-festival-greeting-card-vector_1055-18755.jpg", date: "22/02/2023" },
        { id: 6, url: "https://img.freepik.com/free-photo/still-life-cookies-ice-cream_23-2149637125.jpg", date: "22/02/2023" },
        { id: 7, url: "https://img.freepik.com/free-vector/math-background_23-2148143592.jpg", date: "22/02/2023" },
        { id: 8, url: "https://img.freepik.com/free-vector/school-backpack-with-colourful-stationery-flying-out_1284-59399.jpg", date: "22/02/2023" },
        { id: 9, url: "https://img.freepik.com/free-vector/stylish-durga-puja-happy-navratri-traditional-festival-greeting-card-vector_1055-18752.jpg", date: "22/02/2023" },
        { id: 10, url: "https://img.freepik.com/free-vector/religious-happy-navratri-durga-puja-festival-greeting-card-vector_1055-18755.jpg", date: "22/02/2023" },
    ]

    return (
        <div>
            {/* This is header */}
            <div className='flex justify-between py-2 px-4  items-center border border-gray-400 bg-white'>
                <div className='flex items-center space-x-4'>
                    <p onClick={() => setIsViewGrid(false)} className='cursor-pointer hover:bg-gray-100'><GrList size={20} /></p>
                    <p onClick={() => setIsViewGrid(true)} className='cursor-pointer hover:bg-gray-100'><GrGrid size={17} /></p>
                    <p>
                        <select name="mediaItems" id="" className='border rounded border-gray-500 py-1'>
                            <option value="">All Media Items</option>
                            <option value="">All Media Items</option>
                        </select>
                    </p>
                </div>
                <div className='flex items-center space-x-3'>
                    <p className='text-sm'>Search</p>
                    <input type="text" name="search" id="" className='border rounded border-gray-500 py-1' />
                </div>
            </div>

            {/* This is Image Area */}

            {/* Images in Grid */}
            {isViewGrid ?

                <div className='flex flex-wrap gap-4 py-3'>
                    {
                        imageList?.map((item, index) => (
                            <div key={index}>
                                <img className='h-36 w-36 border border-gray-400' src={item.url} alt={item.id} />
                            </div>
                        ))
                    }
                </div>
                :
                <div>
                    This is list
                </div>
            }
        </div>
    )
}

export default MediaIndex