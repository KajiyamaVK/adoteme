"use client"

import { useState } from "react"
import Image from "next/image"

export function RescueGallery() {
  // Placeholder images - these would be replaced with actual rescue images
  const rescueImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  // State to track which images have been revealed
  const [revealedImages, setRevealedImages] = useState<boolean[]>(Array(rescueImages.length).fill(false))

  const handleReveal = (index: number) => {
    const newRevealedImages = [...revealedImages]
    newRevealedImages[index] = true
    setRevealedImages(newRevealedImages)
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-6">O Começo da Transformação</h2>
        <p className="text-[#5e4c3e] mb-8 max-w-2xl mx-auto">
          Estas são as fotos do dia em que a Linguiça foi resgatada. Elas mostram o estado em que ela foi encontrada e o
          início de sua jornada de recuperação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rescueImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Linguiça no dia do resgate - foto ${index + 1}`}
                fill
                className={`object-cover transition-all duration-500 ${revealedImages[index] ? "" : "blur-xl"}`}
              />

              {!revealedImages[index] && (
                <button
                  onClick={() => handleReveal(index)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-center p-4"
                >
                  <div>
                    <p className="font-medium mb-2">Atenção: Imagem pode ser sensível para algumas pessoas.</p>
                    <p className="text-sm bg-white/20 py-1 px-3 rounded-full inline-block">Clique para revelar</p>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
