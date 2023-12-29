'use client'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  
  import { faHome, faBars, faImage, faPeopleGroup, faMessage } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
   
  export default function Sidebar({sidebarActive, setSidebarActive}) {
    
    return (
        sidebarActive &&
            <Card className="absolute z-50 h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 duration-300">
                <div className="mb-2 flex p-4">
                    <Typography variant="h5" className="text-orange">
                        Innovalouvres
                    </Typography>
                    <div className="ml-auto">
                        <FontAwesomeIcon icon={faBars} className="h-7 cursor-pointer" onClick={() => setSidebarActive(!sidebarActive)}/>
                    </div>
                </div>
                <List>
                    <ListItem onClick={() => setSidebarActive(false)}>
                        <Link href="/" className="flex">
                            <ListItemPrefix>
                                <FontAwesomeIcon icon={faHome} className="h-5 cursor-pointer"/>
                            </ListItemPrefix>
                            Home
                        </Link>
                    </ListItem>
                    <ListItem onClick={() => setSidebarActive(false)}>
                        <Link href="/gallery" className="flex">
                            <ListItemPrefix>
                                <FontAwesomeIcon icon={faImage} className="h-5 cursor-pointer"/>
                            </ListItemPrefix>
                            Gallery
                        </Link>
                    </ListItem>
                    <ListItem onClick={() => setSidebarActive(false)}>
                        <Link href="/about" className="flex">
                            <ListItemPrefix>
                                <FontAwesomeIcon icon={faPeopleGroup} className="h-5 cursor-pointer"/>
                            </ListItemPrefix>
                            About us
                        </Link>
                    </ListItem>
                    <ListItem onClick={() => setSidebarActive(false)}>
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