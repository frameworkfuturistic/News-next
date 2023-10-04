// import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

export function Footer() {
    return (
        <footer className="w-full bg-black text-white py-5">
            <div className="mx-auto flex max-w-7xl flex-col items-start  md:flex-row">
                <div className="w-full px-4 md:w-1/2 lg:px-0">
                <Image className='bg-white px-1' height={70} width={100} src={"/logo.png"} />
                    <p>
                        आपका अपने चहेते चैनल "नक्षत्र न्यूज़ हिंदी" में तहे दिल से स्वागत है। ये चैनल आप लोगों के बीच रहना पसंद करता है। राजनीति सहित देश के बड़े मुद्दों पर सवाल करना ही हमारी पहचान है। जन-जन तक की आवाज को हमने देश के कोने-कोने में पहुंचाया है इसी तरीके से आप "नक्षत्र न्यूज़ हिंदी" को प्यार देते रहिए। हम भी बेबाक, बेखौफ बोलते रहेंगे।
                    </p>
                    <p>Email: naxatranewshindi@gmail.com</p>
                    <p>Phone: +91-8101024838</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="mb-8 lg:mb-0">
                            <p className="mb-6 text-lg font-semibold  ">Company</p>
                            <ul className="flex flex-col space-y-4 text-[14px] font-medium ">
                                <li>About us</li>
                                <li>Company History</li>
                                <li>Our Team</li>
                                <li>Our Vision</li>
                                <li>Press Release</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="my-4" />
            <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
                <div className="inline-flex items-center">
                    <span className="ml-4 text-lg font-bold capitalize">naxatra news hindi</span>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm font-medium">© 2023 www.NaxatraNewsHindi.com All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
