import React from "react";
import { app, web } from "./constants.jsx";
export default function Projects() {
  return (
    <>
      <div id="main">
        <div id="portfolio" className="portfolio section-bg">
          <div className="container mb-3 mt-3">
            <div className="section-title pb-2 mt-3">
              <h2 className="page-heading text-center rounded p-2 mb-0">
                Projects
              </h2>
            </div>
            <div className="section-title text-center">
              <p className="fw-bold text-capitalize">
                " I bring a unique blend of creativity and analytical thinking
                to every project, ensuring innovative solution and impactful
                results."
              </p>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active right-border ">
                    All
                  </li>
                  <li data-filter="#filter-web" className="right-border ">
                    Web
                  </li>
                  <li data-filter="#filter-app">App</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {web.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 portfolio-item"
                    id="filter-web"
                  >
                    <div className="rounded position-relative portfolio-wrap fruite-item card card-shadow">
                      <div className="fruite-img rounded">
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
                        <h2 className="m-2">{item.title}</h2>
                        <p className="p-3 text-capitalize">{item.decription}</p>
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
                            className="portfolio-lightbox btn-bg"
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
                              className="btn-bg portfolio-lightbox"
                            >
                              <span style={{ fontSize: "18px" }}>Live App</span>
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="p-2 text-center">
                        <h4 className="card-title fw-bold mt-2">
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
                  </div>
                );
              })}

              {app.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 portfolio-item "
                    id="filter-app"
                  >
                    <div className="rounded position-relative portfolio-wrap fruite-item card card-shadow">
                      <div className="fruite-img">
                        <img
                          style={{ height: 250, padding: "20px" }}
                          className="img-fluid w-100 rounded-top"
                          alt=""
                          src={`${item.pic}`}
                        />
                      </div>
                      <div className="portfolio-links">
                        <h2 className="m-2">{item.title}</h2>
                        <p className="p-3 text-capitalize">{item.decription}</p>
                        <div>
                          {" "}
                          <a
                            href={item.link}
                            style={{
                              width: "100%",
                              padding: " 8px 10px",
                              color: "white",
                            }}
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio-lightbox btn-bg"
                          >
                            <span style={{ fontSize: "18px" }}>View Code</span>
                          </a>
                        </div>
                      </div>
                      <div className="p-2 text-center">
                        <h2 className="card-title mt-2  fw-bold mb-2">
                          {item.title}
                        </h2>
                        <p
                          className="card-text mb-1 p-3 text-capitalize"
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {item.decription.slice(0, 60)}....
                        </p>
                        <div className="jdkbi">
                          {item.tech.map((item, index) => {
                            return (
                              <span key={index} className="card-link card-a">
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
