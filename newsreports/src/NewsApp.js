import React from "react";
import Article from "./Article";
import List from "./list";
import { useState, useEffect } from "react";

function NewsApp() {
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
      <List
        onValue={(value) => {
          setCat(value);
        }}
      />
      <div>{Articles && <Article Articles={Articles} />}</div>
    </>
  );
}

export default NewsApp;