import { useSelector } from "react-redux";
import LinesChart from "./Charts/LinesChart";
import VerticalBarChart from "./Charts/VerticalBarChart";
import HorizontalBarChart from "./Charts/HorizontalBarChart";
import DurationSelector from "./DurationSelector";
import CryptoSelector from "./CryptoSelector";
import ChartTypeSelector from "./ChartTypeSelector";

const Chart = () => {
  const { chartType } = useSelector((store) => store.chart);
  return (
    <div className="flex flex-col px-5 py-2 w-full xl:h-[100vh] h-[350px] bg-white rounded-2xl shadow-md gap-5">
      {/* Top bar */}
      <div className="flex md:justify-between w-full items-center xl:flex-row flex-col justify-start gap-5  mx-auto">
        <div className="flex lg:gap-10 justify-start md:justify-center md:w-[50%] w-full sm:gap-3">
          <DurationSelector />
        </div>
        <div className="flex gap-3 lg:gap-10 justify-center md:w-[50%] w-full flex-col lg:flex-row">
          <CryptoSelector />
          <ChartTypeSelector />
        </div>
      </div>

      <div className="h-full">
        {chartType === "l_chart" ? (
          <LinesChart />
        ) : chartType === "b_chart_horizontal" ? (
          <HorizontalBarChart />
        ) : (
          <VerticalBarChart />
        )}
      </div>
    </div>
  );
};

export default Chart;
