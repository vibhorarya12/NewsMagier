import React, { useEffect, useState } from "react";
import Bookitem from "./Bookitem";
import Spinner from "./Spinner";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [publishedDate, setPublishedDate] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 

        const response = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=TL9opzYdSWcC6H3AxPcGECU1sKJtGYAp"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setBooks(data.results.books);
        setPublishedDate(data.results.published_date);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

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
        New York Times Best Sellers - Hardcover Fiction
      </h2>
      {loading && <Spinner />} 
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <div key={book.primary_isbn13} className="col-md-4">
              <Bookitem
                description={book.description}
                imageUrl={book.book_image}
                url={book.amazon_product_url}
                title={book.title}
                rank={book.rank}
                date={publishedDate}
                author={book.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
