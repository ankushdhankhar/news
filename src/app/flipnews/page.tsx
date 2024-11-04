import FlipFlopSection from "@/components/flip-flop-section";
import { getAllFlipNews } from "@/lib/newsquery";

const FlipNewsPage = async () => {
  const news = await getAllFlipNews();
  return (
    <FlipFlopSection news={news} />
  );
};

export default FlipNewsPage;