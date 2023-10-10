"use client"
import React, { useContext, useState } from 'react'
import { AiFillContacts, AiOutlineRight } from 'react-icons/ai'
import Link from 'next/link'
import { TbBellRinging, TbGauge, TbLayoutList, TbMailQuestion, TbUserPlus } from 'react-icons/tb'
import { BiBrush, BiChevronLeftCircle } from 'react-icons/bi'
import { BsNewspaper } from 'react-icons/bs'

export function AdminSidebar() {
    const [showSubMenu, setShowSubMenu] = useState(false)

    // const { mobileSidebarOpen, setMobileSidebarOpen } = useContext(MyContext);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(true)


    const menu = [
        {
            id: 1, title: "Dashboard", link: "/admin/dashboard", icon: TbGauge, subMenu: []
        },
        {
            id: 2, title: "News Post", link: "/admin/news", icon: TbMailQuestion, subMenu: [
                { id: 1, title: "Show List", link: "/admin/news", icon: TbLayoutList },
                { id: 2, title: "Add New", link: "/admin/news/add", icon: TbUserPlus },
                { id: 2, title: "Category", link: "/admin/news/category", icon: TbUserPlus },
            ]
        },
        {
            id: 3, title: "Log Out", link: "/login", icon: AiFillContacts, subMenu: []
        },

    ]

    return (
        <>

            <div className={`z-50 ${mobileSidebarOpen ? 'block' : 'hidden'} md:block absolute md:relative `}>
                <div className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-indigo-900 px-5">
                    <div>

                        <p onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className='absolute -right-6 cursor-pointer md:hidden'><BiChevronLeftCircle color='black' /></p>
                        <p className='text-white font-semibold text-lg mt-5 border border-gray-500 p-2 text-center'>Admin</p>
                    </div>


                    <div className="mt-4 flex flex-col justify-between">
                        <nav className="-mx-3 space-y-2 ">
                            <div className="space-y-2 ">
                                {
                                    menu?.map((item) => (
                                        <>
                                            <Link key={item.id} onClick={() => { setMobileSidebarOpen(!mobileSidebarOpen), setShowSubMenu(item.id) }} href={item.link}

                                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700" >
                                                <item.icon className="h-5 w-5" aria-hidden="true" />
                                                <span className="mx-2 text-sm font-medium">{item.title}</span>
                                            </Link>
                                            <div className='ml-5'>
                                                {
                                                    showSubMenu == item.id && item?.subMenu?.map((subItem, index) => (
                                                        <Link key={index} href={subItem.link}
                                                            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                                                            className="flex transform items-center rounded-lg px-3 py-1 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700" >
                                                            <subItem.icon className="h-3 w-3" aria-hidden="true" />
                                                            <span className="mx-2 text-sm font-normal">{subItem.title}</span>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    ))

                                }

                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
