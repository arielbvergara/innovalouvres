import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
// import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Innovalouvres',
  description: 'Innovalouvres website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Sidebar /> */}
        <Header />
        <div className='mt-20 text-grey'>
          {children}
        </div>
      </body>
    </html>
  )
}
