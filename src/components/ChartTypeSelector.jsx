import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";
import { chart_type } from "../assets/constants";
import { useDispatch } from "react-redux";
import { changeChartType } from "../features/chartSlice/chartSlice";

const ChartTypeSelector = () => {
  const dispatch = useDispatch();
  const [isChartMenuOpen, setIsChartMenuOpen] = useState(false);

  function changeChart(id) {
    setIsChartMenuOpen((prev) => (prev = false));
    dispatch(changeChartType(id));
  }

  return (
    <div className="relative flex flex-col justify-center items-center shadow-md bg-gray-100 rounded-lg px-5 py-1 border-gray-300 border">
      <button
        onClick={() => setIsChartMenuOpen((prev) => !prev)}
        className="px-1 py-1 w-full font-bold flex items-center justify-between md:text-base text-sm tracking-wide font-palanquin active:border-gray-500 active:border-opacity-50"
      >
        Chart Type
        {isChartMenuOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isChartMenuOpen && (
        <div className="bg-white absolute top-10 flex flex-col items-start rounded-xl p-2 w-full h-48 overflow-scroll border border-gray-500 no-scrollbar">
          {chart_type.map((chart) => (
            <div
              className="flex h-full w-full hover:bg-orange-50 cursor-pointer rounded-lg py-3 pl-1 md:text-base text-sm text-gray-700"
              onClick={() => changeChart(chart.id)}
              key={chart.id}
            >
              {chart.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChartTypeSelector;
