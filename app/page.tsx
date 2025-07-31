import { Suspense } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { ContactFormSkeleton } from "@/components/contact-form-skeleton"
import { ProductCategoriesSkeleton } from "@/components/product-categories-skeleton"
import { FAQSkeleton } from "@/components/faq-skeleton"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Dynamic imports for better code splitting
import dynamic from "next/dynamic"

const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => ({ default: mod.ContactForm })), {
  loading: () => <ContactFormSkeleton />,
  ssr: false, // Client-side only for form interactions
})

const ProductCategories = dynamic(
  () => import("@/components/product-categories").then((mod) => ({ default: mod.ProductCategories })),
  {
    loading: () => <ProductCategoriesSkeleton />,
    ssr: true, // SSR for SEO
  },
)

const FAQ = dynamic(() => import("@/components/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <FAQSkeleton />,
  ssr: true, // SSR for SEO
})

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "Premium B2B Fabric Supplier | Global Textile Manufacturing Solutions - FabricPro",
  description:
    "Leading B2B fabric supplier for global garment manufacturers, clothing retailers, and fabric importers. Premium quality textiles, competitive pricing, worldwide shipping. ISO certified with 500+ partners across 50+ countries.",
  keywords: [
    "B2B fabric supplier",
    "textile manufacturer",
    "bulk fabric orders",
    "garment industry",
    "clothing retailers",
    "fabric importers",
    "wholesale textiles",
    "global fabric trade",
    "cotton fabrics",
    "silk materials",
    "synthetic blends",
    "technical textiles",
    "ISO certified fabrics",
    "premium textile supplier",
  ].join(", "),
  openGraph: {
    title: "Premium B2B Fabric Supplier | Global Textile Manufacturing Solutions",
    description:
      "Leading B2B fabric supplier for global garment manufacturers, clothing retailers, and fabric importers. Premium quality textiles, competitive pricing, worldwide shipping.",
    type: "website",
    siteName: "FabricPro",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FabricPro - Premium B2B Fabric Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium B2B Fabric Supplier | FabricPro",
    description: "Leading B2B fabric supplier for global garment manufacturers and retailers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fabricpro.com",
  },
}

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FabricPro",
  description: "Leading B2B fabric supplier for global garment manufacturers",
  url: "https://fabricpro.com",
  logo: "https://fabricpro.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-8900",
    contactType: "sales",
    email: "sales@fabricpro.com",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "New York",
    addressRegion: "NY",
  },
  sameAs: ["https://facebook.com/fabricpro", "https://twitter.com/fabricpro", "https://linkedin.com/company/fabricpro"],
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <main className="min-h-screen bg-white">
        {/* Hero Section - Critical above-the-fold content */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    Premium Fabrics for
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      Global Manufacturers
                    </span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Connect with leading fabric suppliers worldwide. Quality textiles, competitive pricing, and reliable
                    supply chains for garment manufacturers and retailers.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    aria-label="Get fabric quote now"
                  >
                    Get Quote Now
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/10"
                    aria-label="Call FabricPro sales team"
                  >
                    📞 Call Now
                  </a>
                </div>

                <div className="flex items-center space-x-8 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>Global Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Premium fabric warehouse with organized textile rolls showcasing quality control and global supply chain"
                    width={800}
                    height={600}
                    priority
                    className="rounded-2xl shadow-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview - Optimized for SEO */}
        <section className="py-20 bg-slate-50" aria-labelledby="company-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="company-overview" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Leading B2B Fabric Supplier Worldwide
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  As a premier B2B fabric supplier, we specialize in providing high-quality textiles to global garment
                  manufacturers, clothing retailers, and fabric trading companies. Our extensive network spans across
                  major textile hubs worldwide, ensuring consistent supply chains and competitive pricing for bulk
                  fabric orders. We understand the demanding requirements of modern fashion and apparel industries,
                  offering premium cotton, silk, polyester, and blended fabrics that meet international quality
                  standards.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  Our commitment to excellence extends beyond product quality to encompass reliable logistics, flexible
                  payment terms, and comprehensive customer support. Whether you're sourcing fabrics for fast fashion,
                  luxury apparel, or industrial textiles, our experienced team works closely with fabric importers and
                  manufacturers to deliver customized solutions. With decades of experience in the global textile trade,
                  we've built lasting partnerships with leading clothing brands and retailers worldwide, making us your
                  trusted partner for all fabric sourcing needs.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-slate-600">Global Partners</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                    <div className="text-slate-600">Countries Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Modern textile manufacturing facility showcasing quality control processes and international standards"
                  width={600}
                  height={500}
                  loading="lazy"
                  className="rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories - Lazy loaded with SSR */}
        <Suspense fallback={<ProductCategoriesSkeleton />}>
          <ProductCategories />
        </Suspense>

        {/* FAQ Section - Lazy loaded with SSR */}
        <Suspense fallback={<FAQSkeleton />}>
          <FAQ />
        </Suspense>

        {/* Contact Form - Client-side only */}
        <section id="contact" className="py-20 bg-slate-900" aria-labelledby="contact-form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contact-form" className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Get Your Custom Quote Today
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Connect with our fabric specialists for personalized pricing and bulk order solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <Suspense fallback={<ContactFormSkeleton />}>
                <ContactForm />
              </Suspense>

              <div className="space-y-8">
                <div className="bg-slate-800 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl" aria-hidden="true">
                          📞
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Phone</div>
                        <a
                          href="tel:+1234567890"
                          className="text-slate-300 hover:text-white transition-colors"
                          aria-label="Call FabricPro at +1 (234) 567-8900"
                        >
                          +1 (234) 567-8900
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl" aria-hidden="true">
                          ✉️
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Email</div>
                        <a
                          href="mailto:sales@fabricsupplier.com"
                          className="text-slate-300 hover:text-white transition-colors"
                          aria-label="Email FabricPro sales team"
                        >
                          sales@fabricsupplier.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl" aria-hidden="true">
                          🌍
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Global Offices</div>
                        <div className="text-slate-300">New York • London • Mumbai • Shanghai</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-700">
                    <div className="text-white font-semibold mb-4">Follow Us</div>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com/fabricpro"
                        className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                        aria-label="Follow FabricPro on Facebook"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span aria-hidden="true">📘</span>
                      </a>
                      <a
                        href="https://twitter.com/fabricpro"
                        className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                        aria-label="Follow FabricPro on Twitter"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span aria-hidden="true">🐦</span>
                      </a>
                      <a
                        href="https://linkedin.com/company/fabricpro"
                        className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                        aria-label="Follow FabricPro on LinkedIn"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span aria-hidden="true">💼</span>
                      </a>
                      <a
                        href="https://instagram.com/fabricpro"
                        className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                        aria-label="Follow FabricPro on Instagram"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span aria-hidden="true">📷</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Button - Lazy loaded */}
        <WhatsAppButton />
      </main>
    </>
  )
}
