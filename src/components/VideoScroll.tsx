const VideoScroll = () => {
  return (
    <section className="py-16" data-animate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 card-soft-glow">
          <video
            src="/demo.mp4"
            muted
            playsInline
            preload="metadata"
            className="w-full h-[360px] object-cover"
            data-scroll-video
          />
        </div>
      </div>
    </section>
  )
}

export default VideoScroll


