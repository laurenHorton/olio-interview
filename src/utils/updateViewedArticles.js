/**
 * update the local storage list of viewed articles
 *
 * @param {number} id
 */
const updateViewedArticles = (id) => {
  const viewedArticles = JSON.parse(localStorage.getItem("viewedArticles"));
  if (!viewedArticles) {
    localStorage.setItem("viewedArticles", JSON.stringify([{ id: id }]));
  } else {
    if (!viewedArticles.find((article) => id === article.id)) {
      localStorage.setItem(
        "viewedArticles",
        JSON.stringify([...viewedArticles, { id: id }])
      );
    }
  }
};

export default updateViewedArticles;
