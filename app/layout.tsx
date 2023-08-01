import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '우리야 | Wooriya',
  description: '다양한 제휴와 혜택으로 하나되는 우리 동아리, 우리야',
  icons:{
    icon:'/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='../styles/globals.css' rel='stylesheet'></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
