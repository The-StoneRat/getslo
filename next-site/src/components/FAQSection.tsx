"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does Slo work?",
    answer: "It's simple. You select a digital pack of frames inside the app, take photos at your own pace, and once your pack is full, we print them on high-quality archival paper and deliver real prints to your door. No subscription, no rush.",
  },
  {
    question: "What is the quality of the prints?",
    answer: "We print on premium, heavy-weight archival-quality paper stocks using professional pigment-based inks. The prints are designed to last for generations without fading, offering a rich tactile feel.",
  },
  {
    question: "How long does shipping take?",
    answer: "Once a pack is filled, we process and print your order within 24-48 hours. Shipping typically takes 3 to 7 business days depending on your location. We ship in protective, premium packaging to ensure they arrive in perfect condition.",
  },
  {
    question: "Is my personal photo data secure?",
    answer: "Absolutely. Privacy is built into our core philosophy. Your files are encrypted in transit and at rest. Our printing pipeline is fully automated. Human eyes only see your photos briefly during the physical printing and cutting stage to ensure quality control. Once printed, high-resolution files are purged from our servers within 30 days.",
  },
  {
    question: "Can I import photos from my camera roll?",
    answer: "Yes! While Slo is designed to encourage taking intentional live photos through our custom camera interface, you can also import your existing memories directly from your photo library into your active pack.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#EFEFEA] py-section-gap border-t border-b border-[#111111]/5">
      <div className="max-w-[880px] mx-auto px-margin-edge flex flex-col md:flex-row gap-12 md:gap-16 justify-between">
        
        {/* Left Side: Large Title */}
        <FadeIn className="w-full md:w-[340px] flex flex-col justify-start space-y-6">
          <div className="space-y-4">
            <span className="font-label-caps text-xs text-primary tracking-[0.2em] block uppercase">
              ● HAVE QUESTIONS?
            </span>
            <h2 className="font-headline-lg text-4xl md:text-[46px] text-on-surface font-extrabold leading-[1.1] tracking-tight">
              Frequently <span className="italic font-normal font-headline-lg">Asked Questions.</span>
            </h2>
          </div>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant/90 leading-relaxed">
            Everything you need to know about the SLO camera, our archival print quality, and delivery times.
          </p>
          <div className="pt-4 hidden md:block">
            <p className="font-body-md text-xs text-on-surface-variant/70">
              Can't find your answer?
            </p>
            <a href="mailto:support@getslo.cam" className="text-primary hover:underline font-label-caps text-xs tracking-wider font-bold mt-1 block">
              GET IN TOUCH →
            </a>
          </div>
        </FadeIn>

        {/* Right Side: Accordion Questions */}
        <div className="w-full md:w-[480px] space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} className={`transition-all duration-300 ease-out ${
                isOpen 
                  ? "bg-[#FFFDFB] border border-[#1f1b11]/8 rounded-2xl p-6 shadow-[0_12px_30px_rgba(31,27,17,0.03)] -mx-4 md:-mx-6" 
                  : "border-b border-[#1f1b11]/8 pb-4"
              }`}>
                <button
                  className="w-full flex justify-between items-center text-left py-2 font-headline-sm text-lg md:text-xl text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold transition-colors duration-300 ${isOpen ? "text-primary" : "text-on-surface"}`}>{item.question}</span>
                  
                  {/* Plus to Minus Toggle Button */}
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-[#1f1b11]/8 bg-[#FFFDFB] flex items-center justify-center transition-all duration-300 hover:border-primary/30 shadow-sm">
                    <div className="relative w-4 h-4 flex items-center justify-center">
                      <span className="absolute w-3.5 h-[1.5px] bg-primary"></span>
                      <span className={`absolute w-[1.5px] h-3.5 bg-primary transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-90 opacity-0" : ""
                      }`}></span>
                    </div>
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant/90 leading-relaxed pb-2">
                    {item.answer}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
