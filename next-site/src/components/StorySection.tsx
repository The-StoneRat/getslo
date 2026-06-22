import Image from "next/image";
import FadeIn from "./FadeIn";

export default function StorySection() {
  return (
    <>
      {/* Storytelling Section */}
      <section id="our-story" className="bg-[#F7F5F0] pt-12 md:pt-20 pb-16 md:pb-32 overflow-hidden relative">
        {/* Gallery Spotlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5)_0%,_rgba(255,255,255,0)_75%)] pointer-events-none"></div>
        
        <div className="max-w-[1000px] mx-auto px-margin-edge relative z-10">
          {/* Centered Heading */}
          <FadeIn className="text-center mb-8 md:mb-16 max-w-2xl mx-auto space-y-4">
            <span className="font-label-caps text-[10px] text-primary tracking-[0.3em] uppercase block">
              ● OUR PHILOSOPHY
            </span>
            <h2 className="font-headline-lg text-[32px] sm:text-[38px] md:text-[48px] text-on-surface leading-tight tracking-tight font-extrabold">
              Digital memories become <span className="font-normal italic">real memories.</span>
            </h2>
            <p className="font-body-md text-base md:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed pt-2">
              Slo helps you reclaim the tactile era by turning your digital moments into beautiful physical prints, delivered straight to your door.
            </p>
          </FadeIn>

          {/* Triptych Gallery Grid (Desktop/Tablet) */}
          <div className="hidden md:grid grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto mt-8">
            
            {/* Print 1 (Left) */}
            <FadeIn className="bg-surface-bright p-3.5 pb-6 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-outline-variant/15 transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]">
              <div className="relative aspect-square border border-outline-variant/10 overflow-hidden bg-[#FAF8F5] mb-4">
                <Image
                  alt="Friends photo print"
                  className="object-cover"
                  src="/freind43.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  priority
                />
              </div>
              <div className="text-[9px] font-label-caps tracking-widest text-on-surface-variant/40 text-center uppercase">
                No. 32 / Together
              </div>
            </FadeIn>

            {/* Print 2 (Center) */}
            <FadeIn className="bg-surface-bright p-3.5 pb-6 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-outline-variant/15 transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]">
              <div className="relative aspect-square border border-outline-variant/10 overflow-hidden bg-[#FAF8F5] mb-4">
                <Image
                  alt="Plane view print"
                  className="object-cover"
                  src="/planeview.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  priority
                />
              </div>
              <div className="text-[9px] font-label-caps tracking-widest text-on-surface-variant/40 text-center uppercase font-bold">
                No. 04 / Horizon
              </div>
            </FadeIn>

            {/* Print 3 (Right) */}
            <FadeIn className="bg-surface-bright p-3.5 pb-6 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-outline-variant/15 transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]">
              <div className="relative aspect-square border border-outline-variant/10 overflow-hidden bg-[#FAF8F5] mb-4">
                <Image
                  alt="Sunshine photo print"
                  className="object-cover"
                  src="/sunfrond.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  priority
                />
              </div>
              <div className="text-[9px] font-label-caps tracking-widest text-on-surface-variant/40 text-center uppercase font-medium">
                No. 05 / Sunshine
              </div>
            </FadeIn>

          </div>

          {/* Interactive Print Stack (Mobile Only) */}
          <FadeIn className="block md:hidden w-full flex justify-center items-center h-[330px] relative mt-4">
            <div className="relative w-full max-w-[310px] h-full flex items-center justify-center group">
              
              {/* Print 1 (Back left) */}
              <div className="absolute w-[170px] h-[210px] bg-white p-2.5 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E2E2E2] -rotate-12 -translate-x-12 -translate-y-8 transition-all duration-700 ease-out group-hover:-rotate-[16deg] group-hover:-translate-x-20 group-hover:-translate-y-14 group-hover:scale-105 z-10">
                <div className="relative w-full aspect-square border border-[#E8E8E8] overflow-hidden bg-[#F7F5F0] mb-3">
                  <Image
                    alt="Friends photo print"
                    className="object-cover"
                    src="/freind43.png"
                    fill
                    sizes="150px"
                  />
                </div>
                <div className="text-[8px] font-label-caps tracking-widest text-on-surface-variant/40 text-center uppercase">
                  No. 32 / Together
                </div>
              </div>

              {/* Print 2 (Back right) */}
              <div className="absolute w-[170px] h-[210px] bg-white p-2.5 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-[#E2E2E2] rotate-12 translate-x-14 -translate-y-6 transition-all duration-700 ease-out group-hover:rotate-[18deg] group-hover:translate-x-22 group-hover:-translate-y-10 group-hover:scale-105 z-10">
                <div className="relative w-full aspect-square border border-[#E8E8E8] overflow-hidden bg-[#F7F5F0] mb-3">
                  <Image
                    alt="Sunshine photo print"
                    className="object-cover"
                    src="/sunfrond.png"
                    fill
                    sizes="150px"
                  />
                </div>
                <div className="text-[8px] font-label-caps tracking-widest text-on-surface-variant/40 text-center uppercase">
                  No. 05 / Sunshine
                </div>
              </div>

              {/* Print 3 (Front Center) */}
              <div className="absolute w-[185px] h-[225px] bg-white p-3 rounded-sm shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-[#D5D5D5] transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-105 z-20">
                <div className="relative w-full aspect-square border border-[#E8E8E8] overflow-hidden bg-[#F7F5F0] mb-3">
                  <Image
                    alt="Plane view print"
                    className="object-cover"
                    src="/planeview.png"
                    fill
                    sizes="165px"
                  />
                </div>
                <div className="text-[9px] font-label-caps tracking-widest text-on-surface-variant/50 text-center uppercase font-bold font-body-md">
                  No. 04 / Horizon
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* App Showcase Rows */}
      <section className="bg-[#F5F3ED] py-24 md:py-32 overflow-hidden border-t border-[#111111]/5">
        <div className="max-w-[1000px] mx-auto px-margin-edge">
          
          {/* Row 1: Curated by You */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 mb-16 md:mb-32">
            <FadeIn className="w-full md:w-1/2 space-y-6">
              <span className="font-label-caps text-xs text-primary tracking-[0.2em] block uppercase">
                ● CURATED BY YOU
              </span>
              <h2 className="font-headline-lg text-[32px] sm:text-[38px] md:text-[44px] leading-tight text-on-surface font-extrabold tracking-tight">
                A deliberate <span className="font-normal italic">selection process.</span>
              </h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md">
                In an era of infinite scroll and digital clutter, SLO invites you to pause. Curate a tactile, physical archive of your most meaningful moments—crafted to outlive the cloud.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3.5 font-body-md text-on-surface">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-on-surface-variant/90">Intentional curation — keeping only the stories that define your journey.</span>
                </li>
                <li className="flex items-start gap-3.5 font-body-md text-on-surface">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-on-surface-variant/90">Timeless quality — printed on premium, archival-grade paper stocks.</span>
                </li>
              </ul>
            </FadeIn>
            
            <FadeIn className="w-full md:w-1/2 flex justify-center items-center relative py-6 md:py-10">
              {/* Premium abstract background frame */}
              <div className="absolute w-[280px] sm:w-[340px] md:w-[400px] aspect-[3/4] -z-10 rounded-[2rem] overflow-hidden opacity-90 shadow-[0_15px_40px_rgba(31,27,17,0.04)] border border-[#1f1b11]/5">
                <Image
                  alt="Minimalist abstract gold and cream background"
                  src="/deliberate_bg.webp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
                />
              </div>
              
              <div className="relative w-[190px] sm:w-[220px] md:w-[270px] aspect-[904/1740] rounded-[2.5rem] overflow-hidden shadow-[0_25px_55px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1.5 z-10">
                <Image
                  alt="iPhone mockup showing curation screen"
                  className="object-cover"
                  src="/msjdjjd.png"
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 270px"
                  priority
                />
              </div>
            </FadeIn>
          </div>

          {/* Row 2: Delivered to Your Door */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
            <FadeIn className="w-full md:w-1/2 flex justify-center items-center relative py-6 md:py-10">
              {/* Premium abstract background frame */}
              <div className="absolute w-[280px] sm:w-[340px] md:w-[400px] aspect-[3/4] -z-10 rounded-[2rem] overflow-hidden opacity-90 shadow-[0_15px_40px_rgba(31,27,17,0.04)] border border-[#1f1b11]/5">
                <Image
                  alt="Minimalist abstract terracotta and cream background"
                  src="/jfuee.png"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
                />
              </div>
              
              <div className="relative w-[190px] sm:w-[220px] md:w-[270px] aspect-[904/1740] rounded-[2.5rem] overflow-hidden shadow-[0_25px_55px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1.5 z-10">
                <Image
                  alt="iPhone mockup displaying camera interface"
                  className="object-cover"
                  src="/floiif .png"
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 270px"
                  priority
                />
              </div>
            </FadeIn>
            
            <FadeIn className="w-full md:w-1/2 space-y-6">
              <span className="font-label-caps text-xs text-primary tracking-[0.2em] block uppercase">
                ● DELIVERED TO YOUR DOOR
              </span>
              <h2 className="font-headline-lg text-[32px] sm:text-[38px] md:text-[44px] leading-tight text-on-surface font-extrabold tracking-tight">
                The joy of the <span className="font-normal italic">physical.</span>
              </h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md">
                There is something irreplaceable about holding a photograph in your hands. The texture, the smell of the ink, the way it catches the light.
              </p>
              <div className="pt-4">
                <div className="bg-[#FFFDFB] p-6 md:p-8 rounded-xl shadow-[0_12px_30px_rgba(31,27,17,0.03)] border border-[#1f1b11]/8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_45px_rgba(31,27,17,0.06)] hover:-translate-y-1 group">
                  {/* Decorative double quote icon */}
                  <div className="absolute right-6 top-4 opacity-5 text-primary text-6xl font-serif select-none pointer-events-none">
                    “
                  </div>
                  <p className="italic font-headline-sm text-lg md:text-xl text-on-surface mb-4 leading-relaxed relative z-10">
                    &quot;The prints from SLO feel like artifacts from a better time. They aren&apos;t just photos; they&apos;re heirlooms.&quot;
                  </p>
                  <span className="font-label-caps text-[10px] text-on-surface-variant/70 tracking-wider font-semibold block">
                    — Elena V., Photographer
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </section>
      
      {/* Why SLO Exists (Philosophy / Manifesto) */}
      <section className="bg-[#F5F3ED] py-24 md:py-32 overflow-hidden border-t border-[#111111]/5 relative">
        <div className="max-w-[1000px] mx-auto px-margin-edge flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          
          {/* Left Column: Framed Archival Print (Artwork Anchor) */}
          <FadeIn className="w-full md:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Elegant soft shadow backglow */}
              <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_transparent_75%)] pointer-events-none z-0"></div>
              
              {/* Framed Polaroid Print */}
              <div className="relative z-10 w-60 h-76 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-[#FFFDFB] p-4 pb-12 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.06),0_2px_5px_rgba(0,0,0,0.03)] border border-[#1f1b11]/8 -rotate-1 group-hover:rotate-0 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                {/* Print Image */}
                <div className="relative w-full h-[82%] overflow-hidden rounded-[1px] bg-[#EAE8E2] border border-[#1f1b11]/5">
                  <Image
                    alt="Archival print sample - Sunset"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/tree32.png"
                    fill
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                </div>
                {/* Label text at bottom */}
                <div className="mt-4 flex flex-col items-center gap-0.5 text-center select-none">
                  <span className="font-label-caps text-[8px] tracking-[0.2em] text-on-surface-variant/40 uppercase">
                    SLO ARCHIVAL PRINT
                  </span>
                  <span className="font-serif text-[10px] text-on-surface-variant/80 italic font-medium">
                    No. 32 / Sunset Rebellion
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Title & Detailed Prose */}
          <FadeIn className="w-full md:w-7/12 flex flex-col items-start text-left space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="font-label-caps text-xs text-primary tracking-[0.2em] block uppercase font-bold">
                ● OUR MANIFESTO
              </span>
              <h2 className="font-headline-lg text-[26px] sm:text-[32px] md:text-[38px] leading-tight text-on-surface font-extrabold tracking-tight">
                We believe in slowing down. In an era of digital noise, the physical is <span className="italic font-normal font-headline-lg">an act of rebellion.</span>
              </h2>
            </div>

            <div className="space-y-5 text-on-surface-variant">
              <p className="font-body-lg text-sm sm:text-base leading-relaxed">
                <span className="text-primary font-bold tracking-wider text-[11px] block mb-2 font-label-caps font-medium">I. THE NOSTALGIA</span>
                Digital photography made us take more photos, but value them less. We store thousands of images in clouds we never visit and on drives we eventually lose.
              </p>
              <p className="font-body-lg text-sm sm:text-base leading-relaxed">
                SLO was born from a desire to reclaim the tactile era. To make the fleeting permanent. To turn pixels back into paper.
              </p>
              <p className="font-body-lg text-sm sm:text-base leading-relaxed">
                Our process is slow by design. We don&apos;t want you to print everything. We want you to choose what truly matters.
              </p>
            </div>
            
            <div className="pt-4 flex items-center gap-4">
              <div className="h-[1.5px] w-10 bg-primary"></div>
              <span className="font-label-caps text-xs text-primary/80 tracking-widest uppercase font-bold">THE SLO TEAM</span>
            </div>
          </FadeIn>

        </div>
      </section>
      
    </>
  );
}
