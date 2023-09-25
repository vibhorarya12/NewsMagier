import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NYTitem";
import Spinner from "./Spinner";

const News = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${props.category}.json?api-key=TL9opzYdSWcC6H3AxPcGECU1sKJtGYAp`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(apiUrl);
        setNewsData(response.data.results);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [props.category]);

  return (
    <div>
      <h2
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
          fontStyle: "italic",
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        NewsMagier - Top {props.category === 'home' ? '' : props.category} Headlines
      </h2>

      {loading && <Spinner />} 
      <div className="container">
        <div className="row">
          {newsData.map((item, index) => (
            <div key={index} className="col-md-4">
              <NewsItem
                key={item.url}
                description={item.abstract}
                imageUrl={item.multimedia?.[0]?.url}
                url={item.url}
                title={item.title}
                section={item.section}
                date={item.published_date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
