import React, {useState, useEffect} from 'react';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetch('/articles')
        .then(res => res.json())
        .then(data => setArticles(data));
    }, []);
    
    return (
        <div>
        {articles.map(article => (
            <div key={article.id}>{article.title}</div>
        ))}
        </div>
    );
}
export default ArticleList;
