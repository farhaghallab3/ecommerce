import Sidebar from '../../pages/SellerDashboard/components/Sidebar'; // Adjust path based on your final decision
//import DashboardHeader from '../../pages/SellerDashboard/components/DashboardHeader';
import OverviewSection from '../../pages/SellerDashboard/components/OverviewSection';
import SalesChart from '../../pages/SellerDashboard/components/SalesChart';
import TopSellingProducts from '../../pages/SellerDashboard/components/TopSellingProducts';
import LatestOrdersTable from '../../pages/SellerDashboard/components/LatestOrdersTable';
import DashboardHeader from '../../pages/SellerDashboard/components/DashboardHeader';
import InfoSection from '../../pages/SellerDashboard/components/info';
//import { useAuth } from '../../context/AuthContext'; // To get user name for display

export const SellerDashboardTemplate = () => {
//  const { userName } = useAuth(); // Assuming userName is available from AuthContext

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />
      

      {/* Right Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
        {/* Dashboard Header */}
        <DashboardHeader userName={''} />
         {/* Pass user name */}
        {/* Info Section */}
        <div className=" mt-14 mb-8">
          <InfoSection />
        </div>


        {/* Overview Cards */}
        <div className="mt-8">
        <OverviewSection />
        </div>

        {/* Sales Overtime Chart & Top Selling Product */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Sales Overtime</h2>
            <SalesChart />
          </div>
          <div className="lg:col-span-1 bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Top Selling Product</h2>
            <TopSellingProducts />
          </div>
        </div>

        {/* Latest Orders */}
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
          <LatestOrdersTable />
        </div>
      </div>
    </div>
  );
};