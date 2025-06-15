

const SalesChart = () => {
  // Data for the chart would be fetched here or passed as props
  return (
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
      <p className="text-gray-400">Sales Overtime Chart (Placeholder)</p>
      {/* Integrate your charting library here, e.g., <LineChart data={...} /> */}
    </div>
  );
};

export default SalesChart;