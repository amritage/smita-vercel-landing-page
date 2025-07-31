import type React from "react"
import type { Metadata } from "next"
import { env, validateProductionEnv } from "@/lib/env"
import ClientLayout from "./ClientLayout"

// Validate environment variables in production
if (env.NODE_ENV === "production") {
  validateProductionEnv()
}

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_DEFAULT_TITLE || "Premium B2B Fabric Supplier | Global Textile Manufacturing Solutions",
  description:
    env.NEXT_PUBLIC_DEFAULT_DESCRIPTION ||
    "Leading B2B fabric supplier for global garment manufacturers, clothing retailers, and fabric importers. Premium quality textiles, competitive pricing, worldwide shipping.",
  keywords:
    env.NEXT_PUBLIC_DEFAULT_KEYWORDS ||
    "B2B fabric supplier, textile manufacturer, bulk fabric orders, garment industry, clothing retailers, fabric importers, wholesale textiles, global fabric trade",
  openGraph: {
    title: env.NEXT_PUBLIC_DEFAULT_TITLE || "Premium B2B Fabric Supplier | Global Textile Manufacturing Solutions",
    description:
      env.NEXT_PUBLIC_DEFAULT_DESCRIPTION ||
      "Leading B2B fabric supplier for global garment manufacturers, clothing retailers, and fabric importers.",
    type: "website",
    url: env.NEXT_PUBLIC_APP_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: env.NEXT_PUBLIC_APP_URL ? new URL(env.NEXT_PUBLIC_APP_URL) : undefined,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'