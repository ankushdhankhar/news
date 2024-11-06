import { IFlipnews } from "@/lib/newsquery"
import Flipnews from "./flip-news-card"
import { Newspaper } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FlipFlopSection({ news }: { news: IFlipnews[] }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Flip-Flop News
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our curated selection of top stories. Flip through for quick insights.
          </p>
        </div>

        {/* News Grid */}
        <Card className="border-none shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <div key={index} className="flex">
                  <Flipnews news={item} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="flex justify-center items-center text-gray-500">
          <Newspaper className="w-5 h-5 mr-2" />
          <span className="text-sm">Updated hourly</span>
        </div>
      </div>
    </section>
  )
}