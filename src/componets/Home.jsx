import { useEffect, useState } from "react";
import Hearder from "./Hearder";

const Home = () => {
  const [data, setdata] = useState([]);

  const api = async () => {
    const final = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=7d45dd599bb4401f8093dd4ff6fe4c12");
    const res = await final.json();
    setdata(res.articles);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Hearder />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={item.urlToImage}
              alt="News"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description?.substring(0, 100)}...</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-3 inline-block">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
