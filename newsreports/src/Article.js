import React from "react";

function Article(props) {
  return (
    <>
      <div className="px-24 py-10 max-w-sm w-full sm:max-w-full leading-normal">
        {props.Articles.map((article, index) => (
          <div
            key={article.title + index}
            className="max-w-7xl grid grid-cols-2  border-2 border-slate-500 rounded-xl my-3 md:grid-flow-row md:border-collapse"
          >
            <img
              className="w-full rounded-full py-5"
              src={article.urlToImage}
              alt={article.title}
            ></img>
            <div className=" flex flex-col justify-between px-2">
              <p className=" text-center text-3xl font-mono  font-bold">
                {article.title}
              </p>
              <p className="font-semiboldmy-4 py-2">{article.description}</p>
              <p className="font-serif my-4 py-2">{article.content}</p>
              <a
                href={article.url}
                className="text-xl text-cyan-600 hover:text-2xl hover:text-red-800"
              >
                Click here to know more....
              </a>
            </div>
            <div className="py-4  mt-4 bg-slate-900 text-white rounded-full text-center">
              Author: {article.author}
            </div>
            <div className=" py-4  mt-4 bg-slate-900 text-white rounded-full text-center">
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
