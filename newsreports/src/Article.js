import React from "react";

function Article(props) {
  return (
    <div class="px-24 py-10 max-w-sm w-full lg:max-w-full leading-normal">
      {props.Articles.map((article, index) => (
        <div
          key={article.title + index}
          class="max-w-7xl grid grid-cols-2  border-x-8 border-y-8 border-cyan-600"
        >
          <img
            class="w-full rounded-full"
            src={article.urlToImage}
            alt={article.title}
          ></img>
          <div class=" flex flex-col justify-between px-2">
            <p class=" text-center text-3xl  font-bold">{article.title}</p>
            <p class="font-bold">{article.description}</p>
            <p class="font-serif">{article.content}</p>
          </div>
          <div class="py-1  ">{article.author}</div>
          <div>{article.publishedAt}</div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Article;
