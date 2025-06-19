
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Users, ShoppingCart, Truck, Settings, Handshake, MessageSquare, HelpCircle } from 'lucide-react';


interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClasses = "bg-emerald-400 text-white ";
  const inactiveClasses = "text-gray-600 hover:bg-gray-200";

  return (
    <Link to={to} className={`flex items-center p-3 rounded-lg transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
      <Icon className="w-5 h-5 mr-3" />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col p-4">
      <div className="text-2xl font-bold text-xlg mb-8 px-3">TrueCart</div>

    

      <nav className="space-y-2 flex-grow">
        <SidebarLink to="/seller-dashboard" icon={LayoutDashboard} label="Overview" />
        <SidebarLink to="/seller-dashboard/products" icon={Package} label="Products" />
        <SidebarLink to="/seller-dashboard/customers" icon={Users} label="Customer" />
        <SidebarLink to="/seller-dashboard/orders" icon={ShoppingCart} label="Orders" />
        <SidebarLink to="/seller-dashboard/shipment" icon={Truck} label="Shipment" />
        <SidebarLink to="/seller-dashboard/settings" icon={Settings} label="Store Setting" />
        <SidebarLink to="/seller-dashboard/partners" icon={Handshake} label="Platform Partner" />
        <SidebarLink to="/seller-dashboard/feedback" icon={MessageSquare} label="Feedback" />
        <SidebarLink to="/seller-dashboard/help" icon={HelpCircle} label="Help & Support" />
      </nav>

      {/* Add a Logout button here if desired */}
    </div>
  );
};

export default Sidebar;