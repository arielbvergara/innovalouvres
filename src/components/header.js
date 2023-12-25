    import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Header({}) {
    return (
        <div className="fixed left-0 top-0 h-20 size-full flex bg-white justify-between text-grey">
           <div className="logo flex-none my-auto sm:mx-auto mx-4">
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
           <div className="pages flex m-auto max-sm:hidden">
                <Link href="/" className="m-2 lg:m-6 md:m-4 hover:text-light-orange">
                    Home
                </Link>
                <Link href="/gallery" className="m-2 lg:m-6 md:m-4 hover:text-light-orange">
                    Gallery
                </Link>
                <Link href="/about" className="m-2 lg:m-6 md:m-4 hover:text-light-orange">
                    About
                </Link>
                <Link href="/contact" className="m-2 lg:m-6 md:m-4 hover:text-light-orange">
                    Contact
                </Link>
           </div>
           <div className="flex my-auto mx-4 sm:hidden">
                <FontAwesomeIcon icon={faBars} className="h-7 cursor-pointer"/>
           </div>
        </div>
    )
}