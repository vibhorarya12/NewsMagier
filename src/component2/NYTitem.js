const NewsItem = (props) => {
  let { description, imageUrl, url, title, section, date } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ backgroundColor: "#f0f0f0", borderRadius:'25px' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{section}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.linkpicture.com/q/Screenshot-1_1.png"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "280px", width: "100%", objectFit: "cover", }}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p> Date: {new Date(date).toGMTString()} </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
