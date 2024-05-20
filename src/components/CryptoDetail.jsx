import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentCoin } from "../features/cryptoSelector/cryptoSelectorSlice.js";

const CryptoDetail = ({ coinID, name, cap, percent, img, symbol }) => {
  const dispatch = useDispatch();
  const percentString = percent.toFixed(2);
  const selectCoin = (id) => {
    dispatch(setCurrentCoin(id));
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-5 items-center md:mb-7 mb-4">
        <div
          className="flex gap-3 hover:cursor-pointer"
          onClick={() => selectCoin(coinID)}
        >
          <img
            src={img}
            alt="coin"
            className="md:w-[40px] w-[30px] md:h-[40px] h-[30px]"
          />
          <div className="flex flex-col">
            <h4 className="font-montserrat font-semibold md:text-base text-sm">
              {name}
            </h4>
            <p className="font-montserrat text-gray-500 md:text-sm text-xs">{`Mkt. Cap: ${symbol} ${
              cap.toString().slice(0, -8) + "B"
            }`}</p>
          </div>
        </div>
        <div className="pb-4 pt-2">
          {percentString[0] === "-" ? (
            <div className="flex items-center gap-1 text-red-700">
              <AiOutlineCaretDown className="md:text-lg text-sm" />
              <span className="md:text-base text-sm">{percentString}%</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-green-700">
              <AiOutlineCaretUp className="md:text-lg text-sm" />
              <span className="md:text-base text-sm">{percentString}%</span>
            </div>
          )}
        </div>
      </div>
      <div className="border border-gray-100 w-full"></div>
    </div>
  );
};

export default CryptoDetail;
