import { Heart, Star, Sun, Baby } from "lucide-react"

export function Personality() {
  return (
    <section id="personalidade" className="py-16 bg-white rounded-xl shadow-sm">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5e4c3e] mb-10">Quem é a Linguiça?</h2>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Heart className="w-10 h-10 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Amorosa</h3>
            <p className="text-[#5e4c3e]">Extremamente carinhosa e afetuosa com humanos</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Baby className="w-10 h-10 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Adora Crianças</h3>
            <p className="text-[#5e4c3e]">Gentil e paciente com crianças de todas as idades</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Star className="w-10 h-10 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Especial</h3>
            <p className="text-[#5e4c3e]">Uma verdadeira dádiva de Deus em forma de cão</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#f9f6f2] p-4 rounded-full mb-4">
              <Sun className="w-10 h-10 text-[#e8a87c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#5e4c3e] mb-2">Jovem</h3>
            <p className="text-[#5e4c3e]">Com apenas 2 anos, tem muita energia e amor para dar</p>
          </div>
        </div>

        <div className="prose prose-lg mx-auto text-[#5e4c3e]">
          <p className="font-medium">
            A Linguiça é <span className="font-bold">extremamente dócil, carinhosa e gentil com pessoas</span>,
            especialmente com crianças. Como você pode ver nas fotos, ela adora ficar pertinho, dar carinho e receber
            afeto. É verdadeiramente <span className="font-bold">uma dádiva de Deus</span> pela sua doçura com humanos.
          </p>
          <p>
            Importante: devido à sua personalidade dominante com outros animais, a Linguiça precisa ser filha única no
            novo lar. Ela merece toda a atenção e amor exclusivos de sua nova família.
          </p>
        </div>
      </div>
    </section>
  )
}
