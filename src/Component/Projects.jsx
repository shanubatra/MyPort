import React, { useState } from "react";
import { projects } from "./constants";
import ProjectDetails from "./ProjectDetails";
export default function Projects() {
  let [type, setType] = useState("all");

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

            <div className="row position-relative">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li
                    className="filter-active right-border"
                    onClick={() => setType("all")}
                  >
                    All
                  </li>
                  <li className="right-border " onClick={() => setType("web")}>
                    Web
                  </li>
                  <li onClick={() => setType("app")}>App</li>
                </ul>
              </div>
              <div className="col-lg-12 col-md-9 d-flex flex-wrap justify-content-center">
                {type === "all"
                  ? projects
                      .sort((a, b) => a.id - b.id)
                      .map((item, index) => {
                        return <ProjectDetails item={item} index={index} />;
                      })
                  : type === "web"
                  ? projects
                      .filter((item) => item.type === "web")
                      .map((item, index) => {
                        return <ProjectDetails item={item} index={index} />;
                      })
                  : projects
                      .filter((item) => item.type === "app")
                      .map((item, index) => {
                        return <ProjectDetails item={item} index={index} />;
                      })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
