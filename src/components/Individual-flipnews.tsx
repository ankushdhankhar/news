import { Badge } from "@/components/ui/badge"; // Assume shadcn Badge component is available
import { Calendar } from "lucide-react"; // Icon for date
import { IFlipnews } from "@/lib/newsquery";

const FlipNewsDisplay = ({ news }: { news: IFlipnews }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 space-y-6">
      {/* Date Section */}
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
        <Calendar className="w-4 h-4 text-gray-400" />
        <span>{new Date(news.time).toLocaleDateString("en-US", {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        })}</span>
      </div>

      {/* First News Item */}
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="flex-1 w-full h-48 rounded-lg overflow-hidden">
          <img
            src={news.imageUrl1}
            alt={news.heading1}
            className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{news.heading1}</h2>
          <p className="text-gray-700 leading-relaxed">{news.description1}</p>
          <div className="italic text-gray-600 text-sm">By {news.report1}</div>
        </div>
      </div>

      {/* Second News Item */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 w-full h-48 rounded-lg overflow-hidden">
          <img
            src={news.imageUrl2}
            alt={news.heading2}
            className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{news.heading2}</h2>
          <p className="text-gray-700 leading-relaxed">{news.description2}</p>
          <div className="italic text-gray-600 text-sm">By {news.report2}</div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex gap-2 flex-wrap mt-4">
        {/* Assuming tags could be added in the future, or you can include a static example */}
        {/* <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {tag}
        </Badge> */}
      </div>
    </div>
  );
};

export default FlipNewsDisplay;
