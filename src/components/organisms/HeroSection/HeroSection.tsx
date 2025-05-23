import { Button } from "../../atoms/Button/Button";

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
    <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-4">
        {headline.split("<br />").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <div className="w-1/2 mx-auto lg:mx-0 bg-emerald-400  text-white transition hover:bg-emerald-500 rounded-[16px]">
        <Button
          text="Browse Products"
          onClick={() => console.log("Button clicked")}
        />
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 justify-center lg:justify-start">
        <span className="text-yellow-400 text-lg">★</span>
        <span>Used by {customersCount}</span>
      </div>
    </div>
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 max-w-lg">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto object-contain"
      />
    </div>
  </section>
);
