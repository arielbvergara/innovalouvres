'use client'

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header({sidebarActive, setSidebarActive}) {

    const path = usePathname()
    
    return (
        <div className="left-0 top-0 flex size-full h-[--header-height] justify-between bg-white text-grey shadow-md">
           <div className="logo mx-4 my-auto flex-none sm:mx-auto">
            <Link href="/">
                <Image
                        width={150}
                        height={150}
                        objectFit="cover"
                        src={'/logo.jpeg'}
                        alt="Logo"
                        priority={true}
                    />
            </Link>
           </div>
           <div className="pages m-auto flex hidden sm:block">
                <Link href="/" className={path === "/" ? "m-2 hover:text-light-orange md:m-4 lg:m-6 active" : "m-2 hover:text-light-orange md:m-4 lg:m-6"} >
                    Home
                </Link>
                <Link href="/gallery" className={path === "/gallery" ? "m-2 hover:text-light-orange md:m-4 lg:m-6 active" : "m-2 hover:text-light-orange md:m-4 lg:m-6"}>
                    Gallery
                </Link>
                <Link href="/about" className={path === "/about" ? "m-2 hover:text-light-orange md:m-4 lg:m-6 active" : "m-2 hover:text-light-orange md:m-4 lg:m-6"}>
                    About
                </Link>
                <Link href="/faqs" className={path === "/faqs" ? "m-2 hover:text-light-orange md:m-4 lg:m-6 active" : "m-2 hover:text-light-orange md:m-4 lg:m-6"}>
                    FAQs
                </Link>
                <Link href="/contact" className={path === "/contact" ? "m-2 hover:text-light-orange md:m-4 lg:m-6 active" : "m-2 hover:text-light-orange md:m-4 lg:m-6"}>
                    Contact
                </Link>
           </div>
           <div className="mx-4 my-auto flex sm:hidden">
                <FontAwesomeIcon icon={faBars} className="h-7 cursor-pointer" onClick={() => setSidebarActive(!sidebarActive)}/>
           </div>
        </div>
    )
}