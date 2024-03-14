import React from "react";
import { course } from "./constants";

export default function Courses() {
  return (
    <>
      <div id="main">
        <div id="resume" className="resume pt-0">
          <div className="container ">
            <div className="section-title pb-2 mt-3">
              <h2 className="page-heading text-center rounded p-2 mb-0">
                Courses
              </h2>
            </div>
            <div className="section-title">
              <p className="text-capitalize text-center text-capitalize fw-bold">
                "I've immersed myself in a comprehensive learning journey. These
                experiences have equiped me with a solid foundation in
                development!!!"
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">

                {course.map((item, index) => {
                  return (
                    <div className="resume-item mb-3">
                      <h4>{item.name} </h4>
                      <p>
                        <em>{item.course}</em>
                      </p>
                      <h5>{item.year}</h5>
                      <ul>
                        <li className="text-capitalize">{item.li1}</li>
                        {item.li2 ? (
                          <li className="text-capitalize">{item.li2}</li>
                        ) : (
                          ""
                        )}
                        {item.li3 ? (
                          <li className="text-capitalize">{item.li3}</li>
                        ) : (
                          ""
                        )}
                        {item.li4 ? (
                          <li className="text-capitalize">{item.li4}</li>
                        ) : (
                          ""
                        )}
                      </ul>
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
