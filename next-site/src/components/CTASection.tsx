import FadeIn from "./FadeIn";

export default function CTASection() {
  return (
    <section id="download" className="relative py-40 overflow-hidden bg-[#111111] text-[#F7F5F0]">
      {/* Subtle background grain overlay for dark section */}
      <div className="absolute inset-0 opacity-10 pointer-events-none paper-texture mix-blend-overlay"></div>
      <div className="relative z-10 max-w-[1000px] mx-auto px-margin-edge text-center">
        <FadeIn className="flex flex-col items-center">
          <h2 className="font-display-lg text-[42px] sm:text-[48px] md:text-[54px] leading-[1.15] mb-12 max-w-4xl mx-auto">
            Ready to hold your memories?
          </h2>
          <div className="flex flex-col items-center gap-12 w-full">
            {/* Large Premium Store Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-3xl mx-auto">
              {/* Apple App Store */}
              <a
                className="flex items-center gap-3 bg-white text-[#111111] px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10 w-full sm:w-56 justify-center museum-shadow"
                href="#"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="font-label-caps text-[10px] tracking-widest uppercase opacity-60 mb-1">
                    Download on the
                  </span>
                  <span className="font-body-lg font-bold text-base">App Store</span>
                </div>
              </a>
              {/* Google Play */}
              <a
                className="flex items-center gap-3 bg-white text-[#111111] px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10 w-full sm:w-56 justify-center museum-shadow"
                href="https://play.google.com/store/apps/details?id=art.stonerat.slo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.2 60.1 60.1L104.6 499z"></path>
                </svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="font-label-caps text-[10px] tracking-widest uppercase opacity-60 mb-1">
                    Get it on
                  </span>
                  <span className="font-body-lg font-bold text-base">Google Play</span>
                </div>
              </a>
            </div>
            <div className="pt-4">
              <span className="font-label-caps text-xs tracking-[0.25em] opacity-40 uppercase">
                Available on iOS &amp; Android
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
