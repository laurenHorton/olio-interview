import React, { Fragment, useEffect, useState } from 'react';
import Article from './Article';

const Articles = () => {
  const [articleData, setArticleData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json")  
    .then(response => {
      if(response.ok) return response.json()
    })
    .then(data => setArticleData(data))
    .then(() => setIsLoading(false))
  }, []);

  if(isLoading) return (
    <div>Loading...</div>
  )

  return (
    articleData.map((article) => (
      <Fragment key={article.id}>
        <Article {...article}/>
      </Fragment>
    ))
  )
}

export default Articles;