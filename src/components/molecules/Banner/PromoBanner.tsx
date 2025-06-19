import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { FC } from 'react';

interface PromoBannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  description?: string;
  saleBadgeText?: string;
  freeShippingText?: string;
  ctaText: string;
  ctaLink: string;
  // Styling props
  contentPosition?: 'top-left' | 'top-right' | 'top-center' | 'bottom-center' | 'bottom-left' | 'center-left' | 'bottom-right' | 'center';
  titleClass?: string;
  textColorClass?: string;
  overlayBgColor?: string;
  ctaVariant?: 'button' | 'link';
  widthClass?: string;
  heightClass?: string;
  borderRadiusClass?: string;
  ctaButtonBgColor?: string;
  ctaButtonTextColor?: string;
  ctaButtonRoundedFull?: boolean;
  saleBadgeBgColor?: string;
  // REMOVED: imageOpacityClass?: string; // <-- This is removed
  imageShadowClass?: string; // <-- NEW: Prop for image shadow class
}

const PromoBanner: FC<PromoBannerProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  saleBadgeText,
  freeShippingText,
  ctaText,
  ctaLink,
  contentPosition = 'bottom-left',
  titleClass = 'text-2xl font-bold',
  textColorClass = 'text-white',
  overlayBgColor,
  ctaVariant = 'button',
  widthClass = 'w-full',
  heightClass = 'h-full',
  borderRadiusClass = 'rounded-lg',
  ctaButtonBgColor = 'bg-emerald-500',
  ctaButtonTextColor = 'text-white',
  ctaButtonRoundedFull = false,
  saleBadgeBgColor = 'bg-orange-500',
  // REMOVED: imageOpacityClass,
  imageShadowClass = '' // Default to no shadow class
}) => {
  let contentClasses = 'absolute p-6 flex flex-col';
  const ctaLinkClasses = 'inline-flex items-center text-sm font-semibold transition-colors duration-200';
  const ctaButtonClasses = 'inline-flex items-center px-6 py-3 text-sm font-semibold transition-colors duration-200';

  // Positioning and alignment for content
  switch (contentPosition) {
    case 'top-left': contentClasses += ' top-0 left-0 text-left items-start justify-start'; break;
    case 'top-right': contentClasses += ' top-0 right-0 text-right items-start justify-end'; break;
    case 'top-center': contentClasses += ' top-0 left-1/4 text-center items-center'; break;
    case 'bottom-center': contentClasses += ' bottom-0 left-1/2 -translate-x-1/2 text-center items-end justify-center'; break;
    case 'bottom-left': contentClasses += ' bottom-0 left-0 text-left items-start justify-end'; break;
    case 'center-left': contentClasses += ' top-1/2 left-0 -translate-y-1/2 text-left items-start justify-center'; break;
    case 'bottom-right': contentClasses += ' bottom-0 right-0 text-right items-end justify-end'; break;
    case 'center': contentClasses += ' inset-0 flex items-center justify-center text-center'; break;
    default: contentClasses += ' bottom-0 left-0 text-left items-start justify-end';
  }

  const finalCtaTextColor = ctaVariant === 'button' ? ctaButtonTextColor : 'text-emerald-500';
  const finalCtaBgColor = ctaVariant === 'button' ? `${ctaButtonBgColor} hover:bg-opacity-80` : 'bg-transparent hover:text-emerald-600';


  return (
    <div className={`relative overflow-hidden ${borderRadiusClass} ${widthClass} ${heightClass} ${imageShadowClass}`}> {/* <-- Apply imageShadowClass here */}
      {/* Background Image - removed opacity class */}
      <img
        src={imageSrc}
        alt={title}
        className={`w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105`} // Removed imageOpacityClass
      />

      {overlayBgColor && (
        <div className={`absolute inset-0 ${overlayBgColor}`}></div>
      )}

      <div className={`${contentClasses} ${textColorClass} h-full`}>
        {subtitle && <p className="text-sm font-medium mb-1">{subtitle}</p>}
        <h3 className={`${titleClass} mb-2 leading-tight`}>{title}</h3>
        {description && <p className="text-sm mb-3">{description}</p>}

        {saleBadgeText && (
          <div className={`${saleBadgeBgColor} text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2`}>
            {saleBadgeText}
          </div>
        )}
        {freeShippingText && <p className="text-xs mb-3">{freeShippingText}</p>}

        <Link
          to={ctaLink}
          className={`${ctaVariant === 'button' ? ctaButtonClasses : ctaLinkClasses} ${finalCtaTextColor} ${finalCtaBgColor} ${ctaButtonRoundedFull ? 'rounded-full' : 'rounded-md'}`}
        >
          {ctaText} <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;