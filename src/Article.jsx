import React from "react";
import "./App.css";

const Article = ({ title, id, isViewed }) => (
  <div className="Article">
    {title}
    {isViewed && <span className="Float-right">Viewed ✔</span>}
    <div>
      <a href={`/article/${id}`}>View More</a>
    </div>
  </div>
);

export default Article;
