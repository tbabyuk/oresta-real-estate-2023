"use client"

import { useState } from "react";
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


export const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [resourcesSubmenuOpen, setResourcesSubmenuOpen] = useState(false)

    const closeAllMenus = () => {
        setDropdownIsOpen(false)
        setResourcesSubmenuOpen(false)
    }


  return (
        <nav className="px-5 h-[40px] flex justify-center items-center bg-oresta-light relative">
            {dropdownIsOpen ? (
                <IoCloseOutline 
                    className="absolute left-2 top-1 cursor-pointer md:hidden text-oresta-primary" size="2.2rem"
                    onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                />
            ) : (
                <RxHamburgerMenu 
                className="absolute left-2 top-1 cursor-pointer md:hidden text-oresta-primary" size="2rem"
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                />
            ) }

            <ul className={`h-full md:flex md:flex-row md:justify-center md:static ${dropdownIsOpen ? "flex-col w-full absolute -bottom-10" : "hidden"}`}>
                <li><Link href="/" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-light/80 hover:text-gray-50" onClick={() => setDropdownIsOpen(false)}>HOME</Link></li>
                <li><Link href="/happy-clients" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-light/80 hover:text-gray-50" onClick={() => setDropdownIsOpen(false)}>HAPPY CLIENTS</Link></li>
                <li><Link href="/contact" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-light/80 hover:text-gray-50" onClick={() => setDropdownIsOpen(false)}>CONTACT</Link></li>
                <li className="relative"><Link href="#" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-light/80" onMouseEnter={() => setResourcesSubmenuOpen(true)} onMouseLeave={() => setResourcesSubmenuOpen(false)}>RESOURCES <IoIosArrowDown className="ms-1" /></Link>
                    {resourcesSubmenuOpen && 
                        <ul className="w-full md:w-fit md:px-5 md:absolute md:-left-5" onMouseEnter={() => setResourcesSubmenuOpen(true)} onMouseLeave={() => setResourcesSubmenuOpen(false)}>
                            <li><Link href="/resources/videos" className="w-full h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-light/80 hover:text-gray-50" onClick={() => closeAllMenus()}>Videos</Link></li>
                            <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="w-full h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-light/80 hover:text-gray-50"  onClick={() => closeAllMenus()}>Preferred Vendors</Link></li>
                        </ul>
                    }
                </li>
            </ul>
        </nav>
    )
}