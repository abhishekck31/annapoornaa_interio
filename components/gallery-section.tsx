'use client'

import { useState, useEffect } from 'react'

import { Button } from './ui/button'
import Image from 'next/image'
import ScrollAnimation from './scroll-animation'
import { Dialog, DialogContent } from './ui/dialog'
import { X } from 'lucide-react'

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home Interior')
  const [images, setImages] = useState<string[]>([])
  const [videos, setVideos] = useState<string[]>([])
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Define video paths for Home Interior
  const homeVideos = [
    '/homevideo/WhatsApp Video 2025-04-26 at 22.50.56_ecda6edf.mp4',
    '/homevideo/WhatsApp Video 2025-04-26 at 22.51.11_dffac08d.mp4',
    '/homevideo/WhatsApp Video 2025-04-26 at 22.52.59_62fbe1c9.mp4',
  ]

  // Poster images for each video
  const homeVideoPosters = [
    '/homeint/home7.jpg',
    '/homeint/home12.jpg',
    '/interiors/Interiors15.jpg',
  ]

  // Define image paths for each category
  const categoryImages = {
    'Home Interior': [
      '/homeint/home.jpg',
      '/homeint/home1.jpg',
      '/homeint/home2.jpg',
      '/homeint/home3.jpg',
      '/homeint/home4.jpg',
      '/homeint/home5.jpg',
      '/homeint/home6.jpg',
      '/homeint/home7.jpg',
      '/homeint/home8.jpg',
      '/homeint/home9.jpg',
      '/homeint/home10.jpg',
      '/homeint/home11.jpg',
      '/homeint/home12.jpg',
      '/homeint/home13.jpg',
      '/homeint/home14.jpg',
      '/homeint/home16.jpg',
      '/homeint/home18.jpg',
      '/homeint/home19.jpg',
      '/homeint/home20.jpg',
      '/homeint/home21.jpg',
      '/homeint/home22.jpg',
      '/homeint/home23.jpg',
      '/homeint/home24.jpg',
      '/homeint/home25.jpg',
      '/homeint/home26.jpg',
      '/homeint/home27.jpg',
      '/homeint/home28.jpg',
      '/homeint/home29.jpg',
      '/homeint/home30.jpg',
      '/homeint/WhatsApp Image 2025-04-26 at 22.54.16_ba3b7183.jpg',
      
    ],
    'Office Interior': [
      // Asmara Apparels
      '/Asmara-project/Asmara1.jpg',
      '/Asmara-project/Asmara2.jpg',
      '/Asmara-project/Asmara3.jpg',
      '/Asmara-project/Asmara4.jpg',
      '/Asmara-project/Asmara5.jpg',
      '/Asmara-project/Asmara6.jpg',
      '/asmaranew/new1.jpg',
      '/asmaranew/new2.jpg',
      '/asmaranew/new3.jpg',
      '/asmaranew/new4.jpg',
      '/asmaranew/new5.jpg',
      '/asmaranew/new6.jpg',
      '/asmaranew/new7.jpg',
      
      // Black BX
      '/Blackbx-project/Blackbox1.jpg',
      '/Blackbx-project/Blackbox2.jpg',
      '/Blackbx-project/Blackbox3.jpg',
      '/Blackbx-project/Blackbox4.jpg',
      '/Blackbx-project/Blackbox5.jpg',
      '/Blackbx-project/Blackbox6.jpg',
      // Emudhra
      '/images/emudra/emudra1.jpg',
      '/images/emudra/emudra2.jpg',
      '/images/emudra/emudra3.jpg',
      '/images/emudra/emudra4.jpg',
      '/images/emudra/emudra5.jpg',
      '/images/emudra/emudra6.jpg',
      '/images/emudra/emudra7.jpg',
      '/emudranew/WhatsApp Image 2025-04-26 at 20.03.07_783475f8.jpg',
      '/emudranew/WhatsApp Image 2025-04-26 at 20.03.08_11bd1a81.jpg',
      '/emudranew/WhatsApp Image 2025-04-26 at 20.03.08_feb71060.jpg',
      // Surbana
      '/images/surbana/surbana1.jpg',
      '/images/surbana/surbana2.jpg',
      '/images/surbana/surbana3.jpg',
      '/images/surbana/surbana4.jpg',
      '/images/surbana/surbana5.jpg',
      // Golden Harness
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.04_63d69a7e.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.00_3a865800.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.05_28a54d3e.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.00_e4bf78b6.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.01_14f24863.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.01_1697f77c.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.02_b5c797ef.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.02_c277c730.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.03_8871451e.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.03_a07f8dab.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.03_eb4df909.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.04_cfbf26e2.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.05_624f3ee9.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.05_640bf6ac.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.10.06_f1e89ac8.jpg',
      '/Goldenharness/WhatsApp Image 2025-04-26 at 20.09.59_66c256ba.jpg',
      // Gelato Factory (retail but office-like)
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.47_2d8dbe98.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.45_15595987.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.45_428a3dc3.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.45_9dd39505.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.46_564e7fe2.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.46_8bf93c8a.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.46_bd79eae1.jpg',
      '/gelatofactory/WhatsApp Image 2025-04-26 at 21.50.47_7d80d18d.jpg',
      //ooty resort
      '/ootyresort/WhatsApp Image 2025-04-26 at 21.47.52_513edfbd.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.54_237fa813.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.54_8c5ced3d.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.54_d57a702b.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.55_2fd900c1.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.56_981fd2b4.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.56_eafed8c9.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.56_f565569d.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.57_88d7e6cc.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.57_af4fbc07.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.58_79fea3aa.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.58_d1e8a5ff.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.59_0727373b.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.47.59_69053e02.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.00_a5aafb40.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.00_cf2def52.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.01_204b4ff1.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.01_4886f41c.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.01_51174ea5.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.02_8ce73f45.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.03_8d2e6557.jpg',
'/ootyresort/WhatsApp Image 2025-04-26 at 21.48.04_8e8560e2.jpg',
'/ootyresort/mainres.jpg',
    ],
    'Construction': [
      '/Construction/construction1.jpg',
      '/Construction/construction2.jpg',
      '/Construction/construction3.jpg',
      '/Construction/construction4.jpg',
      '/Construction/construction5.jpg',
      '/Construction/construction6.jpg',
      '/Construction/construction7.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 21.56.48_5f3f2e67.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 23.23.13_03a3861a.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 23.23.30_83c1b596.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 23.23.30_a24e277a.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 23.32.10_123996c2.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 23.32.11_15dfc4fc.jpg',
      '/Construction/WhatsApp Image 2025-04-26 at 23.32.12_18ec1c63.jpg',
      '/const2/WhatsApp Image 2025-04-28 at 18.55.20_13b351bf.jpg',
      '/const2/WhatsApp Image 2025-04-28 at 18.55.20_6bf9f829.jpg',
      '/const2/WhatsApp Image 2025-04-28 at 18.55.21_bb602ebb.jpg',
      '/const2/WhatsApp Image 2025-04-28 at 18.55.22_9e1f57ed.jpg',
      '/const2/WhatsApp Image 2025-04-28 at 18.55.22_df42e85c.jpg',
      '/const2/WhatsApp Image 2025-04-28 at 18.55.24_6258f4a2.jpg',

    ],
    'Products': [
      '/Products/WhatsApp Image 2025-04-26 at 23.02.11_4a347870.jpg',
      '/Products/WhatsApp Image 2025-04-26 at 23.02.11_6b5165d5.jpg',
      '/Products/WhatsApp Image 2025-04-26 at 23.14.58_c5f18eda.jpg',
      '/Products/WhatsApp Image 2025-04-26 at 23.14.59_38a7cb86.jpg',
      '/Products/WhatsApp Image 2025-04-26 at 23.19.40_7174d184.jpg',
      '/Products/WhatsApp Image 2025-04-26 at 23.26.59_32a2f458.jpg',
      '/Products/WhatsApp Image 2025-04-26 at 23.26.59_8a645bb9.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.54.49_4a84b5e8.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.54.50_0cfe6cba.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.54.50_d351bb38.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.54.51_2349deb8.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.56.11_d7da9b82.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.56.15_6fd4abdd.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.56.17_8695ef28.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.56.17_94ba9d5e.jpg',
      '/Products/WhatsApp Image 2025-04-27 at 13.56.20_d662e6fe.jpg',
      // Add product-related images from other folders
      '/Alumilium Doors and Windows/Alumilium-Main.jpg',
      '/Alumilium Doors and Windows/Alumilium-Bifolddoor.jpg',
      '/Alumilium Doors and Windows/Alumilium-Casementwindow.jpg',
      '/Alumilium Doors and Windows/Alumilium-Frenchdoor.jpg',
      '/Alumilium Doors and Windows/Alumilium-Slidingdoor.jpg',
      '/Alumilium Doors and Windows/Alumilium-Slidingwindow.jpg',
      '/Alumilium Doors and Windows/Alumilium-Tiltandturn.jpg',
      '/Fire Doors/Fire-Acoustic.jpg',
      '/Fire Doors/Fire-Double.jpg',
      '/Fire Doors/Fire-Steel.jpg',
    ],
  }

  // Update images and videos when category changes
  useEffect(() => {
    setImages(categoryImages[selectedCategory as keyof typeof categoryImages] || [])
    setVideos(
      selectedCategory === 'Home Interior'
        ? homeVideos.slice(0, 3)
        : []
    )
  }, [selectedCategory])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio of projects showcasing our expertise in home interiors, office interiors, construction, and products.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Home Interior', 'Office Interior', 'Construction', 'Products'].map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-900 hover:bg-navy-100'
                } border border-navy-200`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          {/* Videos Section - Only shown for Home Interior */}
          {videos.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-navy-900 mb-4 text-center">Featured Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mx-auto" style={{maxWidth: '900px'}}>
                {videos.map((video, idx) => (
                  <div
                    key={`video-${idx}`}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <video
                      src={video}
                      className="w-full aspect-video object-cover"
                      preload="metadata"
                      poster={selectedCategory === 'Home Interior' ? homeVideoPosters[idx] : undefined}
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="opacity-90 drop-shadow-lg"
                      >
                        <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.4)" />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </div>
                    {/* Video Label */}
                    <span className="absolute top-2 left-2 bg-navy-900 text-white text-xs px-2 py-1 rounded shadow">
                      Video
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div
                key={`${img}-${idx}`}
                className="group relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  <Image
                    src={img}
                    alt={`${selectedCategory} image ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={idx < 8}
                    loading={idx < 8 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => {
          if (!open) {
            console.log('Dialog onOpenChange: closing modal');
            setSelectedVideo(null);
          }
        }}>
          <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-black">
            <button
              className="absolute right-3 top-3 z-50 rounded-full bg-white p-2 opacity-80 hover:opacity-100 focus:outline-none"
              onClick={() => {
                console.log('Close clicked');
                setSelectedVideo(null);
              }}
              aria-label="Close video"
              type="button"
            >
              <X className="h-5 w-5 text-navy-900" />
            </button>
            {selectedVideo && (
              <div className="relative w-full">
                <video 
                  src={selectedVideo} 
                  controls 
                  autoPlay
                  className="w-full aspect-video"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default GallerySection
