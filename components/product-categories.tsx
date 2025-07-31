import Image from "next/image"

const categories = [
  {
    name: "Cotton Fabrics",
    description: "Premium cotton textiles for apparel and home textiles",
    image: "/placeholder.svg?height=300&width=400",
    features: ["100% Pure Cotton", "Various Weights", "Custom Colors"],
  },
  {
    name: "Silk Fabrics",
    description: "Luxury silk materials for high-end fashion",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Mulberry Silk", "Natural Sheen", "Premium Quality"],
  },
  {
    name: "Synthetic Blends",
    description: "Durable polyester and cotton blends",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Wrinkle Resistant", "Easy Care", "Cost Effective"],
  },
  {
    name: "Technical Textiles",
    description: "Performance fabrics for specialized applications",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Moisture Wicking", "UV Protection", "Antimicrobial"],
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Product Categories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive range of premium fabrics for every manufacturing need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{category.description}</p>

                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 py-3 px-4 rounded-lg font-medium transition-all duration-200 border border-slate-200 hover:border-blue-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
