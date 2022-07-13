import getArticleFromArticlesData from "./getArticleFromArticlesData";
/**
 * fetches all article data or one by id
 *
 * @param {func} setArticleData function to set the article data in state
 * @param {func} setIsLoading function to set the loading state
 * @param {number} id
 */

const fetchArticles = (setArticleData, setIsLoading, id) => {
  fetch(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json"
  )
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      if (!!id) {
        setArticleData(getArticleFromArticlesData(data, id));
      } else {
        setArticleData(data);
      }
      setIsLoading(false);
    });
};

export default fetchArticles;
