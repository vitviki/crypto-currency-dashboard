import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useGetCoinDataByDaysQuery } from "../../features/services/coinGekoCore";
import { useSelector } from "react-redux";
import { generateLabelAndData } from "../../assets/generateDatasets";
import { generateRandomColor } from "../../assets/constants";
import SpinnerLoder from "../SpinnerLoder";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "end",
    },
  },
};

export default function VerticalBarChart() {
  const { baseCurrency } = useSelector((store) => store.currency);
  const { timeFrame } = useSelector((store) => store.timeFrame);
  const { currentCoins } = useSelector((store) => store.cryptoSelection);

  const { data, status } = useGetCoinDataByDaysQuery({
    id: currentCoins[0],
    vs_currency: baseCurrency.id,
    days: timeFrame,
    interval: timeFrame !== 1 ? "daily" : "",
  });

  const dataSet = {};

  if (status === "fulfilled" && currentCoins.length > 0) {
    const { labels, prices } = generateLabelAndData(timeFrame, data.prices);
    const colors = generateRandomColor();
    dataSet.labels = labels;
    dataSet.datasets = [
      {
        label: currentCoins[0],
        data: prices,
        borderColor: colors[0],
        backgroundColor: colors[1],
      },
    ];
    return <Bar options={options} data={dataSet} height="80vh" />;
  } else {
    return (
      <div className="flex h-full justify-center items-center">
        <SpinnerLoder size={100} />
      </div>
    );
  }
}
