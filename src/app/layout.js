import './globals.css'
import { Overpass_Mono } from 'next/font/google'
import { ThemeProvider } from "./components/ThemeProvider"

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
