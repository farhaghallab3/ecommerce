
import type { FC } from 'react';

interface FeatureItemProps {
  icon: React.ElementType; 
  title: string;
  description: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="text-[#00B207] mb-3"> {/* Icon color */}
        <Icon className="w-10 h-10" /> {/* Icon size */}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureItem;