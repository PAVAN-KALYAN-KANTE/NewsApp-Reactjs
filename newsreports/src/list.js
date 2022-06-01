import React from "react";
import { useState, useEffect } from "react";

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

  const [Value, setValue] = useState(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey="
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    props.onValue(Value);
  }, [Value]);

  return (
    <div className="m-auto">
      <label className="font-extrabold text-xl my-3 ">
        What do we See?
        <select value={Value} onChange={handleChange} className="border-solid">
          {options.map((option, index) => (
            <option key={option.value + index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default List;
