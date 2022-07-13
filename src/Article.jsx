import React, { useState } from 'react';
import './App.css'

const Article = ({
  title,
  description
}) => {
const [viewMore, setViewMore] = useState(false);

  return (
    <div className='Article'>
      {title}
      <button onClick={() => setViewMore(!viewMore)}>View More</button>
      {
        viewMore &&
        <div>{description}</div>
      }
    </div>
)
}

export default Article;