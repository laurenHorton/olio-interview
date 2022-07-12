import React, { Fragment } from 'react';
import Article from './Article';

const Articles = ({articleData}) => (
  articleData.map((article) => (
    <Fragment key={article.id}>
      <Article {...article}/>
    </Fragment>
  ))
);

export default Articles;