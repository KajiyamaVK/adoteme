import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-WEqPcJ2rliCgH0FD4oWX6E67iCCUne.jpeg"
          alt="Linguiça descansando carinhosamente com uma criança"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Linguiça: Um Coração Cheio de Amor Espera por Você
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Pitbull de 2 anos, carinhosa com crianças, procura um lar especial
          </p>
          <Link href="#historia">
            <Button className="bg-[#e8a87c] hover:bg-[#d28e60] text-white px-8 py-6 text-lg rounded-full transition-all">
              Conheça a História Dela
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
