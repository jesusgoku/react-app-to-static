import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsItem } from '../../services/news';

function NewsItem() {
    const { slug } = useParams();

    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        (async () => {
            setNewsItem(await fetchNewsItem(slug));
        })();
    }, [slug]);

    if (!newsItem) return null;

    const { title, content } = newsItem;

    return (
        <div className="NewsItem">
            <h2 className="NewsItem__Title">{title}</h2>

            <div className="NewsItem__Content">{content}</div>
        </div>
    );
}

export default NewsItem;