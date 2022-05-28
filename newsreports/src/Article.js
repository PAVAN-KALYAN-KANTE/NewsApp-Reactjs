import React from "react";

function Article(props) {
  return (
    <div>
      {props.Articles.map((article) => (
        <div>
          <p key={article.title}>{article.title}</p>
          <p kwy={article.title}>{article.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Article;
