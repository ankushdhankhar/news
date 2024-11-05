import { IFlipnews } from "@/lib/newsquery"
import Flipnews from "./flip-news-card"
import { BeanIcon, Palmtree, Sun, Umbrella, WavesIcon } from "lucide-react"

export default function FlipFlopSection({ news }: { news: IFlipnews[] }) {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-200 opacity-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Section Title */}
      <div className="relative text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 relative inline-block">
          Flip-Flop News
          <span className="absolute inset-x-0 -bottom-2 h-1.5 bg-yellow-400 rounded animate-pulse"></span>
        </h2>
        <p className="text-blue-700 mt-3 text-lg">Catch up on the latest flip-flop news with a quick toggle view!</p>
        <div className="flex justify-center mt-4 space-x-4">
          <Umbrella className="text-red-500 animate-bounce" />
          <Sun className="text-yellow-500 animate-spin-slow" />
          <Palmtree className="text-green-600 animate-wiggle" />
        </div>
      </div>
      
      {/* News Cards */}
      <div className="relative grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <div key={index} className="transform transition-all duration-300 hover:scale-105">
            <Flipnews news={item} />
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <BeanIcon className="absolute bottom-4 left-4 text-blue-400 opacity-30 h-16 w-16 animate-float" />
      <WavesIcon className="absolute top-4 right-4 text-blue-300 opacity-30 h-16 w-16 animate-wave" />
    </section>
  )
}