import { randomDelay } from '../utils/delay';

/**
 * @typedef {Object} NewsItem
 * @property {number} id - identifier of news
 * @property {string} title - title about news
 * @property {string} content - content about news
 *
 * @typedef {Object} fetchNewsOptions
 * @property {number} [limit=4] - limit of news retrieved
 * @property {number} [offset=0] - offset of news retrieved
 */

const news = [
  { id: 1, title: 'First news title', slug: 'first-news-title', content: 'First news content' },
  { id: 2, title: 'Second news title', slug: 'second-news-title', content: 'Second news content' },
];

const newsIndex = news.reduce((acc, item) => {
  acc[item.id] = item;
  acc[item.slug] = item;

  return acc;
}, {});
/**
 * Fetch news collection
 *
 * @param {fetchNewsOptions} [options={}] - fetch news options
 *
 * @returns {Promise<NewsItem[]>} - collect of news
 */
async function fetchNews({ limit = 4, offset = 0 } = {}) {
  await randomDelay(1000);

  return news.slice(offset, limit);
}

/**
 * Fetch a NewsItem by id
 *
 * @param {number|string} idOrSLug - identifier of news for retrieved
 *
 * @returns {Promise<NewsItem>} - news item retrieved
 */
async function fetchNewsItem(idOrSlug) {
  await randomDelay(1000);

  const newsItem = newsIndex[idOrSlug];

  if (!newsItem) {
    throw new Error(`NewsItem "${idOrSlug}" not found`);
  }

  return newsItem;
}

export { fetchNews, fetchNewsItem };
