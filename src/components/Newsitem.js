import React from "react";

const Newsitem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }} >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-primary">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-success">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
