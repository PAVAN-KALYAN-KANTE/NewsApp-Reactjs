import "./App.css";
import Article from "./Article";
import { useState, useEffect } from "react";

function App() {
  const api_key = "eeb186ef89094cee885218ce0a054b71";
  // const apiadd = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${api_key}`;

  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("datab.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{Articles && <Article Articles={Articles} />}</div>;
}

export default App;
