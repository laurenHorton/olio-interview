import getArticleFromArticlesData from "./getArticleFromArticlesData";

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
