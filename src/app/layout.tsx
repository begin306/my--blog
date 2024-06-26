import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen">
          <Navbar />
          <div className="container mx-auto mt-4">{children}</div>
        </div>
        <footer className="flex justify-center items-center bg-gray-800 text-white px-12 py-10">
          <div className="text-center">
            <p>&copy; 2024 중부대학교 정보보호학과</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
