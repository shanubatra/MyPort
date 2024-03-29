import React, { useState } from "react";
import { projects } from "./constants";
import ProjectDetails from "./ProjectDetails";
import { NavLink } from "react-router-dom";
export default function Projects() {
  let [type, setType] = useState("all");

  return (
    <>
      <div id="main">
        <div id="portfolio" className="portfolio section-bg">
          <div className="container-fluid mb-3 mt-3">
            <div className="section-title pb-2 mt-3">
              <h2 className="page-heading text-center rounded p-2 mb-0">
                Projects
              </h2>
              <p className="fw-bold text-capitalize text-center">
                " I bring a unique blend of creativity and analytical thinking
                to every project, ensuring innovative solution and impactful
                results."
              </p>
            </div>

            <div
              className="row position-relative mt-4 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li
                    className="right-border"
                    style={{ overflow: "hidden" }}
                    onClick={() => setType("all")}
                  >
                    <NavLink style={{ textDecoration: "none" }} to="#">
                      All
                    </NavLink>
                  </li>
                  <li
                    className="right-border"
                    style={{ overflow: "hidden" }}
                    onClick={() => setType("web")}
                  >
                    <NavLink style={{ textDecoration: "none" }} to="#">
                      Web
                    </NavLink>
                  </li>
                  <li
                    style={{ overflow: "hidden" }}
                    onClick={() => setType("app")}
                  >
                    <NavLink style={{ textDecoration: "none" }} to="#">
                      App
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="container-fluid col-lg-12">
                <div className="row flex-wrap justify-content-center w-100">
                  {type === "all"
                    ? projects
                        .sort((a, b) => a.id - b.id)
                        .map((item, index) => {
                          return <ProjectDetails item={item} key={index} />;
                        })
                    : type === "web"
                    ? projects
                        .filter((item) => item.type === "web")
                        .map((item, index) => {
                          return <ProjectDetails item={item} key={index} />;
                        })
                    : projects
                        .filter((item) => item.type === "app")
                        .map((item, index) => {
                          return <ProjectDetails item={item} key={index} />;
                        })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
