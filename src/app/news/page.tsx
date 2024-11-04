import NewsGrid from "@/components/news-grid";
import { getAllNews } from "@/lib/newsquery";

export default async function News(){
    const news=await getAllNews()    
    return <NewsGrid news={news}/>
}