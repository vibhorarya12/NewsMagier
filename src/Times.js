import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./component2/NYTitem";

const NYTDataFetchingComponent = () => {
  const [multimediaData, setMultimediaData] = useState([]);

  const apiUrl =
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=TL9opzYdSWcC6H3AxPcGECU1sKJtGYAp"; // Replace this with the actual API endpoint URL

  useEffect(() => {
    // Fetch data from the NYT API using Axios
    axios
      .get(apiUrl)
      .then((response) =>
        setMultimediaData(response.data.results.map((item) => item.multimedia))
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>New York Times Multimedia Data:</h1>
      <div className="container">
        <div className="row">
      {multimediaData.map((multimediaArray, index) => (
        <div key={index}>
          {multimediaArray.map((item, subIndex) => (
            // <img key={subIndex} src={item.url} alt={item.caption} />
            <div className="col-md-4">
            <NewsItem 
            description={item.caption}
            imageUrl={item.url}
            />
            </div>
          ))}
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default NYTDataFetchingComponent;
