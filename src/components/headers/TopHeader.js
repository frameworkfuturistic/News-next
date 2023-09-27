import React from 'react'
import Container from '../Container'

const TopHeader = () => {

    const data = [
        { id: 1, text: "Aaj Tak", link: "/#" },
        { id: 2, text: "বাংলা", link: "/#" },
        { id: 3, text: "Aaj Tak Campus", link: "/#" },
        { id: 4, text: "GNTTV", link: "/#" },
        { id: 5, text: "iChowk", link: "/#" },
        { id: 6, text: "Lallantop", link: "/#" },
        { id: 7, text: "India Today", link: "/#" },
        { id: 8, text: "Business Today", link: "/#" },
        { id: 9, text: "Web3Cafe", link: "/#" },
        { id: 10, text: "BT Bazaar", link: "/#" },
        { id: 11, text: "DailyO", link: "/#" },
        { id: 12, text: "Cosmopolitan", link: "/#" },
        { id: 13, text: "Harper's Bazaar", link: "/#" },
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
                            <button className='border text-white text-sm hover:bg-red-700 shadow bg-red-600 px-5 py-1'>Login</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TopHeader