import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NewsApp from "./NewsApp";
import WeatherApp from "./WeatherApp";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/News" element={<NewsApp />} />
        <Route path="/Weather" element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
