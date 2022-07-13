import React from 'react';
import './App.css'

const Article = ({
  title,
}) => (
    <div className='Article'>
      {title}
      <a href="/article">View More</a>
    </div>
)

export default Article;