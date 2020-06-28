import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import { fetchNewsItem } from '../../services/news';

import './NewsItem.css';

function NewsItem() {
  const { slug } = useParams();

  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    (async () => {
      setNewsItem(await fetchNewsItem(slug));
    })();
  }, [slug]);

  if (!newsItem) return null;

  const { title, content, cover } = newsItem;

  return (
    <div className="NewsItem">
      <Helmet title={`ReactSnapshot: ${title}`} />
      <img src={cover} alt={title} className="NewsItem__Image" />

      <h2 className="NewsItem__Title">{title}</h2>

      <div className="NewsItem__Content">{content}</div>
    </div>
  );
}

export default NewsItem;
