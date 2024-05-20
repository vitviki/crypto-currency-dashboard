import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Chart from "./Chart";
import Portfolio from "./Portfolio";
import News from "./News.jsx";
import Exchange from "./Exchange.jsx";
import Sidebar from "./Sidebar";
import CurrencySelector from "./CurrencySelector";
import { setCurrencies } from "../features/currencySlice/currencySlice";
import {
  useGetSearchResultsQuery,
  useGetAllCurrenciesQuery,
} from "../features/services/coinGekoCore.js";
import { setCurrentCoin } from "../features/cryptoSelector/cryptoSelectorSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (value) => {
    setInput(value);
    if (value.length === 0) {
      setShowResults(false);
    }
  };

  const selectCoin = (id) => {
    dispatch(setCurrentCoin(id));
    setInput("");
    setShowResults(false);
  };

  const getAllCurrencies = () => {
    const { data, status } = useGetAllCurrenciesQuery();

    if (status === "fulfilled") {
      dispatch(setCurrencies(data));
    }
  };

  getAllCurrencies();

  let { data, status } = useGetSearchResultsQuery({ query: input });
  if (status === "fulfilled" && input.length > 0 && !showResults) {
    setShowResults(true);
  }

  return (
    <section className="w-[90%] xl:h-[85%] mt-5 mx-auto bg-sky-50 bg-opacity-50 shadow-lg px-[4rem] py-6 flex gap-5 flex-col xl:flex-row">
      {/* Left portion */}
      <div className="flex flex-1 flex-col gap-5 xl:w-[75%] lg:w-full">
        {/* Top header */}
        <div className="flex w-full gap-5">
          {/* Currency drop down */}
          <CurrencySelector />
          {/* Coin search */}
          <div className="relative flex flex-row rounded-2xl shadow-md w-[90%] items-center">
            <AiOutlineSearch
              className="absolute text-gray-500 top-1/2 -translate-y-1/2 left-6 cursor-pointer"
              fontSize={30}
            />
            <input
              type="text"
              className="pl-20 py-2 border-none active:border-none focus:outline-none active:outline-none font-palanquin md:text-lg text-sm w-full rounded-2xl placeholder:text-gray-500 font-semibold"
              placeholder="Search by coin"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            {showResults && (
              <div className="absolute top-14 w-full z-10 bg-white flex flex-col items-start px-4 py-2 h-60 overflow-scroll no-scrollbar border border-gray-700 rounded-xl">
                {data.coins.map((coin) => (
                  <div
                    className="flex w-full text-sm hover:bg-orange-50 cursor-pointer justify-between items-center rounded-lg pt-3 pb-2 px-1 border-b-2"
                    key={coin.id}
                    onClick={() => selectCoin(coin.id)}
                  >
                    <div className="flex items-center">
                      <img
                        src={coin.thumb}
                        alt="coin thumb"
                        className="md:mr-4 mr-2 sm:w-[15px] md:w-[20px]"
                      />{" "}
                      <p className=" font-montserrat md:text-base text-xs font-semibold text-gray-800">
                        {coin.symbol} - {coin.name}
                      </p>
                    </div>
                    {coin.market_cap_rank ? (
                      <p className=" font-palanquin font-semibold md:text-sm text-xs text-gray-500">
                        Market Cap Rank: {coin.market_cap_rank}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Chart />
        {/* Portfolio & Exchange */}
        <div className="flex md:justify-between justify-center w-full gap-5 md:h-[400px] h-[600px] md:flex-row flex-col">
          <Portfolio />
          <Exchange />
          {/* <News /> */}
        </div>
      </div>

      {/* Right Portion */}
      <div className="xl:w-[25%] lg:w-full xl:h-full h-[520px] bg-white rounded-2xl shadow-lg">
        <Sidebar />
      </div>
    </section>
  );
};

export default Dashboard;
