import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { fetchNews } from '../../services/news';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      setNews(await fetchNews());
    })();
  }, []);

  return (
    <div className="News">
      <Helmet title="ReactSnapshot: News" />

      <h2>News</h2>

      <ul>
        {news.map(({ slug, title }) => (
          <li key={slug}>
            <Link to={`/news/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
