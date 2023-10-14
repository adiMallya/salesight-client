import { Bar, Line } from "react-chartjs-2";

const SalesChart = ({ data }) => {
  const barChartData = {
    labels: data?.highestSellingItems?.map((item) => item?.itemName) || [],
    datasets: [
      {
        label: "Total Quantity Sold",
        data:
          data?.highestSellingItems?.map((item) => item?.totalQuantity) || [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40",
        ],
      },
    ],
  };

  const barChartOptions = {
    plugins: {
      title: {
        display: true,
        text: "Highest Selling Items",
        font: {
          size: 16,
        },
      },
    },
  };

  const lineChartData = {
    labels: data?.revenueDetails.map((item) => item?.category) || [],
    datasets: [
      {
        label: "Total Revenue (INR)",
        data: data?.revenueDetails.map((item) => item?.totalRevenue) || [],
        borderColor: "#36A2EB",
        fill: false,
      },
    ],
  };

  const lineChartOptions = {
    plugins: {
      title: {
        display: true,
        text: "Revenue Distribution by Category",
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="flex flex-row justify-between items-start w-90 h-full">
      <div className="w-1/2">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
      <div className="w-1/2">
        <Bar data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default SalesChart;
