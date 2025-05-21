// src/components/organisms/HeroSection/HeroSection.tsx

import Button from "../../atoms/Button/Button";

type HeroSectionProps = {
  headline: string;
  ctaText: string;
  customersCount: string;
  imageSrc: string;
  imageAlt: string;
};

export const HeroSection = ({
  headline,
  customersCount,
  imageSrc,
  imageAlt,
}: HeroSectionProps) => (
  <section className="px-8 mt-10 mb-8 flex flex-col lg:flex-row items-center justify-between gap-8">
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold mb-4">
        {headline.split("<br />").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <div className="flex w-1/2 justify-center px-3 py-2  bg-emerald-400 hover:bg-emerald-500 text-white  rounded-[16px] transition">
      <Button
      text="Browse Products"
      onClick={() => console.log("Button clicked")}
      />
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
        <span className="text-yellow-400 text-lg">★</span>
        <span>Used by {customersCount}</span>
      </div>
    </div>
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto object-contain"
      />
    </div>
  </section>
);
