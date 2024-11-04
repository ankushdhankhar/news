import { getAllFlipNews, IFlipnews } from "@/lib/newsquery";
import Flipnews from "@/components/flip-news-card";
import FlipFlopSection from "@/components/flip-flop-section";

const FlipNewsPage = async() => {
    const news=await getAllFlipNews();
  return (
    <FlipFlopSection news={news}/>
  );
};

export default FlipNewsPage;
