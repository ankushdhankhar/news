import { getAllNews, INews } from '@/lib/newsquery'
import NewsGrid from '@/components/news-grid'

export default async function  NewsPage() {
    const news=await getAllNews();
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest Breaking News</h1>
        <p className="text-xl text-gray-600">Stay informed with our up-to-the-minute news coverage</p>
      </header>
      <NewsGrid news={news} />
    </div>
  )
}