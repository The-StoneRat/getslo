import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5F3ED] border-t border-[#111111]/5">
      <div className="max-w-[900px] mx-auto px-margin-edge pt-10 pb-10 md:pt-12 md:pb-12 flex flex-col gap-8 md:gap-9">
        
        {/* Top Section: Logo/Tagline and Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full text-center md:text-left">
          
          {/* Left Block: Logo & Tagline directly below it */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <Image
                alt="SLO Logo"
                className="h-10 w-auto"
                src="/logo.png"
                width={40}
                height={40}
              />
              <span
                className="text-xl font-extrabold tracking-tight text-on-surface"
                style={{ fontFamily: "var(--font-roboto-flex)" }}
              >
                Slo<span className="text-[#f2b705]">.</span>
              </span>
            </div>
            <p className="text-sm text-on-surface-variant font-medium tracking-wide">
              Printed memories, delivered beautifully.
            </p>
          </div>

          {/* Center/Right Block: Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 text-sm font-label-caps tracking-wider text-on-surface-variant font-medium uppercase">
            <a href="#how-it-works" className="hover:text-primary transition-colors">
              How it Works
            </a>
            <a href="#our-story" className="hover:text-primary transition-colors">
              Our Story
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </nav>

        </div>

        {/* Subtle Divider Line */}
        <div className="border-t border-[#111111]/5 w-full"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-label-caps tracking-[0.2em] text-on-surface-variant/60 uppercase w-full gap-4 text-center md:text-left">
          <span>© 2026 SLO. All rights reserved.</span>
          
          {/* Right Block: Social Links */}
          <div className="flex items-center gap-4 text-on-surface-variant">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/slo.camera/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:stonerat.who@gmail.com?subject=Notify%20me%20when%20Slo%20for%20iOS%20launches"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
