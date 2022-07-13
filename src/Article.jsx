import React from 'react';
import './App.css'

const Article = ({
  title,
  id,
}) => (
    <div className='Article'>
      {title}
      <a href={`/article/${id}`}>View More</a>
    </div>
)

export default Article;