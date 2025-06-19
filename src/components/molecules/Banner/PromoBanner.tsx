// src/components/molecules/PromoBanner.tsx
import {type FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CountdownTimer from '../CountdownTimer';


interface PromoBannerProps {
  imageSrc?: string; // Made optional if background is a solid color
  title: string;
  subtitle?: string;
  description?: string;
  saleBadgeText?: string; // e.g., "30% OFF"
  freeShippingText?: string; // e.g., "Free shipping on all your order."
  ctaText: string;
  ctaLink: string;
  // Specific content for banners (e.g., countdown, price info)
  countdownTargetDate?: string;
  infoText?: string;
  discountText?: string;
  // Styling props
  contentPosition?: 'top-left' | 'bottom-left' | 'center-left' | 'bottom-right' | 'center';
  titleClass?: string;
  textColorClass?: string;
  overlayBgColor?: string; // For a background overlay or solid color banner background
  ctaVariant?: 'button' | 'link';
  widthClass?: string;
  heightClass?: string;
  borderRadiusClass?: string;
  ctaButtonBgColor?: string; // e.g., 'bg-white'
  ctaButtonTextColor?: string; // e.g., 'text-green-500'
  ctaButtonRoundedFull?: boolean; // e.g., true for circular button
  saleBadgeBgColor?: string; // e.g., 'bg-orange-500'
  imageShadowClass?: string; // For shadow effect on image/banner
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
  countdownTargetDate,
  infoText,
  discountText,
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
  imageShadowClass = ''
}) => {
  let contentClasses = 'absolute p-6 flex flex-col';
  const ctaLinkClasses = 'inline-flex items-center text-sm font-semibold transition-colors duration-200';
  const ctaButtonClasses = 'inline-flex items-center px-6 py-3 text-sm font-semibold transition-colors duration-200';

  // Positioning and alignment for content
  switch (contentPosition) {
    case 'top-left': contentClasses += ' top-0 left-0 text-left items-start justify-start'; break;
    case 'bottom-left': contentClasses += ' bottom-0 left-0 text-left items-start justify-end'; break;
    case 'center-left': contentClasses += ' top-1/2 left-0 -translate-y-1/2 text-left items-start justify-center'; break;
    case 'bottom-right': contentClasses += ' bottom-0 right-0 text-right items-end justify-end'; break;
    case 'center': contentClasses += ' inset-0 flex items-center justify-center text-center'; break;
    default: contentClasses += ' bottom-0 left-0 text-left items-start justify-end';
  }

  const finalCtaTextColor = ctaVariant === 'button' ? ctaButtonTextColor : 'text-emerald-500';
  const finalCtaBgColor = ctaVariant === 'button' ? `${ctaButtonBgColor} hover:bg-opacity-80` : 'bg-transparent hover:text-emerald-600';


  return (
    <div className={`relative overflow-hidden ${borderRadiusClass} ${widthClass} ${heightClass} ${imageShadowClass}`}>
      {/* Background Image (only if imageSrc is provided) */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105`}
        />
      )}

      {/* Solid Color Overlay for text area / full banner background */}
      {overlayBgColor && (
        <div className={`absolute inset-0 ${overlayBgColor}`}></div>
      )}

      {/* Content */}
      <div className={`${contentClasses} ${textColorClass} h-full`}>
        {subtitle && <p className="text-sm font-medium mb-1">{subtitle}</p>}
        <h3 className={`${titleClass} mb-2 leading-tight`}>{title}</h3>
        {description && <p className="text-sm mb-3">{description}</p>}

        {saleBadgeText && (
          <div className="text-center"> {/* Added text-center to div holding badge */}
            <div className={`${saleBadgeBgColor} text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2`}>
              {saleBadgeText}
            </div>
          </div>
        )}
        {freeShippingText && <p className="text-xs mb-3">{freeShippingText}</p>}

        {countdownTargetDate && <CountdownTimer targetDate={countdownTargetDate} textColorClass={textColorClass} />}
        {infoText && <p className="text-base font-semibold mt-2">{infoText}</p>}
        {discountText && <p className="text-base font-semibold mt-2">{discountText}</p>}

        <Link
          to={ctaLink}
          className={`${ctaVariant === 'button' ? ctaButtonClasses : ctaLinkClasses} ${finalCtaTextColor} ${finalCtaBgColor} ${ctaButtonRoundedFull ? 'rounded-full' : 'rounded-md'} mt-4`}
        >
          {ctaText} <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;