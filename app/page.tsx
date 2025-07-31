import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { ProductCategories } from "@/components/product-categories"
import { FAQ } from "@/components/faq"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
                >
                  Get Quote Now
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/10"
                >
                  📞 Call Now
                </a>
              </div>

              <div className="flex items-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Global Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Premium fabric warehouse with organized textile rolls"
                  width={800}
                  height={600}
                  priority
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Leading B2B Fabric Supplier Worldwide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                As a premier B2B fabric supplier, we specialize in providing high-quality textiles to global garment
                manufacturers, clothing retailers, and fabric trading companies. Our extensive network spans across
                major textile hubs worldwide, ensuring consistent supply chains and competitive pricing for bulk fabric
                orders. We understand the demanding requirements of modern fashion and apparel industries, offering
                premium cotton, silk, polyester, and blended fabrics that meet international quality standards.
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
                alt="Modern textile manufacturing facility showcasing quality control processes"
                width={600}
                height={500}
                loading="lazy"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductCategories />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get Your Custom Quote Today</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with our fabric specialists for personalized pricing and bulk order solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />

            <div className="space-y-8">
              <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:+1234567890" className="text-slate-300 hover:text-white transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a
                        href="mailto:sales@fabricsupplier.com"
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        sales@fabricsupplier.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🌍</span>
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
                      href="#"
                      className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-white">📘</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-white">🐦</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-white">💼</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-white">📷</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
