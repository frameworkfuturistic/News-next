import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Header1 = () => {
    return (
        <>
            <div className='bg-indigo-900 font-semibold text-white'>
                <Container>
                    <div className='flex items-center px-5 space-x-5 h-10'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header1