import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Features() {
  return (
    <section id="how-it-works" className="bg-[#F5F3ED] py-section-gap hairline-t hairline-b overflow-hidden relative">
      {/* Background Spotlight Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(255,255,255,0.45)_0%,_transparent_75%)] pointer-events-none -z-10"></div>
      
      <div className="max-w-[1000px] mx-auto px-margin-edge">
        {/* Section Header */}
        <FadeIn className="mb-16 text-center md:text-left">
          <span className="font-label-caps text-[10px] text-primary tracking-[0.3em] uppercase block mb-3">
            ● THE JOURNEY
          </span>
          <h2 className="font-headline-lg text-[36px] md:text-[48px] text-on-surface mb-4 leading-tight font-extrabold tracking-tight">
            From moment <span className="italic font-normal font-headline-lg">to memory.</span>
          </h2>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A simple process designed to turn digital moments into physical keepsakes.
          </p>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-md md:auto-rows-[320px]">
          
          {/* Card 1: Capture or Import Photos - Dual Mockups Layout */}
          <FadeIn className="md:col-span-8 md:row-span-2 bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-xl shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,27,17,0.08)] hover:border-primary/20 hover:-translate-y-1.5 group flex flex-col justify-between p-8 sm:p-10 md:p-12 pb-0 sm:pb-0 md:pb-0 min-h-[480px] md:h-auto relative overflow-hidden">
            <div className="max-w-md space-y-3 z-10 text-left">
              <span className="font-label-caps text-[10px] md:text-xs text-primary tracking-[0.3em] uppercase block mb-1">
                01 / CAPTURE & IMPORT
              </span>
              <h3 className="font-headline-lg text-3xl sm:text-4xl md:text-[40px] text-on-surface font-extrabold tracking-tight leading-tight">
                Capture or Import Photos
              </h3>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant/90 leading-relaxed max-w-md pt-0.5">
                Take photos with the SLO camera or import photos from your gallery.
              </p>
            </div>

            {/* Overlapping Phone Mockups Container */}
            <div className="relative mt-6 flex justify-center items-end w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-visible select-none pb-0">
              {/* Left Phone: SLO Camera App (nyc4.png) */}
              <div className="relative w-[120px] sm:w-[160px] md:w-[185px] rounded-t-2xl sm:rounded-t-[2.2rem] overflow-hidden border-[3px] sm:border-[4px] border-[#161616] shadow-[0_10px_25px_rgba(0,0,0,0.12)] rotate-[-6deg] translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6 transition-all duration-500 group-hover:rotate-[-10deg] group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:translate-y-2 z-20">
                <Image
                  alt="SLO Camera Interface"
                  className="w-full h-auto"
                  src="/nyc4.png"
                  width={185}
                  height={358}
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 185px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 via-white/10 to-transparent pointer-events-none z-30"></div>
              </div>

              {/* Right Phone: Gallery Import (gallery2.png) */}
              <div className="relative w-[120px] sm:w-[160px] md:w-[185px] rounded-t-2xl sm:rounded-t-[2.2rem] overflow-hidden border-[3px] sm:border-[4px] border-[#161616] shadow-[0_15px_35px_rgba(0,0,0,0.15)] rotate-[6deg] -translate-x-4 sm:-translate-x-6 translate-y-8 sm:translate-y-12 transition-all duration-500 group-hover:rotate-[10deg] group-hover:translate-x-[-1px] sm:group-hover:translate-x-[-2px] group-hover:translate-y-8 z-10">
                <Image
                  alt="Gallery Import Interface"
                  className="w-full h-auto"
                  src="/gallery2.png"
                  width={185}
                  height={358}
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 185px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 via-white/10 to-transparent pointer-events-none z-30"></div>
              </div>
            </div>
          </FadeIn>


          {/* Card 2: Choose a Print Size */}
          <FadeIn className="md:col-span-4 md:row-span-1 bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-xl shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,27,17,0.08)] hover:border-primary/20 hover:-translate-y-1.5 group overflow-hidden flex flex-col justify-start p-8 pb-0 h-auto gap-2">
            <div>
              <span className="font-label-caps text-[9px] text-primary/70 tracking-[0.2em] uppercase block mb-1">
                02 / FORMATS
              </span>
              <h3 className="font-headline-md text-lg mb-2 text-on-surface font-extrabold">Choose a Print Size</h3>
              <p className="font-body-md text-on-surface-variant/90 text-sm leading-relaxed">
                Select your preferred print format (Square or 4x6).
              </p>
            </div>
            
            <div className="relative mt-2 flex justify-center items-end gap-3 w-full h-32 md:h-[140px] overflow-visible select-none">
              {/* Format Selection Phone */}
              <div className="relative w-28 md:w-32 rounded-t-lg md:rounded-t-xl overflow-hidden border-[2px] md:border-[3px] border-[#161616] shadow-md rotate-[-6deg] translate-y-3 md:translate-y-4 transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:translate-y-2">
                <Image
                  alt="Format Selection mockup"
                  className="w-full h-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2RCUJYE93F7oPr72WZVgV5wVa1YnimyVzlp4ejxC4-RpjVK1D2YGPXAHtC6kIhaaxV9okhTjfrHw3A665Pc4xc_dRPsYuY5sNojlQek38rRdoJWRfghObvC7O4sPbNJ-BODGk9dySupWOTwc4mRxg7YCeoKteAqZQfaZadE_X2qok1O8kuquv-gvCBbh3ga3kDKl_2Q_apoGLHsrO-_TFUvwg0TuE3wODRlhfr2KVpmnwkE1qlh2mM6y2lmBbE94TcOFbM2xJxLI"
                  width={128}
                  height={274}
                />
              </div>
              
              {/* Physical Print */}
              <div className="w-28 h-28 md:w-32 md:h-32 bg-[#FFFDFB] p-1 pb-4 rounded-sm shadow-md border border-[#1f1b11]/5 rotate-[8deg] translate-y-2 md:translate-y-3 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:translate-y-1 -ml-4 md:-ml-5 relative z-10">
                <div className="w-full h-full overflow-hidden rounded-[1px] bg-[#F5F3ED]">
                  <Image
                    alt="Physical print format sample"
                    className="w-full h-full object-cover"
                    src="/sqaure3.png"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Secure Cloud Sync */}
          <FadeIn className="md:col-span-4 md:row-span-1 bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-xl shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,27,17,0.08)] hover:border-primary/20 hover:-translate-y-1.5 group flex items-center justify-between p-8 relative">
            <div className="z-10">
              <span className="font-label-caps text-[9px] text-primary/70 tracking-[0.2em] uppercase block mb-1">
                03 / SECURE SYNC
              </span>
              <h3 className="font-headline-md text-lg mb-2 text-on-surface font-extrabold">Secure Cloud Sync</h3>
              <p className="font-body-md text-on-surface-variant/90 text-sm leading-relaxed max-w-[170px]">
                Selected photos are securely synced and prepared for printing.
              </p>
            </div>
            
            <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
              {/* Concentric rotating/pulsing outline rings */}
              <div className="absolute inset-0 border border-primary/10 rounded-full scale-125 animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-1.5 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(245,197,24,0.15)_0%,_transparent_70%)] pointer-events-none -z-10 rounded-full scale-150 animate-pulse"></div>
              
              {/* Perfectly centered logo container with visual weight adjustments */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative group transition-transform duration-500 group-hover:scale-110 pointer-events-auto">
                  <Image
                    alt="SLO Logo"
                    className="w-[76px] h-[76px] relative z-10 filter drop-shadow-[0_3px_10px_rgba(0,0,0,0.05)] select-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAr8qZb8E18UwL666AN732BGCzX5U_spJhlkBM0VjF6iE9xu1HVjh02uEItga-hHMBp7_FfXeUrO5Y0rcdHsA9iXNZlUbSygbBIZ3C9-uF73jz5bG6_xa6mA6I8ob9RVsjWhqjZCWSIWxFiSPMMmEYoaC1Na0CRnK7zsirCiM6625AfyaDM6jha0xtWxEmc-s_2it4wF8TRzt6fRK8iRKlDMAHOvPVPgMsZJ_qV6OyqLMP_Eb0yq3LO8gOrLk4fpeiJORbbHVIC0M"
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 4: Print With Care */}
          <FadeIn className="md:col-span-6 md:row-span-1 bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-xl shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,27,17,0.08)] hover:border-primary/20 hover:-translate-y-1.5 group overflow-hidden flex items-center py-6 px-6 md:p-8 gap-3 md:gap-6 justify-between">
            <div className="flex-1">
              <span className="font-label-caps text-[9px] text-primary/70 tracking-[0.2em] uppercase block mb-1">
                04 / PRODUCTION
              </span>
              <h3 className="font-headline-md text-lg mb-2 text-on-surface font-extrabold">Print With Care</h3>
              <p className="font-body-md text-on-surface-variant/90 text-sm leading-relaxed max-w-[200px] md:max-w-xs">
                Photos are printed on premium archival-quality paper with accurate colors and attention to detail.
              </p>
            </div>
            
            <div className="w-32 h-24 md:w-44 md:h-32 bg-[#FFFDFB] p-1 md:p-1.5 pb-4 md:pb-5 rounded-sm shadow-[0_15px_30px_rgba(31,27,17,0.08)] border border-[#1f1b11]/5 rotate-[-3deg] transition-all duration-500 group-hover:rotate-[0deg] group-hover:scale-105 relative flex-shrink-0 select-none">
              <div className="w-full h-full overflow-hidden rounded-[1px] bg-[#F5F3ED] relative">
                <Image
                  alt="Printed photos"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/print3.png"
                  fill
                  sizes="176px"
                />
              </div>
            </div>
          </FadeIn>

          {/* Card 5: Carefully Packaged */}
          <FadeIn className="md:col-span-6 md:row-span-1 bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-xl shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,27,17,0.08)] hover:border-primary/20 hover:-translate-y-1.5 group overflow-hidden flex items-center py-6 px-6 md:p-8 gap-3 md:gap-6 justify-between flex-row-reverse">
            <div className="flex-1">
              <span className="font-label-caps text-[9px] text-primary/70 tracking-[0.2em] uppercase block mb-1">
                05 / PACKAGING
              </span>
              <h3 className="font-headline-md text-lg mb-2 text-on-surface font-extrabold">Carefully Packaged</h3>
              <p className="font-body-md text-on-surface-variant/90 text-sm leading-relaxed max-w-[200px] md:max-w-xs">
                Prints are safely packed to protect them during shipping.
              </p>
            </div>
            
            <div className="w-32 h-24 md:w-44 md:h-32 bg-[#FFFDFB] p-1 md:p-1.5 pb-4 md:pb-5 rounded-sm shadow-[0_15px_30px_rgba(31,27,17,0.08)] border border-[#1f1b11]/5 rotate-[-3deg] transition-all duration-500 group-hover:rotate-[0deg] group-hover:scale-105 relative flex-shrink-0 select-none">
              <div className="w-full h-full overflow-hidden rounded-[1px] bg-[#F5F3ED] relative">
                <Image
                  alt="Carefully packaged photo prints mockup"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/packaging_real.jpg"
                  fill
                  sizes="176px"
                />
              </div>
            </div>
          </FadeIn>

          {/* Card 6: Delivered To Your Door */}
          <FadeIn className="md:col-span-12 md:row-span-1 bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-xl shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(31,27,17,0.08)] hover:border-primary/20 hover:-translate-y-1.5 group overflow-hidden relative flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-10 md:w-1/2 z-10">
              <span className="font-label-caps text-[9px] text-primary/70 tracking-[0.2em] uppercase block mb-2">
                06 / DELIVERY
              </span>
              <h3 className="font-headline-md text-2xl mb-4 font-extrabold">Delivered To Your Door</h3>
              <p className="font-body-md text-on-surface-variant/90 max-w-md leading-relaxed">
                Finished prints arrive at the customer&apos;s doorstep ready to hold, frame, and share.
              </p>
            </div>
            
            <div className="md:w-1/2 h-full relative min-h-[220px] md:min-h-[320px] w-full overflow-hidden select-none">
              <Image
                alt="Unboxing experience"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                src="/delivery_real.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFB] via-[#FFFDFB]/25 via-15% to-transparent md:bg-gradient-to-r md:from-[#FFFDFB] md:via-[#FFFDFB]/10 md:via-20% md:to-transparent"></div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
