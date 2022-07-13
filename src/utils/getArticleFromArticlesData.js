const getArticleFromArticle = (articleData, id) => {
  return articleData.find(article => article.id.toString() === id);
}

export default getArticleFromArticle;