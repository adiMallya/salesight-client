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
    title: {
      display: true,
      text: "Distribution by Category",
      fontSize: 20,
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default InventoryChart;
