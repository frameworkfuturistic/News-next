import React from 'react'

function SearchComponent({ searchText, filter, setFilter }) {
    return (
        <>
            <div className='my-2 flex'>
                <input placeholder='Search..' className='w-full border text-sm border-gray-500 px-2 py-3 outline-gray-400 hover:ring-1 bg-gray-50 rounded-sm md:h-7 h-7 sm:w-fit' type="text" value={filter || ''} onChange={e => setFilter(e.target.value)} />
            </div>
        </>
    )
}

export default SearchComponent