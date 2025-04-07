import './globals.css'
import { Inter, Griffy } from 'next/font/google'
import Head from 'next/head'

// const creepster = Creepster({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-creepster"
// })

const griffy = Griffy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-griffy"
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: "--font-inter"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>

      </head> */}
      <body className={`${inter.variable} ${griffy.variable}`}>{children}</body>
    </html>
  )
}
