import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetCoinDataByDaysQuery } from "../../features/services/coinGekoCore";
import { useSelector } from "react-redux";
import { generateLabelAndData } from "../../assets/generateDatasets";
import SpinnerLoder from "../SpinnerLoder";
import { generateRandomColor } from "../../assets/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LinesChart() {
  const { baseCurrency } = useSelector((store) => store.currency);
  const { timeFrame } = useSelector((store) => store.timeFrame);
  const { currentCoins } = useSelector((store) => store.cryptoSelection);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
      title: {
        text: baseCurrency.id.toUpperCase(),
        display: true,
        align: "start",
        padding: -1,
      },
    },
  };

  const { data, status } = useGetCoinDataByDaysQuery({
    id: currentCoins[0],
    vs_currency: baseCurrency.id,
    days: timeFrame,
    interval: timeFrame !== 1 ? "daily" : "",
  });

  const dataSet = {};

  if (status === "fulfilled") {
    const { labels, prices } = generateLabelAndData(timeFrame, data.prices);
    const colors = generateRandomColor();
    dataSet.labels = labels;
    dataSet.datasets = [
      {
        label: currentCoins[0].toUpperCase(),
        data: prices,
        borderColor: colors[0],
        backgroundColor: colors[1],
      },
    ];
    return <Line options={options} data={dataSet} />;
  } else {
    return (
      <div className="flex justify-center items-center">
        <SpinnerLoder size={100} />
      </div>
    );
  }
}
