import { Pie } from "react-chartjs-2";

const InventoryChart = ({ data }) => {
  const chartData = {
    labels: data?.map((item) => item.category) || [],
    datasets: [
      {
        data: data?.map((item) => item?.totalStockForCategory) || [],
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

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Distribution by Category",
        font: {
          size: 16,
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default InventoryChart;
