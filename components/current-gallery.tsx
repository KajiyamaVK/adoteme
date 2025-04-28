"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CurrentGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Combinação das imagens anteriores e novas da pasta today
  const images = [
    // Imagens originais
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-WEqPcJ2rliCgH0FD4oWX6E67iCCUne.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-1R7NzTvlaiMgYsFBtT6FoKej8ETBOf.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-YbHDh7gS2c4LjEQAzGEN1DugrpGYUA.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-zEtjIrLPYBSIgl6JlDSJ3bQTn9JBNe.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-GVSz5GXG6GXmLkTYAay9gCR6PH3WOI.jpeg",
    // Novas imagens da pasta today
    "/today/6.jpeg",
    "/today/7.jpeg",
    "/today/8.jpeg",
    "/today/9.jpeg",
    "/today/10.jpeg",
    "/today/11.jpeg"
  ]

  const imageDescriptions = [
    // Descrições originais
    "Linguiça descansando carinhosamente com uma criança",
    "Linguiça relaxando confortavelmente no chão",
    "Linguiça na cama com uma criança, mostrando sua natureza dócil",
    "Linguiça sorrindo para a câmera, mostrando sua personalidade alegre",
    "Linguiça brincando com seu brinquedo favorito na cama",
    // Novas descrições
    "Linguiça descansando confortavelmente em casa",
    "Linguiça mostrando sua personalidade carinhosa",
    "Linguiça feliz em seu ambiente atual",
    "Linguiça exibindo seu olhar doce e expressivo",
    "Linguiça relaxando tranquilamente",
    "Linguiça demonstrando seu temperamento dócil"
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <section id="fotos" className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-8">Linguiça Linda Hoje!</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={imageDescriptions[currentIndex]}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#5e4c3e]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6 text-[#5e4c3e]" />
          </button>
        </div>

        <p className="mt-4 text-[#5e4c3e] italic">{imageDescriptions[currentIndex]}</p>

        <div className="flex justify-center mt-4 gap-2 flex-wrap">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#e8a87c]" : "bg-gray-300"}`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-11 gap-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`overflow-hidden rounded-lg border-2 ${
                index === currentIndex ? "border-[#e8a87c]" : "border-transparent"
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image src={image} alt={`Miniatura ${index + 1}`} fill className="object-cover" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
