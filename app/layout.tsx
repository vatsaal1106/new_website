import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Load Pro Jakarta Sans font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Nova | Frontier AI Models for Enterprise",
  description:
    "Custom-architected AI models optimized for Business Intelligence and ERP. Secure, reliable, and vertically integrated solutions that maintain complete chain of custody over enterprise data.",
  keywords:
    "AI, Enterprise AI, Business Intelligence, ERP, Machine Learning, Deep Tech, Custom AI Models, Data Security, Frontier AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nova.ai",
    title: "Nova | Frontier AI Models for Enterprise",
    description: "Custom-architected AI models optimized for Business Intelligence and ERP",
    siteName: "Nova AI",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${proJakartaSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
