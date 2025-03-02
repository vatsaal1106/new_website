import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Load Pro Jakarta Sans font
const proJakartaSans = localFont({
  src: [
    {
      path: "../public/fonts/ProJakartaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ProJakartaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ProJakartaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ProJakartaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ProJakartaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pro-jakarta",
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