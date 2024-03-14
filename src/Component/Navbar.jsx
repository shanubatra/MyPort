import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [toggle, settoggle] = useState(false);
  function scrollto() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      {toggle ? (
        <>
          <i
            className="bi bi-x mobile-nav-toggle d-xl-none"
            onClick={() => settoggle(!toggle)}
          ></i>

          <div id="mobileheader" className="mobile-nav-active">
            <div className="d-flex flex-column">
              <div className="profile">
                <img
                  src="/img/profile.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <h1 className="text-light">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Shanu Batra
                  </Link>
                </h1>
                <div className="social-links mt-4 text-center">
                  <a
                    href="mailto:shanubatra128@gmail.com"
                    className="gmail me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a
                    href="https://github.com/shanubatra"
                    className="github me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shanu-batra-083b48228"
                    className="linkedin me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>

              <nav
                id="navbar"
                className="nav-menu navbar justify-content-start"
              >
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => scrollto()}
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-address-card"></i> <span>About</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/education"
                      className="nav-link"
                      onClick={() => scrollto()}
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-graduation-cap"></i>{" "}
                      <span>Education</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course"
                      className="nav-link"
                      onClick={() => scrollto()}
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-award"></i> <span>Course</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/skill"
                      className="nav-link"
                      onClick={() => scrollto()}
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-puzzle-piece"></i> <span>Skills</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/project"
                      className="nav-link"
                      onClick={() => scrollto()}
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-laptop-code"></i>{" "}
                      <span>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="nav-link"
                      onClick={() => scrollto()}
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-mobile"></i> <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              <a
                href="/img/My_Cv.pdf"
                className="m-2 btn btn-pink w-100 fw-bold p-3 "
                download=""
              >
                Check Resume
              </a>
            </div>
          </div>
        </>
      ) : (
        <i
          className="bi bi-list mobile-nav-toggle d-xl-none"
          onClick={() => settoggle(!toggle)}
        ></i>
      )}

      <div id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="/img/profile.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <Link to="/" style={{ textDecoration: "none" }}>
                Shanu Batra
              </Link>
            </h1>
            <div className="social-links mt-4 text-center">
              <a
                href="mailto:shanubatra128@gmail.com"
                className="gmail me-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-envelope"></i>
              </a>
              <a
                href="https://github.com/shanubatra"
                className="github me-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shanu-batra-083b48228"
                className="linkedin me-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar justify-content-start">
            <ul>
              <li>
                <Link
                  to="/"
                  className="nav-link scrollto"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-address-card"></i> <span>About</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/education"
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => scrollto()}
                >
                  <i className="fa fa-graduation-cap"></i>
                  <span>Education</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="nav-link"
                  onClick={() => scrollto()}
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-award"></i>
                  <span>Course</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/skill"
                  className="nav-link"
                  onClick={() => scrollto()}
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-puzzle-piece"></i> <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="nav-link"
                  onClick={() => scrollto()}
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-laptop-code"></i> <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={() => scrollto()}
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-mobile"></i> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          <a
            href="/img/My_Cv.pdf"
            className="m-2 btn btn-pink w-100  fw-bold p-3 "
            download=""
          >
            Check Resume
          </a>
        </div>
      </div>
    </>
  );
}
