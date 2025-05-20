

type ProductCardProps = {
  image: string;
  alt: string;
};

export const ProductCard = ({ image, alt }: ProductCardProps) => {
  return (
    <div className="relative  rounded-[18px] overflow-hidden aspect-square shadow-md group ">
      <img
        src={image}
        alt={alt}
        className=" w-full group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-3 left-3  text-white text-sm px-2 py-1 rounded-md">
        {alt}
      </div>
    </div>
  );
};
