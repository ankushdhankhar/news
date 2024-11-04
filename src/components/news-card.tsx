'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Image from "next/image"
import { INews } from "@/lib/newsquery"
import Link from "next/link"


export function NewsCardComponent({ news }: { news: INews }) {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000) // Convert to milliseconds
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <Card className="max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={news.imageUrl}
            alt={news.heading}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
      <Link href={`/news/${news.id}`} >
        <h3 className="text-2xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600">{news.heading}</h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3">{news.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2 bg-muted flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          {formatTime(news.time)}
        </div>
        {/* You can add a "Read More" link here if needed */}
      </CardFooter>
    </Card>
  )
}