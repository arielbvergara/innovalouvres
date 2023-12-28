'use client'

import { ThemeProvider } from "@material-tailwind/react";

export function App({children}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}