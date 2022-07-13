import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchArticles from "../../utils/fecthArticles";
import updateViewedArticles from "../../utils/updateViewedArticles";

const ArticleDetailsPage = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(setArticleData, setIsLoading, id);
    updateViewedArticles(id);
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <h1>{articleData.title}</h1>
      <p>{articleData.description}</p>
      <h2>Photos</h2>
      {articleData.photos.map((photo) => (
        // alt text should be localised and meaning full if the img is not decorative but api doesn't provide one so for now leaving blank
        <img key={photo.uid} src={photo.files.large} alt="" />
      ))}
    </main>
  );
};

export default ArticleDetailsPage;
