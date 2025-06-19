import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, ChevronRight } from 'lucide-react';

import {  Fragment, type FC } from 'react'; // <--- Corrected import: Import FC and Fragment directly

// REMOVED: import BreadcrumbsBg from '../../assets/images/breadcrumbs_bg.jpg'; // No longer needed

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: FC = () => { // Using FC type
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const getBreadcrumbLabel = (pathSegment: string) => {
    switch (pathSegment) {
      case 'shop': return 'Shop';
      case 'pages': return 'Pages';
      case 'blog': return 'Blog';
      case 'about-us': return 'About Us';
      case 'contact-us': return 'Contact Us';
      case 'login': return 'Login';
      case 'signup': return 'Sign Up';
      case 'verify-otp': return 'Verify OTP';
      case 'seller-dashboard': return 'Seller Dashboard';
      default: return pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1).replace(/-/g, ' ');
    }
  };

  const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const label = getBreadcrumbLabel(value);
    return { label, path: to };
  });

  return (
    <div
      className="bg-gray-100 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm">
        <Link to="/" className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
          <HomeIcon className="w-4 h-4 mr-1 text-gray-500" />
          Home
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <Fragment key={crumb.path}> {/* Changed to Fragment from React.Fragment */}
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-emerald-600 font-semibold">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="text-gray-700 hover:text-emerald-600 transition-colors">
                {crumb.label}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;