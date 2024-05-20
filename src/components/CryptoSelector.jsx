import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCoin } from "../features/cryptoSelector/cryptoSelectorSlice";
import { useState } from "react";

const CryptoSelector = () => {
  const [isCryptoMenOpen, setIsCryptoMenOpen] = useState(false);
  const dispatch = useDispatch();

  const { coinPool } = useSelector((store) => store.cryptoSelection);

  return (
    <div className="relative flex justify-between items-center shadow-md bg-gray-100 rounded-lg px-5 py-1 border border-gray-300">
      <button
        onClick={() => setIsCryptoMenOpen((prev) => !prev)}
        className="px-1 w-full font-bold flex items-center justify-between md:text-base text-sm tracking-wide font-palanquin active:border-gray-500 active:border-opacity-50"
      >
        Cryptocurrency
        {isCryptoMenOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isCryptoMenOpen && (
        <div className="bg-white absolute top-10 lg:h-[200px] h-[108px] left-1 flex flex-col items-start rounded-lg p-1 w-full overflow-scroll border border-gray-500 z-10">
          {coinPool.map((coin, idx) => (
            <div
              className="flex w-full hover:bg-orange-50 cursor-pointer rounded-lg py-3 pl-1 md:text-base text-sm text-gray-700"
              key={idx}
              onClick={() => {
                dispatch(setCurrentCoin(coin));
                setIsCryptoMenOpen(false);
              }}
            >
              {coin.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoSelector;
