import { IFlipnews, INews } from "@/lib/newsquery";
import Flipnews from "./flip-news-card";
import { NewsCardComponent } from "./news-card";

const NewsGrid = ({ news }: { news: INews[] }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-lg ">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold  relative inline-block">
          News
          <span className="absolute inset-x-0 -bottom-1 h-1 bg-indigo-300 rounded"></span>
        </h2>
        <p className="text-gray-600 mt-2">Catch up on the latest </p>
      </div>
      
      {/* News Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 ">
        {news.map((item, index) => (
          <NewsCardComponent key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
