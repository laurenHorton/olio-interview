import React, { useState, useEffect } from "react";
import Articles from "../Articles";
import Map from "../Map";
import fetchArticles from "../utils/fecthArticles";
import "../App.css";

const ArticlePage = () => {
  const [articleData, setArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(setArticleData, setIsLoading);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="Container">
      <div className="Container-items">
        <Articles articleData={articleData} />
      </div>
      <div className="Container-items">
        <Map articleData={articleData} />
      </div>
    </main>
  );
};

export default ArticlePage;
