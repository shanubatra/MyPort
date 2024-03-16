import React from "react";

export default function ProjectDetails({ item }) {
  return (
    <>
      <div
        className="col-xl-3 col-lg-3 col-md-6 rounded position-relative m-2 portfolio-wrap card card-shadow"
        style={{
          width: "370px",
        }}
      >
        <div className="rounded">
          <img
            style={{
              height: 250,
              padding: "20px",
            }}
            className="img-fluid w-100 rounded "
            alt=""
            src={`/img/${item.pic}`}
          />
        </div>
        <div className="portfolio-links">
          <h2
            className="m-2"
            style={{
              color: "#173a6c",
              fontWeight: "700",
              overflow: "hidden",
            }}
          >
            {item.title}
          </h2>
          <p
            className="p-3 text-capitalize text-dark"
            style={{
              fontWeight: "700",
            }}
          >
            {item.decription}
          </p>
          <div>
            <a
              href={item.link}
              style={{
                width: item.live ? "50%" : "100%",
                padding: " 8px 10px",
                color: "white",
              }}
              target="_blank"
              rel="noreferrer"
              className="portfolio-lightbox btn-bg rounded"
            >
              <span style={{ fontSize: "18px" }}>View Code</span>
            </a>
            {item.live ? (
              <a
                href={item.live}
                style={{
                  width: "49%",
                  padding: "8px 10px",
                  color: "white",
                }}
                target="_blank"
                rel="noreferrer"
                className="btn-bg portfolio-lightbox rounded"
              >
                <span style={{ fontSize: "18px" }}>Live App</span>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="p-2 text-center">
          <h4
            className="card-title fw-bold mt-2"
            style={{ overflow: "hidden" }}
          >
            {item.title}
          </h4>
          <p
            className="card-text mb-1 p-3 text-capitalize"
            style={{ fontSize: "14px" }}
          >
            {item.decription.slice(0, 100)}....
          </p>
          <div className="jdkbi">
            {item.tech.map((item, index) => {
              return (
                <span key={index} className="card-link card-a">
                  {item}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
