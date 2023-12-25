import Image from "next/image";
import Link from "next/link";

export default function Header({}) {
    return (
        <div className="fixed left-0 top-0 h-20 size-full flex justify-items-center justify-evenly align-middle bg-white max-sm:justify-">
           <div className="logo flex-none m-auto">
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
           <div className="pages flex justify-items-center justify-evenly  m-auto">
                <Link href="/" className="m-2 lg:m-6 md:m-4 max-sm:hidden">
                    Home
                </Link>
                <Link href="/gallery" className="m-2 lg:m-6 md:m-4 max-sm:hidden">
                    Gallery
                </Link>
                <Link href="/about" className="m-2 lg:m-6 md:m-4 max-sm:hidden">
                    About
                </Link>
                <Link href="/contact" className="m-2 lg:m-6 md:m-4 max-sm:hidden">
                    Contact
                </Link>
           </div>
           <div className="burguer sm:hidden">
                    HAMBURGER ICON
           </div>
        </div>
    )
}