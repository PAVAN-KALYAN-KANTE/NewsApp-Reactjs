import React from "react";
import List from "./list";
import { useState } from "react";

function Article(props) {
  const [cat, setCat] = useState("");
  const handleCat = (value) => {
    setCat(value);
    console.log(cat);
  };
  return (
    <>
      <List onValue={handleCat} />
      <div class="px-24 py-10 max-w-sm w-full lg:max-w-full leading-normal">
        {props.Articles.map((article, index) => (
          <div
            key={article.title + index}
            class="max-w-7xl grid grid-cols-2  border-2 border-slate-500 rounded-xl my-3 md:grid-flow-row md:border-collapse"
          >
            <img
              class="w-full rounded-full py-5"
              src={article.urlToImage}
              alt={article.title}
            ></img>
            <div class=" flex flex-col justify-between px-2">
              <p class=" text-center text-3xl font-mono  font-bold">
                {article.title}
              </p>
              <p class="font-semiboldmy-4 py-2">{article.description}</p>
              <p class="font-serif my-4 py-2">{article.content}</p>
              <a
                href={article.url}
                class="text-xl text-cyan-600 hover:text-2xl hover:text-red-800"
              >
                Click here to know more....
              </a>
            </div>
            <div class="py-4  mt-4 bg-slate-900 text-white rounded-full text-center">
              Author: {article.author}
            </div>
            <div class=" py-4  mt-4 bg-slate-900 text-white rounded-full text-center">
              Published: {article.publishedAt}
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default Article;
