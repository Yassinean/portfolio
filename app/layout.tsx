import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/theme-provider'
import Navigation from './components/navigation'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Developer Portfolio',
  description: 'A showcase of skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-[#060913] bg-gradient-to-br from-[#060913] to-[#0F1629]">
            <Navigation />
            {children}
            <Toaster position="top-right" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

