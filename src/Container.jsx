import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import Map from './Map';
import fetchArticles from './utils/fecthArticles';

const Container = () => {
  const [articleData, setArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(setArticleData, setIsLoading)
  }, []);

  if(isLoading) return (
    <div>Loading...</div>
  );

  return (
    <body>
      <Articles articleData={articleData}/>
      <Map articleData={articleData} />
    </body>
  )
};

export default Container;