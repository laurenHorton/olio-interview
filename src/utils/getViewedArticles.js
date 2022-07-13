/**
 * Convert the viewed articles in localstorage to an array
 *
 * @returns [numbers]
 */

const getViewedArticles = () => {
  const viewedArticles = JSON.parse(localStorage.getItem("viewedArticles"));
  if (!viewedArticles) return [];
  return viewedArticles.map((article) => article.id);
};

export default getViewedArticles;
