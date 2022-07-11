import React, { Fragment } from 'react';

const Article = ({
  title,
  description
}) => (
  <Fragment>
    <h2>{title}</h2>
    <div>{description}</div>
  </Fragment>
)

export default Article;