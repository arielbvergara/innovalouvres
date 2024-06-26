'use client'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix
  } from "@material-tailwind/react";
  
import { faHome, faBars, faImage, faPeopleGroup, faPersonCircleQuestion, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
   
export default function Sidebar({sidebarActive, setSidebarActive}) {

const path = usePathname()

return (
    sidebarActive &&
        <Card className="card-custom absolute h-[100vh] w-full p-4 shadow-xl shadow-blue-gray-900/5 duration-300 sm:max-w-[20rem]">
            <div className="mb-2 flex p-4">
                <Typography variant="h5" className="text-orange">
                    Innovalouvres
                </Typography>
                <div className="ml-auto">
                    <FontAwesomeIcon icon={faBars} className="h-7 cursor-pointer" onClick={() => setSidebarActive(!sidebarActive)}/>
                </div>
            </div>
            <List>
                <ListItem onClick={() => setSidebarActive(false)} className={path === "/" ? "active rounded-none" : ""}>
                    <Link href="/" className="flex">
                        <ListItemPrefix>
                            <FontAwesomeIcon icon={faHome} className="h-5 cursor-pointer"/>
                        </ListItemPrefix>
                        Home
                    </Link>
                </ListItem>
                <ListItem onClick={() => setSidebarActive(false)} className={path === "/gallery" ? "active rounded-none" : ""}>
                    <Link href="/gallery" className="flex">
                        <ListItemPrefix>
                            <FontAwesomeIcon icon={faImage} className="h-5 cursor-pointer"/>
                        </ListItemPrefix>
                        Gallery
                    </Link>
                </ListItem>
                <ListItem onClick={() => setSidebarActive(false)} className={path === "/about" ? "active rounded-none" : ""}>
                    <Link href="/about" className="flex">
                        <ListItemPrefix>
                            <FontAwesomeIcon icon={faPeopleGroup} className="h-5 cursor-pointer"/>
                        </ListItemPrefix>
                        About us
                    </Link>
                </ListItem>
                <ListItem onClick={() => setSidebarActive(false)} className={path === "/faqs" ? "active rounded-none" : ""}>
                    <Link href="/faqs" className="flex">
                        <ListItemPrefix>
                            <FontAwesomeIcon icon={faPersonCircleQuestion} className="h-5 cursor-pointer"/>
                        </ListItemPrefix>
                        FAQs
                    </Link>
                </ListItem>
                <ListItem onClick={() => setSidebarActive(false)} className={path === "/contact" ? "active rounded-none" : ""}>
                    <Link href="/contact" className="flex">
                        <ListItemPrefix>
                            <FontAwesomeIcon icon={faMessage} className="h-5 cursor-pointer"/>
                        </ListItemPrefix>
                        Contact
                    </Link>
                </ListItem>

            </List>
        </Card>
    );
}