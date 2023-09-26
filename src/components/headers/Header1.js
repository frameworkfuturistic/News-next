import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'

const Header1 = () => {
    return (
        <>
            <div className='bg-indigo-900 font-semibold text-white'>
                <Container>
                    <div className='flex justify-between items-center'>

                        <div className='flex items-center px-5 space-x-5 h-10'>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className='flex gap-x-6'>
                            <FiTwitter size={20}/>
                            <FiFacebook size={20}/>
                            <FiInstagram size={20}/>
                            <FiYoutube size={22}/>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header1