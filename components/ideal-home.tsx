import { Home, Heart, Clock, Shield } from "lucide-react"

export function IdealHome() {
  return (
    <section className="py-16 bg-white rounded-xl shadow-sm">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-10">O Que a Linguiça Precisa?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Heart className="w-8 h-8 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Amantes de Cães</h3>
            <p className="text-[#5e4c3e]">Pessoas que realmente amam cães e entendem suas necessidades emocionais</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Home className="w-8 h-8 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Ser Filha Única</h3>
            <p className="text-[#5e4c3e]">Um lar onde ela seja o único animal de estimação, recebendo toda a atenção</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Clock className="w-8 h-8 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Tempo e Atenção</h3>
            <p className="text-[#5e4c3e]">Família que tenha tempo para dar carinho, passeios e atenção diária</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Shield className="w-8 h-8 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Ambiente Seguro</h3>
            <p className="text-[#5e4c3e]">Um lar seguro e amoroso onde ela possa viver tranquila e protegida</p>
          </div>
        </div>

        <div className="mt-10 prose prose-lg mx-auto text-[#5e4c3e]">
          <p>
            A Linguiça merece uma família que entenda sua história e valorize sua personalidade única. Ela retribuirá
            com um amor incondicional e lealdade que só um cão resgatado sabe dar.
          </p>
        </div>
      </div>
    </section>
  )
}
