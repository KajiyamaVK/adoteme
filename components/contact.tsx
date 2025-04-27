import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-6">
          Quer dar um lar para a Linguiça?
        </h2>
        <p className="text-lg text-[#5e4c3e] mb-10 max-w-2xl mx-auto">
          Se você se identificou com a história da Linguiça e acredita que pode oferecer o lar amoroso que ela merece,
          entre em contato conosco. Adotar é um ato de amor que transforma duas vidas: a do animal e a sua.
        </p>

        <Link href="https://wa.me/5511978852047" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 mx-auto transition-all">
            <MessageCircle className="w-6 h-6" />
            Falar com a Mariana no WhatsApp
          </Button>
        </Link>

        <p className="text-sm text-[#5e4c3e] mt-4">
          Clique no botão para iniciar uma conversa sobre a adoção da Linguiça.
        </p>
      </div>
    </section>
  )
}
