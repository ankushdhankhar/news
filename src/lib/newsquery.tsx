import { collection, doc, getDoc, getDocs, limit, query } from "firebase/firestore/lite"
import { db } from "./firebase"

export interface INews {
    heading: string,
    description: string,
    report: string,
    imageUrl: string,
    tags: string[]
    time: number
    id:string
}

export interface IFlipnews {
    heading1: string,
    description1: string,
    report1: string,
    imageUrl1: string,
    heading2: string,
    description2: string,
    report2: string,
    imageUrl2: string,
    time: number
    id:string
}

export async function getAllNews() {
    const newsQuery = query(collection(db, 'news'));
    const newsDocs = await getDocs(newsQuery);
   
       const  news = newsDocs.docs.map((doc =>
            ({
                id: doc.id,
                ...doc.data() 
            } as INews)))
  
    return news
}


export async function getAllFlipNews() {
    const newsQuery = query(collection(db, 'flipnews'));
    const newsDocs = await getDocs(newsQuery);
   
       const  news = newsDocs.docs.map((doc =>
            ({
                id: doc.id,
                ...doc.data()
            }as IFlipnews)))
  
    return news
}

export async function getNewsFromId(id:string){
    const newsRef= doc(db,"news",id);
    const newsSnap=await getDoc(newsRef);
    return newsSnap.data() as INews
}
export async function getFlipNewsFromId(id:string){
    const newsRef= doc(db,"flipnews",id);
    const newsSnap=await getDoc(newsRef);
    return newsSnap.data() as IFlipnews
}