import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { fetchNews } from '../../services/news';

import './News.css';

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

      <h2 className="News__Title">News</h2>

      <ul className="News__List">
        {news.map(({ slug, title, thumb }) => (
          <li key={slug} className="News__ListItem">
            <Link to={`/news/${slug}`} className="News__ListItemLink">
              <img src={thumb} alt={title} className="News__ListItemImage" />

              <h3 className="News__ListItemTitle">{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
