import React from "react";
import Article from "./Article";
import getViewedArticles from "./utils/getViewedArticles";

const Articles = ({ articleData }) =>
  articleData.map((article) => {
    const articleIds = getViewedArticles();
    return (
      <Article
        key={article.id}
        {...article}
        isViewed={articleIds.includes(article.id.toString())}
      />
    );
  });

export default Articles;
