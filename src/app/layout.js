import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
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
          <Sidebar />
          <div className='flex flex-col'>
            <Header />
            <div className='text-grey'>
              {children}
            </div>
          </div>
        </App>
      </body>
    </html>
  )
}
