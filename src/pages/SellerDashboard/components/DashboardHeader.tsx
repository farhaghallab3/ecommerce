// src/pages/SellerDashboard/components/DashboardHeader.tsx
import React from 'react';
import { Search, Mic, ChevronDown } from 'lucide-react'; // <-- Import Mic and ChevronDown icons
import { useAuth } from '../../../context/AuthContext'; // <-- Import useAuth
import profile from '../../../assets/images/manprofile.png'; // <-- Import profile image if needed

interface DashboardHeaderProps {
   userName: string; // We will get userName and userEmail directly from AuthContext now
}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => { // Removed props
  const { userName, userEmail } = useAuth(); // <-- Get userName and userEmail from AuthContext

  return (
    // This div itself will be the fixed header
    <div className="fixed top-0 right-0 h-20 bg-gray-100  z-30 flex items-center justify-between px-6 md:px-8 lg:px-10  w-full max-w-screen-xl mx-auto">
      {/* Search bar on the left */}
      <div className="relative flex-grow mr-4"> {/* flex-grow to make search bar take available space */}
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-10 py-2 w-full rounded-[16px]  focus:ring-emerald-500 focus:border-emerald-500" // Added rounded-full for shape, increased pr for mic icon
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Mic className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" /> {/* <-- Mic icon */}
      </div>

      {/* User profile on the right */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        <img src={profile} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
        <div className="flex flex-col text-sm leading-tight">
          <p className="font-semibold text-gray-800">{userName || 'User'}</p> {/* Display userName */}
          <p className="text-gray-500">{userEmail || 'email@example.com'}</p> {/* Display userEmail */}
        </div>
        <ChevronDown className="w-5 h-5 text-gray-500 cursor-pointer" /> {/* <-- Dropdown arrow */}
      </div>
    </div>
  );
};

export default DashboardHeader;