// src/components/molecules/InstagramPostCard.tsx
import { type FC } from 'react';
import { Instagram } from 'lucide-react'; // Instagram icon

interface InstagramPostCardProps {
  id: string;
  imageSrc: string;
  showInstagramIcon?: boolean; // True to show the Instagram icon overlay
}

const InstagramPostCard: FC<InstagramPostCardProps> = ({
  id,
  imageSrc,
  showInstagramIcon = false,
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg group cursor-pointer aspect-square"> {/* Added aspect-square for uniform size */}
      <img
        src={imageSrc}
        alt={`Instagram post ${id}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {showInstagramIcon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Instagram className="w-10 h-10 text-white" />
        </div>
      )}
    </div>
  );
};

export default InstagramPostCard;