// src/pages/SellerDashboard/components/LatestOrdersTable.tsx
import React from 'react';

interface Order {
  id: string;
  product: string;
  orderDate: string;
  price: string;
  payment: string;
  status: 'Processing' | 'Completed' | 'Cancelled'; // Example statuses
  action?: string; // e.g., '...' for more options
}

const getStatusClasses = (status: Order['status']) => {
  switch (status) {
    case 'Processing': return 'bg-yellow-100 text-yellow-800';
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'Cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const LatestOrdersTable = () => {
  // Fetch real data from your backend API
  const orders: Order[] = [
    {
      id: "#2456JL",
      product: "Airpods",
      orderDate: "Jan 27, 12:39 pm",
      price: "$ 168.00",
      payment: "Transfer",
      status: "Processing"
    },
    {
      id: "#5435DF",
      product: "Nike Shoes",
      orderDate: "May 08, 04:19 am",
      price: "$ 27.00",
      payment: "Credit Card",
      status: "Completed"
    },
    {
      id: "#9876XC",
      product: "Apple Watch",
      orderDate: "Oct 07, 11:12 pm",
      price: "$ 227.00",
      payment: "Transfer",
      status: "Completed"
    },
    // Add more orders
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end space-x-2 text-sm mb-4">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">Customize</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">Filter</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">Export</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead >
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-sm  text-gray-500  tracking-wider">Order ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.payment}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrdersTable;