import { useState, useEffect } from "react"
import NewsFeedItem from "./NewsFeedItem";

export default function NewsFeed() {
    const [articles, setArticles] = useState([]);

    const url = 'https://newsdata.io/api/1/news?apikey=pub_20524d4c4ef1dff5125b10f11dc4164d76cd0&country=us';

    useEffect(() => {
       async function getArticles() {
        const newsArticles = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.results
        });
        setArticles(newsArticles);
        }
        getArticles();
    }, []);



    
    return (
       <> 
       { articles.map((article, idx) => (
        
            
            <NewsFeedItem 
                key={idx} 
                title={article.title}
                url={article.link}
                description={article.description}
             />
            
         
        ))}
    </>
    );
}