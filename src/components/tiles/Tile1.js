import React from 'react'

const Tile1 = ({ image, text, link }) => {
  const truncatedText = text.length > 60 ? `${text.slice(0, 70)}` : text;
    return (
        <>
            <div className='flex items-center m-2 cursor-pointer hover:bg-gray-100'>
                <img className='h-16 w-32 border' src={image} alt="Test Image" srcset="" />
                <p className='w-full text-lg text-gray-800 mx-4 font-semibold'>{truncatedText}</p>
            </div>

        </>
    )
}

export default Tile1