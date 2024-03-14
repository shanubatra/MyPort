import React from "react";
import { education } from "./constants";

export default function Education() {
  return (
    <>
      <div id="main" className="mt-2">
        <div id="resume" className="resume mt-0 pt-0">
          <div className="container ">
            {" "}
            <div className="section-title mb-0 pb-2">
              <h2 className="page-heading text-center rounded p-2 mb-0">
                Education
              </h2>
            </div>
            <div className="section-title">
              <p className="text-capitalize text-center text-capitalize fw-bold">
                "My Academic journey!!!"
              </p>
            </div>
            <div className="row mt-0 ">
              <div className="col-lg-7 mb-1">
                {education.map((item, index) => {
                  return (
                    <div key={index} className="resume-item mb-1">
                      <h4>{item.name}</h4>
                      <p>
                        <em>{item.course}</em>
                      </p>
                      <p>Grade: {item.grade}</p>
                      <h5>{item.year}</h5>
                      <p>{item.decription}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
