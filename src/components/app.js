'use client'

import { ThemeProvider } from "@material-tailwind/react";
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { useState } from "react";

export function App({children}) {

    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <ThemeProvider>
            <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
            <div className='flex flex-col'>
                <Header sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
                <div className='background h-min-[--body-min-height] text-grey'>
                    {children}
                </div>
            </div>
        </ThemeProvider>
    )
}