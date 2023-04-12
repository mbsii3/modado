import { useState, useEffect } from "react"
import NewsFeedItem from "./NewsFeedItem";

export default function NewsFeed() {
    const [articles, setArticles] = useState([]);

    const url = 'https://newsapi.org/v2/everything?q=tesla&apiKey=c3f7bf22455049f2970a93086914da05'

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
        
        articles.map(article => {
            return (
            <NewsFeedItem 
                title={article.title}
                description={article.description}
                url={article.url}
             />
            )
        })
    );
    
}