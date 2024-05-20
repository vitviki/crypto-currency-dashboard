import { useDispatch, useSelector } from "react-redux";
import { changeTimeFrame } from "../features/timeFrameSlice/timeFrameSlice";
import { timeGroup } from "../assets/constants";

const DurationSelector = () => {
  const dispatch = useDispatch();
  const { timeFrame } = useSelector((store) => store.timeFrame);
  return (
    <div className="flex lg:gap-4 gap-2 md:w-[50%] w-full font-montserrat font-semibold text-xs">
      {timeGroup.map((time) => (
        <button
          key={time.name}
          className={`${
            time.value === timeFrame
              ? " border border-blue-300 bg-blue-300 text-blue-700"
              : " border border-gray-500"
          } px-2 py-1 bg-gray-100 rounded-lg`}
          onClick={() => dispatch(changeTimeFrame(time.value))}
        >
          {time.name}
        </button>
      ))}
    </div>
  );
};

export default DurationSelector;
