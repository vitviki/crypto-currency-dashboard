import React from "react";
import PieChart from "./Charts/PieChart";

const Portfolio = () => {
  return (
    <div className="flex flex-col px-10 py-5 bg-white md:w-[50%] w-full rounded-2xl shadow-md md:gap-16 xl:gap-0 sm:gap-0">
      <div className="flex justify-between md:flex-row flex-col">
        <h3 className="font-palanquin md:text-xl text-lg font-bold leading-none mb-5 flex justify-center items-center capitalize">
          Portfolio
        </h3>
        <p className="font-palanquin text-gray-400 font-semibold text-center">
          Total value:{" "}
          <span className=" font-montserrat font-bold text-gray-800 md:text-base text-sm">
            $1000
          </span>
        </p>
      </div>
      <PieChart />
    </div>
  );
};

export default Portfolio;
