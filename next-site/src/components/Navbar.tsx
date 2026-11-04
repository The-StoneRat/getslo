import Image from "next/image";

export default function Navbar() {
  return (
    <header className="md:hidden bg-surface-bright/90 backdrop-blur-md sticky top-0 z-50 hairline-b">
      <nav className="flex justify-between items-center w-full px-margin-edge py-gutter-md max-w-[1000px] mx-auto">
        {/* Left: Logo & Brand */}
        <div className="flex-1 flex justify-start items-center">
          <a href="#" className="flex items-center gap-stack-md">
            <Image
              alt="SLO Logo"
              className="h-10 w-auto"
              src="/logo.png"
              width={40}
              height={40}
              priority
            />
            <span
              className="text-xl font-extrabold tracking-tight text-on-surface"
              style={{ fontFamily: "var(--font-roboto-flex)" }}
            >
              Slo<span className="text-[#f2b705]">.</span>
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex justify-center items-center gap-10">
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
            href="#how-it-works"
          >
            How it Works
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
            href="#our-story"
          >
            Our Story
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
            href="#privacy"
          >
            Your Privacy
          </a>
        </div>

        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-end items-center">
          <a href="#download" className="shutter-btn font-label-caps text-label-caps inline-flex items-center justify-center text-center h-10 px-6">
            Download App
          </a>
        </div>
      </nav>
    </header>
  );
}
