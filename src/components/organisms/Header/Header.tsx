import { useState } from "react";
import { Menu } from "lucide-react";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderCenter } from "./HeaderCenter";
import { HeaderRight } from "./HeaderRight";
import { RightSideMenu } from "../../molecules/LeftSideMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ECEAEA]">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center px-8 py-4 max-w-7xl mx-auto">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <HeaderLeft />
        <button
          className="p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7 text-emerald-400" />
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-2 max-w-7xl mx-auto">
        <HeaderCenter />
      </div>

      {/* Left Side Drawer Menu */}
      <RightSideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};
