import React from 'react';
import Article from './Article';

const Articles = ({articleData}) => (
  articleData.map((article) => (
    <Article key={article.id} {...article}/>
  ))
);

export default Articles;