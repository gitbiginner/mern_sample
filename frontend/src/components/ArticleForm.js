import React, {useState} from 'react';

const ArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/articles', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
                body: JSON.stringify({title, content})
                })
            }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <textarea
            value={content}
            onChange={e => setContent(e.target.value)}  
            />
            <button type="submit">Create</button>
        </form>
        )
    }
    
    export default ArticleForm  

