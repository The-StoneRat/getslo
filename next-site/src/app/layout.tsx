import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, JetBrains_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "SLO — Digital Slow Living",
  description: "Preserving the tactile era through curated physical prints of your digital memories.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${workSans.variable} ${jetbrainsMono.variable} ${robotoFlex.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden paper-texture">
        {children}
      </body>
    </html>
  );
}
