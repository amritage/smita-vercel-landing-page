"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyContactButton } from "@/components/sticky-contact-button"
import "./globals.css"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/placeholder.svg?height=600&width=800" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Critical CSS inline to prevent render blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .hero-gradient{background:linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)}
            .btn-primary{background:linear-gradient(to right,#2563eb,#1d4ed8);color:white;font-weight:600;border-radius:0.5rem;transition:all 0.2s;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1)}
            .btn-secondary{border:2px solid rgba(255,255,255,0.2);color:white;font-weight:600;border-radius:0.5rem;transition:all 0.2s;backdrop-filter:blur(4px)}
          `,
          }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className="font-system antialiased">
        <Navigation />
        {children}
        <Footer />
        <StickyContactButton />
      </body>
    </html>
  )
}
