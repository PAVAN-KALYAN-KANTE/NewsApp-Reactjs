import React from "react";
import { useState } from "react";

const List = (props) => {
  const options = [
    {
      label: "tesla",
      value:
        "https://newsapi.org/v2/everything?q=tesla&from=2022-04-30&sortBy=publishedAt&apiKey=",
    },
    {
      label: "Apple",
      value:
        "https://newsapi.org/v2/everything?q=apple&from=2022-05-29&to=2022-05-29&sortBy=popularity&apiKey=",
    },
    {
      label: "business",
      value:
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=",
    },
    {
      label: "TechCrunch",
      value: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=",
    },
    {
      label: "Wall Street Journal",
      value: "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=",
    },
  ];

  const [value, setValue] = useState(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey="
  );

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
    props.onValue(value);
  };

  return (
    <div>
      <label>
        What do we eat?
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <p>We eat {value}!</p>
    </div>
  );
};

export default List;
