import 'app/layout.css'
import { Secular_One } from 'next/font/google'

const font1 = Secular_One({ 
  subsets : ['latin'],
  weight : 400,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <title> Arena Catalog </title>
    <meta name="description" content="Free Web tutorials"/>
    <meta name="author" content="Adrien Millasseau"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body className={font1.className}>{children}</body>
    </html>
  )
}
