import { CheckCircle } from "lucide-react"

export function Health() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-8">Saúde e Cuidados</h2>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-lg text-[#5e4c3e]">Totalmente vacinada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-lg text-[#5e4c3e]">Castrada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-lg text-[#5e4c3e]">Vermifugada</span>
            </div>
          </div>

          <p className="mt-8 text-[#5e4c3e]">
            A Linguiça está em perfeita saúde, pronta para trazer alegria para sua nova família. Todos os cuidados
            veterinários necessários foram realizados para garantir seu bem-estar.
          </p>
        </div>
      </div>
    </section>
  )
}
