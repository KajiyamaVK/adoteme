import { Hero } from "@/components/hero"
import { RescueStory } from "@/components/rescue-story"
import { Personality } from "@/components/personality"
import { Health } from "@/components/health"
import { CurrentGallery } from "@/components/current-gallery"
import { RescueGallery } from "@/components/rescue-gallery"
import { Videos } from "@/components/videos"
import { IdealHome } from "@/components/ideal-home"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f6f2]">
      <Hero />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <RescueStory />
        <Personality />
        <Health />
        <CurrentGallery />
        <RescueGallery />
        <Videos />
        <IdealHome />
        <Contact />
      </div>
    </main>
  )
}
