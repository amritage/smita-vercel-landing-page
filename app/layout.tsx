import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Premium B2B Fabric Supplier | Global Textile Manufacturing Solutions - FabricPro",
  description:
    "Leading B2B fabric supplier for global garment manufacturers, clothing retailers, and fabric importers. Premium quality textiles, competitive pricing, worldwide shipping.",
  keywords:
    "B2B fabric supplier, textile manufacturer, bulk fabric orders, garment industry, clothing retailers, fabric importers, wholesale textiles, global fabric trade",
  openGraph: {
    title: "Premium B2B Fabric Supplier | Global Textile Manufacturing Solutions",
    description:
      "Leading B2B fabric supplier for global garment manufacturers, clothing retailers, and fabric importers.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
