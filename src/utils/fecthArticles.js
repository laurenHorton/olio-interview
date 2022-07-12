const fetchArticles = (setArticleData, setIsLoading) => {
  fetch("https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json")
  .then(response => {
    if(response.ok) return response.json()
  })
  .then(data => {
    setArticleData(data);
    setIsLoading(false)
  })
}

export default fetchArticles;