import React from "react";
import Article from "./Article";
import List from "./list";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewsApp() {
  const navigate = useNavigate();
  const api_key = process.env.REACT_APP_NEWS_API_KEY;
  // const apiadd = `https://newsapi.org/v2/everything?q=tesla&from=2022-04-30&sortBy=publishedAt&apiKey=${api_key}`;

  const [Articles, setArticles] = useState([]);

  const [cat, setCat] = useState(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey="
  );

  useEffect(() => {
    fetch(`${cat}${api_key}`, {
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat]);

  return (
    <>
      <div className="flex justify-between">
        <List
          onValue={(value) => {
            setCat(value);
          }}
        />
        <div>
          <button
            className="mx-10 my-5 border-2 p-4 rounded-full bg-slate-700 text-white font-bold hover:bg-neutral-200 hover:text-red-500"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>

      <div>{Articles && <Article Articles={Articles} />}</div>
    </>
  );
}

export default NewsApp;
