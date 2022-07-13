const getViewedArticles = () => {
  const viewedArticles = JSON.parse(localStorage.getItem("viewedArticles"));
  if (!viewedArticles) return [];
  return viewedArticles.map((article) => article.id);
};

export default getViewedArticles;
