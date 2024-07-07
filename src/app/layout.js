import './globals.css'
import { Overpass_Mono } from 'next/font/google'
import { ThemeProvider } from "./components/ThemeProvider"
import Head from 'next/head'

const overpassMono = Overpass_Mono({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        <script async id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="e0ad604c-3f39-4ad9-9e8b-4a6f9c59d482" data-blockingmode="auto" type="text/javascript"></script>
      </Head>

      <body className={overpassMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
