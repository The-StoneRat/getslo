import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 w-full overflow-hidden bg-[#F5F3ED]">
      <div className="max-w-[900px] mx-auto px-margin-edge flex flex-col items-center w-full relative">
        {/* Centered Typography & CTA block */}
        <FadeIn className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 z-10">
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary text-[10px] tracking-[0.3em] font-label-caps uppercase">
              ● PRINTED MEMORIES
            </span>
          </div>
          
          {/* Large Centered Headline */}
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-on-surface font-extrabold leading-[1.1] tracking-tight">
            Your photos deserve more than a gallery.
          </h1>
          
          {/* Supporting Subheadline */}
          <p className="font-body-lg text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Capture meaningful moments and receive beautiful physical prints delivered to your door.
          </p>
          
          {/* Primary and Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full">
            <a
              href="#download"
              className="bg-[#111111] text-[#F7F5F0] px-8 py-4 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-opacity cursor-pointer text-center inline-block min-w-[200px]"
            >
              Download App
            </a>
            <a
              href="#how-it-works"
              className="border border-[#111111]/20 px-8 py-4 rounded-full font-label-caps text-label-caps text-[#111111] hover:bg-[#111111]/5 transition-colors cursor-pointer text-center inline-block min-w-[200px]"
            >
              See How It Works
            </a>
          </div>
        </FadeIn>

        {/* Product Showcase (Unified 3D Layered Mockup & Prints Collage) */}
        <FadeIn className="w-full relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center mt-12 md:mt-16 max-w-[320px] sm:max-w-[550px] md:max-w-[750px] mx-auto z-10">
          
          {/* Subtle warm brand gold spotlight backglow */}
          <div className="absolute -inset-10 sm:-inset-20 bg-[radial-gradient(circle_at_center,_rgba(242,183,5,0.04)_0%,_transparent_75%)] pointer-events-none z-0 rounded-full scale-90 animate-pulse" style={{ animationDuration: '10s' }}></div>          {/* 1. Left-Behind Print: Dog (Square Polaroid, z-10) */}
          <div className="absolute z-10 top-[12%] sm:top-[15%] left-[-4%] sm:left-[2%] md:left-[6%] floating-photo photo-stack-1">
            <div className="w-[75px] sm:w-[120px] md:w-[150px] h-auto bg-[#FFFDFB] p-1.5 sm:p-2 md:p-3 pb-3 sm:pb-5 md:pb-7 rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-[#1f1b11]/5 transform -rotate-[15deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-45 cursor-pointer flex flex-col gap-1 sm:gap-1.5 md:gap-2 group/card1">
              <div className="relative w-full aspect-square overflow-hidden rounded-[1px] bg-[#F5F3ED] border border-[#1f1b11]/5">
                <Image
                  alt="Happy dog photo print"
                  className="object-cover transition-transform duration-700 group-hover/card1:scale-105"
                  src="/dog4.png"
                  fill
                  sizes="(max-width: 640px) 75px, (max-width: 768px) 120px, 150px"
                />
                {/* Gloss / Sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 mix-blend-overlay pointer-events-none z-10"></div>
              </div>
              {/* Polaroid Caption */}
              <div className="text-center text-[5px] sm:text-[7px] md:text-[9px] font-serif text-[#807660]/80 italic select-none leading-none">
                No. 04 / Pets
              </div>
            </div>
          </div>

          {/* 2. Right-Behind Print: Sunset Tree (Square Polaroid, z-10) */}
          <div className="absolute z-10 top-[10%] sm:top-[12%] right-[-4%] sm:right-[2%] md:right-[6%] floating-photo photo-stack-2">
            <div className="w-[75px] sm:w-[120px] md:w-[150px] h-auto bg-[#FFFDFB] p-1.5 sm:p-2 md:p-3 pb-3 sm:pb-5 md:pb-7 rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-[#1f1b11]/5 transform rotate-[12deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-45 cursor-pointer flex flex-col gap-1 sm:gap-1.5 md:gap-2 group/card2">
              <div className="relative w-full aspect-square overflow-hidden rounded-[1px] bg-[#F5F3ED] border border-[#1f1b11]/5">
                <Image
                  alt="Friends photo polaroid print"
                  className="object-cover transition-transform duration-700 group-hover/card2:scale-105"
                  src="/frinfj4.png"
                  fill
                  sizes="(max-width: 640px) 75px, (max-width: 768px) 120px, 150px"
                />
                {/* Gloss / Sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 mix-blend-overlay pointer-events-none z-10"></div>
              </div>
              {/* Polaroid Caption */}
              <div className="text-center text-[5px] sm:text-[7px] md:text-[9px] font-serif text-[#807660]/80 italic select-none leading-none">
                No. 32 / Together
              </div>
            </div>
          </div>

          {/* 3. Centered Phone Mockup (z-20) */}
          <div className="relative z-20 w-[150px] sm:w-[220px] md:w-[280px] museum-shadow rounded-[2rem] sm:rounded-[2.8rem] md:rounded-[3.2rem] border-[4px] sm:border-[5px] md:border-[6px] border-[#111111] overflow-hidden bg-black transition-transform duration-500 hover:scale-[1.02] group/phone">
            <Image
              alt="A premium, sleek iPhone mockup showing the SLO app interface with a kitten photo."
              className="w-full h-auto z-10"
              src="/cat3.png"
              width={280}
              height={543}
              priority
            />
            {/* Shifting glass glare sheen effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 via-white/15 to-transparent -translate-x-full group-hover/phone:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-30"></div>
          </div>

          {/* 4. Left-Front Print: Candid Nostalgic (Portrait Polaroid, z-30 on desktop, z-10 on mobile) */}
          <div className="absolute z-10 sm:z-30 bottom-[8%] sm:bottom-[10%] left-[2%] sm:left-[8%] md:left-[12%] floating-photo photo-stack-3">
            <div className="w-[75px] sm:w-[120px] md:w-[150px] h-auto bg-[#FFFDFB] p-1.5 sm:p-2 md:p-3 pb-3 sm:pb-5 md:pb-7 rounded-sm shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_45px_rgba(0,0,0,0.15)] border border-[#1f1b11]/5 transform -rotate-[8deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-45 cursor-pointer flex flex-col gap-1 sm:gap-1.5 md:gap-2 group/card3">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1px] bg-[#F5F3ED] border border-[#1f1b11]/5">
                <Image
                  alt="Candid nostalgic photo print"
                  className="object-cover transition-transform duration-700 group-hover/card3:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARCGkzV8vTRxr9sTN5Tq_EPD8OPQTa7ZvOu6gMAr2V7RSQif_pc8eGP_nK9lpdhf9Tll5ArqRJg3jdQouqkw1jMzUyWc1BvcmiHu54pTersAY5riYMGpMBSpnC-dIUhIDeOFnbrM8TxdhYuZ1I42nF59LmKpq4Q84a0Bmql4t8eskp_e3w6bAzU3tcgLGj6aAkqTCiG9biL096PGlbPTGWZFbAEGJ4GkN6itscGdrOS7i02sprdn1PEts7Ui2kNzdbzwU6b4XKjlQ"
                  fill
                  sizes="(max-width: 640px) 75px, (max-width: 768px) 120px, 150px"
                />
                {/* Gloss / Sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 mix-blend-overlay pointer-events-none z-10"></div>
              </div>
              {/* Polaroid Caption */}
              <div className="text-center text-[5px] sm:text-[7px] md:text-[9px] font-serif text-[#807660]/80 italic select-none leading-none">
                No. 18 / Tokyo
              </div>
            </div>
          </div>

          {/* 5. Right-Front Print: Night Architecture (Square Polaroid, z-30 on desktop, z-10 on mobile) */}
          <div className="absolute z-10 sm:z-30 bottom-[10%] sm:bottom-[12%] right-[2%] sm:right-[8%] md:right-[12%] floating-photo photo-stack-4">
            <div className="w-[85px] sm:w-[140px] md:w-[180px] h-auto bg-[#FFFDFB] p-1.5 sm:p-2 md:p-3 pb-3 sm:pb-5 md:pb-7 rounded-sm shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_45px_rgba(0,0,0,0.15)] border border-[#1f1b11]/5 transform rotate-[10deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-45 cursor-pointer flex flex-col gap-1 sm:gap-1.5 md:gap-2 group/card4">
              <div className="relative w-full aspect-square overflow-hidden rounded-[1px] bg-[#F5F3ED] border border-[#1f1b11]/5">
                <Image
                  alt="Night city traffic light trails polaroid print"
                  className="object-cover transition-transform duration-700 group-hover/card4:scale-105"
                  src="/nightar.png"
                  fill
                  sizes="(max-width: 640px) 85px, (max-width: 768px) 140px, 180px"
                />
                {/* Gloss / Sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 mix-blend-overlay pointer-events-none z-10"></div>
              </div>
              {/* Polaroid Caption */}
              <div className="text-center text-[5px] sm:text-[7px] md:text-[9px] font-serif text-[#807660]/80 italic select-none leading-none">
                No. 09 / City
              </div>
            </div>
          </div>

        </FadeIn>
      </div>

    </section>
  );
}
