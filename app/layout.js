
import './globals.css'
import { Unbounded } from 'next/font/google'


const unbounded = Unbounded({ subsets: ['latin'] })

export const metadata = {
  title: 'ITER | Preparate para la aventura',
  description: 'Viaja a otros planetas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>{children}</body>
    </html>
  )
}
