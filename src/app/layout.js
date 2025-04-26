import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ',
  description: 'Official website of Dawah Community Gobindaganj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}