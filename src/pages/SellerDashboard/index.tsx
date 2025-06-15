//mainpage

import { SellerDashboardTemplate } from '../../components/templates/SellerDashboardTemplate';

// This is the actual page component
const SellerDashboardPage = () => {
  // You might fetch global dashboard data here if needed by multiple sections,
  // or pass down props to the template.

  return (
    <SellerDashboardTemplate />
  );
};

export default SellerDashboardPage;