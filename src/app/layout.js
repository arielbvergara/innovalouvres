import { Inter } from 'next/font/google'
import './globals.css'  
import { App } from '@/components/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Innovalouvres',
  description: 'Innovalouvres website',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}
