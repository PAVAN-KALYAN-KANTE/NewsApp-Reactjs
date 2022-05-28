import "./App.css";
import Article from "./Article";
import { useState, useEffect } from "react";

function App() {
  const api_key = "eeb186ef89094cee885218ce0a054b71";
  // const apiadd = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${api_key}`;

  const [Articles, setArticles] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{Articles && <Article Articles={Articles} />}</div>;
}

export default App;
