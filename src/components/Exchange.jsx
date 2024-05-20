import { AiOutlineCaretDown } from "react-icons/ai";

const Exchange = () => {
  return (
    <div className="flex flex-col px-10 py-5 bg-white md:w-[50%] w-full rounded-2xl shadow-md gap-4 xl:gap-4 md:gap-14">
      <h3 className="font-palanquin md:text-xl text-lg font-bold leading-none capitalize">
        Exchange Coins
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          <p className=" font-palanquin lg:text-lg text-base font-semibold text-orange-500">
            Sell
          </p>
          <button className="px-3 py-2 w-[40%] font-bold flex items-center justify-between md:text-sm text-xs tracking-wide font-palanquin bg-gray-100  border border-gray-300 rounded-lg text-gray-600">
            Bitcoin
            <AiOutlineCaretDown />
          </button>
          <input
            type="number"
            placeholder="Avl: 0.002BTC"
            className="border border-gray-300 focus:outline-none px-2 py-2 rounded-md w-[40%]"
          />
        </div>
        <div className="flex gap-5 items-center">
          <p className=" font-palanquin lg:text-lg text-base font-semibold text-green-500">
            Buy
          </p>
          <button className="px-3 py-2 w-[40%] font-bold flex items-center justify-between md:text-sm text-xs tracking-wide font-palanquin bg-gray-100  border border-gray-300 rounded-lg text-gray-600">
            Ethereum
            <AiOutlineCaretDown />
          </button>
          <p className="text-green-700 lg:text-base text-sm">23300 Eth</p>
        </div>
      </div>
      <div className="mx-auto">
        <button className="border border-blue-600 bg-blue-600 rounded-lg text-white font-semibold px-3 py-2 md:text-base text-sm">
          Exchange
        </button>
      </div>
    </div>
  );
};

export default Exchange;
