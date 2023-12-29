'use client'

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header({}) {

    const path = usePathname()

    console.log(path)
    
    return (
        <div className="left-0 top-0 z-50 flex size-full h-[--header-height] justify-between bg-white text-grey">
           <div className="logo mx-4 my-auto flex-none sm:mx-auto">
            <Link href="/">
                <Image
                        width={150}
                        height={150}
                        objectFit="cover"
                        src={'/logo.png'}
                        alt="Logo"
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
                <Link href="/contact" className={path === "/contact" ? "m-2 hover:text-light-orange md:m-4 lg:m-6 active" : "m-2 hover:text-light-orange md:m-4 lg:m-6"}>
                    Contact
                </Link>
           </div>
           <div className="mx-4 my-auto flex sm:hidden">
                <FontAwesomeIcon icon={faBars} className="h-7 cursor-pointer"/>
           </div>
        </div>
    )
}