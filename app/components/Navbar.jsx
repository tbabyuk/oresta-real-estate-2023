"use client"

import { useState } from "react";
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


export const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [neighbourhoodsSubmenuOpen, setNeighbourhoodsSubmenuOpen] = useState(false)
    const [resourcesSubmenuOpen, setResourcesSubmenuOpen] = useState(false)

    const closeAllMenus = () => {
        setDropdownIsOpen(false)
        setNeighbourhoodsSubmenuOpen(false)
        setResourcesSubmenuOpen(false)
    }


  return (
        <nav className="px-5 h-[44px] flex justify-center items-center bg-oresta-moss relative">
            {dropdownIsOpen ? (
                <IoCloseOutline 
                    className="absolute left-2 top-1 cursor-pointer md:hidden text-oresta-blue" size="2.2rem"
                    onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                />
            ) : (
                <RxHamburgerMenu 
                className="absolute left-2 top-1.5 cursor-pointer md:hidden text-oresta-blue" size="2rem"
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                />
            ) }

            <ul className={`h-full md:flex md:flex-row md:justify-center md:static ${dropdownIsOpen ? "flex-col w-full absolute -bottom-11" : "hidden"} text-white`}>
                <li>
                    <Link href="/" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-moss/90 hover:bg-oresta-moss-2" onClick={() => setDropdownIsOpen(false)}>HOME</Link>
                </li>
                <li>
                    <Link href="/happy-clients" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-moss/90 hover:bg-oresta-moss-2" onClick={() => setDropdownIsOpen(false)}>HAPPY CLIENTS</Link>
                </li>
                {/* <li className="relative">
                    <Link href="#" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-moss/90" onMouseEnter={() => setNeighbourhoodsSubmenuOpen(true)} onMouseLeave={() => setNeighbourhoodsSubmenuOpen(false)} onClick={() => setNeighbourhoodsSubmenuOpen(!neighbourhoodsSubmenuOpen)}>NEIGHBOURHOODS <IoIosArrowDown className="ms-1" /></Link>
                    {neighbourhoodsSubmenuOpen && 
                        <ul className="w-full md:w-fit md:absolute md:-left-12 text-[0.95rem]" onMouseEnter={() => setNeighbourhoodsSubmenuOpen(true)} onMouseLeave={() => setNeighbourhoodsSubmenuOpen(false)}>
                            <li><Link href="/neighbourhoods/markland-wood" className="w-full h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-moss/80 hover:bg-oresta-moss-2" onClick={() => closeAllMenus()}>Markland Wood</Link></li>
                            <li className="whitespace-nowrap"><Link href="/neighbourhoods/eringate-centennial-west-deane" className="w-full h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-moss/80 hover:bg-oresta-moss-2"  onClick={() => closeAllMenus()}>Eringate-Centennial-West Deane</Link></li>
                        </ul>
                    }
                </li>                 */}
                <li>
                    <Link href="/contact" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-moss/90 hover:bg-oresta-moss-2" onClick={() => setDropdownIsOpen(false)}>CONTACT</Link>
                </li>
                <li className="relative">
                    <Link href="#" className="w-full h-full flex justify-center items-center px-5 py-3 bg-oresta-moss/90" onMouseEnter={() => setResourcesSubmenuOpen(true)} onMouseLeave={() => setResourcesSubmenuOpen(false)} onClick={() => setResourcesSubmenuOpen(!resourcesSubmenuOpen)}>RESOURCES <IoIosArrowDown className="ms-1" /></Link>
                    {resourcesSubmenuOpen && 
                        <ul className="w-full md:w-fit md:absolute md:-left-5 text-[0.95rem]" onMouseEnter={() => setResourcesSubmenuOpen(true)} onMouseLeave={() => setResourcesSubmenuOpen(false)}>
                            <li><Link href="/resources/down-payment-calculator" className="w-full whitespace-nowrap h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-moss/80 hover:bg-oresta-moss-2" onClick={() => closeAllMenus()}>Down Payment Calculator</Link></li>
                            {/* <li><Link href="/resources/videos" className="w-full h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-moss/80 hover:bg-oresta-moss-2" onClick={() => closeAllMenus()}>Videos</Link></li>
                            <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="w-full h-full flex justify-center md:justify-normal items-center px-5 py-2 bg-oresta-moss/80 hover:bg-oresta-moss-2"  onClick={() => closeAllMenus()}>Preferred Vendors</Link></li> */}
                        </ul>
                    }
                </li>
            </ul>
        </nav>
    )
}