import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../features/currencySlice/currencySlice";

const CurrencySelector = () => {
  const dispatch = useDispatch();
  const { baseCurrency, currencies } = useSelector((store) => store.currency);
  const [isOpen, setIsOpen] = useState(false);

  const updateCurrency = (currency) => {
    dispatch(changeCurrency(currency));

    // close the drop down
    setIsOpen((prev) => (prev = false));
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-center w-[8%] shadow-md bg-white rounded-2xl`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:px-2 px-6 md:py-2 w-full font-bold flex items-center justify-around md:text-sm text-xs tracking-wide font-palanquin active:border-black active:border-opacity-50"
      >
        {baseCurrency.id.toUpperCase()}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isOpen && (
        <div
          className={
            "bg-white absolute top-14 flex flex-col items-start rounded-xl p-2 h-48 overflow-scroll border border-gray-700 no-scrollbar z-10"
          }
        >
          {currencies.map((currency, idx) => (
            <div
              className="flex w-full md:text-sm text-xs hover:bg-orange-50 cursor-pointer rounded-lg py-3 pl-1"
              key={idx}
              onClick={() => updateCurrency(currency)}
            >
              {currency.id.toUpperCase()} ({currency.name})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
