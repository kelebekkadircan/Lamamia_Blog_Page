import Navbar from '@/components/navbar/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { SessionProvider } from "next-auth/react"
import AuthProvider from '@/components/AuthProvider/AuthProvider'

// const inter = Inter({ subsets: ['latin'] })

export const metadata =
{
  title: 'Kadircan Dev',
  description: 'Kadircanın Oyun Alanı'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <AuthProvider>


            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
