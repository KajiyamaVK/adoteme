"use client"

import { useState } from "react"
import Image from "next/image"

export function RescueGallery() {
  // Real transformation images from the public folder
  const transformationImages = [
    "/transform/1a.jpg",
    "/transform/2a.jpeg",
    "/transform/3a.jpeg",
    "/transform/4a.jpeg",
    "/transform/6a.jpeg",
    "/transform/7a.jpeg",
    "/transform/8a.jpeg",
    "/transform/9a.jpeg",
    "/transform/10a.jpeg",
    "/transform/11a.jpeg",
    "/transform/12a.jpeg",
    "/transform/13a.jpeg",
  ]

  // State to track which images have been revealed
  const [revealedImages, setRevealedImages] = useState<boolean[]>(Array(transformationImages.length).fill(false))

  const handleReveal = (index: number) => {
    const newRevealedImages = [...revealedImages]
    newRevealedImages[index] = true
    setRevealedImages(newRevealedImages)
  }

  return (
    <section id="transformacao" className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-6">A Jornada de Transformação</h2>
        <p className="text-[#5e4c3e] mb-8 max-w-2xl mx-auto">
          Estas são as fotos da jornada de transformação da Linguiça desde o resgate até hoje. Elas mostram o progresso 
          incrível que ela fez e como se tornou a cachorra saudável e feliz que é hoje.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {transformationImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl aspect-square">
              <Image
                src={image}
                alt={`Linguiça durante sua transformação - foto ${index + 1}`}
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
