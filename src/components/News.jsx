import NewsFeed from "./NewsFeed";
import { useGetNewsDataQuery } from "../features/services/cryptoNewsCore";
import SpinnerLoder from "./SpinnerLoder";

// News section with News Feed element
const News = () => {
  const { data, status } = useGetNewsDataQuery();
  console.log(data);

  if (status === "fulfilled") {
    return (
      <div className="relative flex flex-col px-10 py-5 bg-white md:w-[50%] w-full md:h-full h-[500px] rounded-2xl shadow-md">
        <h3 className="font-palanquin md:text-xl text-lg font-bold leading-none lg:mb-5 mb-8 flex justify-start items-center capitalize">
          Latest news
        </h3>
        <div className="flex flex-col w-[90%] h-[70%] md:top-12 top-20 absolute overflow-scroll no-scrollbar pt-4 lg:pr-0 pr-5 ">
          {data.data.map((item) => {
            return (
              <NewsFeed
                key={item.title}
                title={item.title}
                url={item.url}
                thumb={item.thumbnail}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    <div className="flex h-full justify-center items-center">
      <SpinnerLoder size={200} />;
    </div>;
  }
};

export default News;
