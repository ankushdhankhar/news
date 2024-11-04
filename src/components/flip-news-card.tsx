'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Clock } from 'lucide-react'
import { IFlipnews } from '@/lib/newsquery'
import Image from 'next/image'
import Link from 'next/link'



const fallbackImageUrl = '/placeholder.svg?height=200&width=300'

const truncate = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + '...' : str
}

export default function Flipnews({news}:{news: IFlipnews}) {

  const { 
    heading1, description1, report1, imageUrl1, 
    heading2, description2, report2, imageUrl2, 
    time 
  }=news
  const [isFirstNews, setIsFirstNews] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
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
  const toggleNews = () => {
    setIsAnimating(true)
    setIsFirstNews(prev => !prev)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    
      <Card className={`w-full max-w-md transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold line-clamp-2">
            <Link href={`flipnews/${news.id}`}>
            {isFirstNews ? heading1 : heading2}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={isFirstNews ? imageUrl1 : imageUrl2}
              alt={isFirstNews ? heading1 : heading2}
              height={300}
              width={400}
              onError={(e) => {
                e.currentTarget.src = fallbackImageUrl
              }}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
            <p className="text-sm text-gray-600 mb-1 line-clamp-2 font-bold">
              {isFirstNews ? description1 : description2}
            </p>
            
            <p className="text-xs  line-clamp-2 bg-gray-50 rounded p-1">
              {isFirstNews ? report1 : report2}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-2">
          <div className="flex items-center text-gray-400 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {formatTime(time)}
          </div>
          <Button 
            onClick={toggleNews} 
            variant="outline"
            disabled={isAnimating}
            className="flex items-center text-xs h-8 px-2"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Toggle News
          </Button>
        </CardFooter>
      </Card>
     
   
  )
}