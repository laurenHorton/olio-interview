import React, {useState, useEffect, Fragment} from 'react';
import {useParams} from "react-router-dom";
import fetchArticles from '../utils/fecthArticles';
import updateViewedArticles from '../utils/updateViewedArticles';


const ArticleDetailsPage = () => {
  const {id} = useParams();
  const [articleData, setArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(setArticleData, setIsLoading, id);
    updateViewedArticles(id);
  }, []);

  if(isLoading) return (
    <div>Loading...</div>
  );

  return (
    <Fragment>
      <h1>{articleData.title}</h1>
      <p>{articleData.description}</p>
      <h2>Photos</h2>
      {
          articleData.photos.map((photo) => (
            <img key={photo.uuid} src={photo.files.large} />
          ))
      }
    </Fragment>
  )
};

export default ArticleDetailsPage;