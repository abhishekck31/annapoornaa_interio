"use client"

import Image from "next/image"

const ClientLogosSection = () => {
  const logos = [
    'Aron', 'SMEC', 'SOBHA', 'asmara', 'blackbx', 'centuryclub',
    'emudra', 'gelato', 'hengsi', 'ingex', 'linen', 'mvm',
    'prestige', 'tss'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Our Trusted Clients
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Proud to work with industry leaders
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={logo} className="inline-block mx-8">
                <div className="w-32 h-20 relative">
                  <Image
                    src={`/logos/${logo}.png`}
                    alt={`${logo} logo`}
                    fill
                    className="object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {logos.map((logo, index) => (
              <div key={`duplicate-${logo}`} className="inline-block mx-8">
                <div className="w-32 h-20 relative">
                  <Image
                    src={`/logos/${logo}.png`}
                    alt={`${logo} logo`}
                    fill
                    className="object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogosSection
