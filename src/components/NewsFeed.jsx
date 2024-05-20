import React from "react";

const NewsFeed = ({ title, url, thumb }) => {
  return (
    <div className="flex flex-col mb-3">
      <div className="mb-1">
        <a href={url} target="_blank" className="flex gap-3">
          <img
            src={thumb}
            alt="news image"
            className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
          />
          <h5 className=" font-montserrat font-semibold lg:text-sm text-xs text-gray-600 hover:text-gray-950">
            {title}
          </h5>
        </a>
      </div>
      <div className="border border-gray-100 w-full"></div>
    </div>
  );
};

export default NewsFeed;
