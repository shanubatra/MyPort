import React from "react";
import { skills } from "./constants";

export default function Skills() {
  return (
    <>
      <div id="main">
        <div id="skills">
          <div className="container">
            <div className="section-title  pb-2 mt-3">
              <h2 className="page-heading text-center rounded p-2 mb-0">
                Skills
              </h2>
            </div>
            <div className="section-title text-center text-capitalize fw-bold">
              <p>
                "i showcase a diverse set of skills that reflect my versatility
                and expertise"
              </p>
            </div>
            <div className="row skills-content mt-4 mb-4">
              {skills.map((item, index) => {
                return (
                  <div key={index} className="col-lg-6 mb-3">
                    <div className="card card-shadow">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold text-main mb-1">
                          {item.title}
                        </h5>
                        <div className="card no-border ">
                          <div className="d-flex justify-content-evenly flex-wrap">
                            {item.skills.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className=" p-2 align-items-baseline m-2 d-flex flex-row card-shadow border "
                                  style={{ borderRadius: "20px" }}
                                >
                                  <span>
                                    <img
                                      src={`/img/${item.image}`}
                                      id="skills-item"
                                      alt={item.name}
                                      style={{ width: "35px" }}
                                    />
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "550",
                                      marginRight: "5px",
                                    }}
                                  >
                                    {item.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <!-- End Skills Section --> */}
      </div>
    </>
  );
}
