import React from 'react';
import './App.css'

const Article = ({
  title,
  id,
  isViewed
}) => (
    <div className='Article'>
      {title}
      <a href={`/article/${id}`}>View More</a>
      {
        isViewed && <div>Viewed</div>
      }
    </div>
)

export default Article;