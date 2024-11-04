import FlipFlopSection from "@/components/flip-flop-section";
import NewsCarousel from "@/components/newscarousel";
import { getAllFlipNews, getAllNews } from "@/lib/newsquery";

export default async function Home() {
  const news=await getAllNews();
  const flipNews =await getAllFlipNews()
  // console.log(news);
  return (
    <main className="min-h-screen bg-gray-50">
 
      <NewsCarousel news={news} />
      <FlipFlopSection news={flipNews} />
    </main>
  );
}
