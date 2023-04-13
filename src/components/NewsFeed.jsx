import { useState, useEffect } from "react"
import NewsFeedItem from "./NewsFeedItem";

export default function NewsFeed() {
    const [articles, setArticles] = useState([]);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c3f7bf22455049f2970a93086914da05`

    useEffect(() => {
       async function getArticles() {
        await fetch(url).then((response) => response.json())
        .then((data) => {
            setArticles(data.articles)
        });
        }
        getArticles();
    }, []);



    
    return (
       <> 
       { articles.map((article, idx) => (
        
            
            <NewsFeedItem 
                key={idx} 
                title={article.title}
                url={article.url}
                urlToImage={article.urlToImage}
             />
            
         
        ))}
    </>
    );
}