'use client'

import { ThemeProvider } from "@material-tailwind/react";
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext({})

export function App({children}) {
    
    const [sidebarActive, setSidebarActive] = useState(false);

    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("FETCH")
        const fetchData = async () => {
            try {
                const response = await fetch('/content.json');
                const jsonData = await response.json();
                setData(jsonData);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <ContentContext.Provider value={{data}}>
            <ThemeProvider>
                <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
                <div className='flex flex-col'>
                    <Header sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
                    <div className='background h-min-[--body-min-height] text-grey'>
                        {children}
                    </div>
                </div>
            </ThemeProvider>
        </ContentContext.Provider>
    )
}