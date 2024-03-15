import React from "react";
import Typewriter from "typewriter-effect";
import Skills from "./Skills";
import Education from "./Education";
import Courses from "./Courses";
import Projects from "./Projects";
import ContactUs from "./ContactUs";

export default function About() {
  return (
    <>
      <div>
        <div
          id="hero"
          className="d-flex flex-column ps-2 justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-between flex-wrap" id="main">
            <div className="text-center ms-2 mb-3">
              <img
                src="/img/profile.jpg"
                style={{
                  borderRadius: "50%",
                  width: "300px",
                  border: "10px solid rgba(255, 255, 255, 0.15)",
                }}
              />
            </div>
            <div className="hero-container ms-2">
              <h1>Shanu Batra</h1>
              <p>
                I'm
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        "Front-End developer",
                        "Programmer",
                        "Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  ></Typewriter>
                </span>
              </p>
              <div className="hero-container">
                <p
                  className="text-capitalize overflow-hidden"
                  style={{ fontSize: "15px" }}
                >
                  Fueled by a passion for innovation, Embracing the dynamic
                  intersection of desgin and technology, my goal is to craft
                  solutions that not only meet but exceed expectations.Through
                  each project, my objective is to push boundaries, spark
                  curiosity and leave an indelible mark on the ever-evoling
                  canvas of the digital realme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Courses />
      <Skills />
      <Projects />
      <ContactUs />
    </>
  );
}
