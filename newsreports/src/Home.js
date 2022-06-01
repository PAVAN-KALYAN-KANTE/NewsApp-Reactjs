import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 h-screen">
      <div className="flex justify-center">
        <h1 className="mt-6 text-5xl font-serif">NEWS and WEATHER Reports</h1>
      </div>
      <div className="flex flex-row justify-center my-28">
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg455KegEtMcmEhrzOqxdNYLDd2dPuBY0tjhBcWH1A4qsRgJxxVjDn8CDQRtFAFKolAbw&usqp=CAU')]  hover:text-6xl rounded-2xl">
          <div className="p-28">
            <button
              className="border-2 bg-zinc-400 p-3 rounded-xl font-serif hover:bg-orange-500 "
              onClick={() => navigate("/News")}
            >
              News
            </button>
          </div>
        </div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31qoETNXq14NtuvP-4iRo2XboLAp0zH8UyomcSkDNrPH5UggxHvzhymvGcKHbQ8y0Lro&usqp=CAU')] hover:text-6xl rounded-2xl">
          <div className="p-28">
            <button
              className="border-2 bg-red-300 p-3 rounded-xl font-serif hover:bg-orange-500"
              onClick={() => navigate("/Weather")}
            >
              Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
