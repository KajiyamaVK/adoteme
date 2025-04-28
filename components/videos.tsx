export function Videos() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-[#5e4c3e]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Linguiça - Vídeo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
