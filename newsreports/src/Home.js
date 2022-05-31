import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/News")}>Hi</button>
      <button onClick={() => navigate("/Weather")}>hello</button>
    </div>
  );
}

export default Home;
