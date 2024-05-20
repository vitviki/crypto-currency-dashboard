import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      align: "center",
    },
  },
};

const data = {
  labels: ["Tether", "Luna", "Ethereum"],
  datasets: [
    {
      data: [250, 375, 375],
      backgroundColor: [
        "rgba(75, 192, 192, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="">
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
