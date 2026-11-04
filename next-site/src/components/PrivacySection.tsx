import FadeIn from "./FadeIn";

export default function PrivacySection() {
  return (
    <section id="privacy" className="bg-[#EFEFEA] py-section-gap w-full overflow-hidden border-b border-[#111111]/5">
      <div className="max-w-[1000px] mx-auto px-margin-edge">
        <FadeIn className="bg-[#FFFDFB] border border-[#1f1b11]/8 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto shadow-[0_8px_30px_rgba(31,27,17,0.03)] transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(31,27,17,0.08)] hover:-translate-y-1.5 group flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          
          {/* Left Column: Visual statement */}
          <div className="w-full md:w-5/12 space-y-6 flex-shrink-0">
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl md:rounded-2xl bg-primary/5 text-primary border border-primary/10 overflow-hidden shadow-inner flex-shrink-0">
                <span className="material-symbols-outlined text-2xl md:text-3xl">verified_user</span>
                {/* Subtle animate-pulse ring */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-primary/20 scale-100 animate-ping pointer-events-none opacity-50"></div>
              </div>
              
              <h3 className="flex-1 md:flex-initial font-headline-md text-2xl md:text-3xl text-on-surface leading-tight font-extrabold tracking-tight">
                Your privacy, <span className="italic font-normal font-headline-lg block md:inline">preserved.</span>
              </h3>
            </div>
            
            <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
              We design our systems under zero-knowledge principles. We are here to print your memories, not to track them.
            </p>
          </div>

          {/* Right Column: Three Trust Bullets */}
          <div className="w-full md:w-7/12 space-y-6 md:space-y-8">
            {/* Bullet 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EFEFEA] flex items-center justify-center border border-[#1f1b11]/5 transition-colors duration-300 group-hover:bg-primary/5">
                <span className="material-symbols-outlined text-lg text-primary">lock</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline-sm text-base text-on-surface font-bold tracking-tight">End-to-End Encryption</h4>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed">
                  We use end-to-end encryption for your uploads. Your photos are fully protected in transit and at rest.
                </p>
              </div>
            </div>

            {/* Bullet 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EFEFEA] flex items-center justify-center border border-[#1f1b11]/5 transition-colors duration-300 group-hover:bg-primary/5">
                <span className="material-symbols-outlined text-lg text-primary">print</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline-sm text-base text-on-surface font-bold tracking-tight">Automated Printing & Cutting</h4>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed">
                  Our custom print pipeline is automated. Human eyes only see your photos briefly during the physical printing and cutting stage to ensure quality.
                </p>
              </div>
            </div>

            {/* Bullet 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EFEFEA] flex items-center justify-center border border-[#1f1b11]/5 transition-colors duration-300 group-hover:bg-primary/5">
                <span className="material-symbols-outlined text-lg text-primary">delete_forever</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline-sm text-base text-on-surface font-bold tracking-tight">30-Day Permanent Purge</h4>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed">
                  Once your physical keepsakes are printed and delivered, all high-resolution digital files are automatically purged from our servers.
                </p>
              </div>
            </div>
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
}
