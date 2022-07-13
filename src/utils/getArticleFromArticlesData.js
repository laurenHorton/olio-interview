/**
 * returns the article of the id provided
 *
 * @param {obect[]} articleData
 * @param {number} id
 * @returns {object | undefined} article
 */
const getArticleFromArticlesData = (articleData, id) => {
  return articleData.find((article) => article.id.toString() === id);
};

export default getArticleFromArticlesData;
