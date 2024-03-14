import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  function scrollto() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div id="main" className="bg-black">
        <div className="container-fluid text-center  py-3">
          <div className="row">
            <footer className="d-flex justify-content-center">
              <div className="col-lg-6 col-md-4">
                <div className="d-inline-flex flex-wrap footer-item mb-2">
                  <Link
                    className="btn-link text-light"
                    onClick={() => scrollto()}
                    to="/portfolio"
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                  <Link
                    className="btn-link text-light"
                    onClick={() => scrollto()}
                    style={{ textDecoration: "none" }}
                    to="/skill"
                  >
                    Skills
                  </Link>
                  <Link
                    className="btn-link text-light"
                    onClick={() => scrollto()}
                    style={{ textDecoration: "none" }}
                    to="/course"
                  >
                    Courses
                  </Link>
                  <Link
                    className="btn-link text-light"
                    onClick={() => scrollto()}
                    style={{ textDecoration: "none" }}
                    to="/education"
                  >
                    Education
                  </Link>
                  <Link
                    className="btn-link text-light"
                    onClick={() => scrollto()}
                    style={{ textDecoration: "none" }}
                    to="/project"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </footer>
            <span className="text-light">
              <Link
                style={{ textDecoration: "none" }}
                to="/portfolio"
                className="text-light"
                onClick={() => scrollto()}
              >
                <i className="fas fa-copyright text-light me-2"></i>Shanu Batra
              </Link>
              , All right reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
