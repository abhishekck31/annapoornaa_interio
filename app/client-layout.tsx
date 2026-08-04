"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollNavigation from "@/components/scroll-navigation"
import WhatsAppButton from "@/components/whatsapp-button"
import SocialLinks from "@/components/social-links"
import { AnimatePresence } from "framer-motion"

// Poppins is already initialised in app/layout.tsx and applied to <html>.
// Declaring it a second time here produced a duplicate font stylesheet and a
// second set of preloads on every page.
export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="font-poppins relative bg-white">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <ScrollNavigation />
        <WhatsAppButton />
        <SocialLinks />
      </ThemeProvider>
    </div>
  )
}
