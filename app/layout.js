import './globals.css'
import { Inter, Griffy } from 'next/font/google'


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


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${griffy.variable}`}>{children}</body>
      {/* <body className={`${roboto.variable} ${ovo.variable}`}> */}

    </html>
  )
}
