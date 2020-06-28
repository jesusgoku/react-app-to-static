import { randomDelay } from '../utils/delay';

/**
 * @typedef {Object} NewsItem
 * @property {number} id - identifier of news
 * @property {string} title - title about news
 * @property {string} slug - slug about news
 * @property {string} content - content about news
 * @property {string} cover - cover about news
 * @property {string} thumb - thumb about news
 *
 * @typedef {Object} fetchNewsOptions
 * @property {number} [limit=4] - limit of news retrieved
 * @property {number} [offset=0] - offset of news retrieved
 */

const news = [
  {
    id: 1,
    title: 'First news title',
    slug: 'first-news-title',
    content: 'First news content',
    thumb: 'https://picsum.photos/id/1/400/225',
    cover: 'https://picsum.photos/id/1/1000/563',
  },

  {
    id: 2,
    title: 'Second news title',
    slug: 'second-news-title',
    content: 'Second news content',
    thumb: 'https://picsum.photos/id/2/400/225',
    cover: 'https://picsum.photos/id/2/1000/563',
  },

  {
    id: 3,
    title: 'Second news title',
    slug: 'second-news-title-3',
    content: 'Second news content',
    thumb: 'https://picsum.photos/id/3/400/225',
    cover: 'https://picsum.photos/id/3/1000/563',
  },

  {
    id: 4,
    title: 'Second news title',
    slug: 'second-news-title-4',
    content: 'Second news content',
    thumb: 'https://picsum.photos/400/225',
    cover: 'https://picsum.photos/1000/563',
  },

  {
    id: 5,
    title: 'Second news title',
    slug: 'second-news-title-5',
    content: 'Second news content',
    thumb: 'https://picsum.photos/id/4/400/225',
    cover: 'https://picsum.photos/id/4/1000/563',
  },

  {
    id: 6,
    title: 'Second news title',
    slug: 'second-news-title-6',
    content: 'Second news content',
    thumb: 'https://picsum.photos/id/5/400/225',
    cover: 'https://picsum.photos/id/5/1000/563',
  },

  {
    id: 7,
    title: 'Second news title',
    slug: 'second-news-title-7',
    content: 'Second news content',
    thumb: 'https://picsum.photos/id/6/400/225',
    cover: 'https://picsum.photos/id/6/1000/563',
  },
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
