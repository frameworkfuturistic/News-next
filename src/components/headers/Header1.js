import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube, FiMenu } from 'react-icons/fi'
import logo1 from './logo.jpg'
import logo2 from './logo.png'
import Image from 'next/image'

const Header1 = () => {
    return (
        <>
            <div className='bg-indigo-900 font-semibold text-white my-3'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <div className='md:hidden flex items-center h-7'>
                            <FiMenu className='mr-2 text-lg cursor-pointer' />
                            <Image className='block bg-white px-1' height={40} src={logo2} />
                        </div>
                        <div className='hidden md:flex items-center px-5 space-x-5 h-10'>
                            <Image className='bg-white px-1' height={60} src={logo2} />
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className='flex gap-x-2 md:gap-x-6 '>
                            <FiTwitter className='text-sm md:text-xl' />
                            <FiFacebook className='text-sm md:text-xl' />
                            <FiInstagram className='text-sm md:text-xl' />
                            <FiYoutube className='text-sm md:text-xl' />

                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header1