import CryptoDetail from "./CryptoDetail";
import { useGetCoinsByMarketCapQuery } from "../features/services/coinGekoCore.js";
import { useSelector } from "react-redux";
import SpinnerLoder from "./SpinnerLoder.jsx";

const Sidebar = () => {
  const { baseCurrency } = useSelector((store) => store.currency);
  const { data, status } = useGetCoinsByMarketCapQuery({
    vs_currency: `${baseCurrency.id}`,
    order: "market_cap_desc",
    per_page: 20,
  });

  if (status === "fulfilled")
    return (
      <div className="px-5 py-6 h-full relative">
        <h3 className="font-palanquin md:text-xl text-base font-bold leading-none mb-5 flex justify-center items-center capitalize border-b-4 border-gray-700 py-3">
          By market cap - {baseCurrency.name}
        </h3>
        <div className="flex flex-col w-[90%] h-[80%] absolute overflow-scroll no-scrollbar">
          {data.map((item) => {
            return (
              <CryptoDetail
                key={item.id}
                coinID={item.id}
                name={item.name}
                cap={item.market_cap}
                percent={item.price_change_percentage_24h}
                img={item.image}
                currency={baseCurrency.name}
                symbol={baseCurrency.symbol}
              />
            );
          })}
        </div>
      </div>
    );
  else {
    return (
      <div className="flex h-full justify-center items-center">
        <SpinnerLoder size={100} />
      </div>
    );
  }
};

export default Sidebar;
