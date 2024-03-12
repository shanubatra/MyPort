import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      {/* <!-- 404 Start --> */}
      <div className="container-fluid py-5 mb-5">
        <div className="container py-5 text-center mb-1 fw-bold">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-danger"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website!
              </p>
              <Link
                className="btn btn-primary rounded-pill py-3 px-5 text-capitalize"
                style={{
                  background: "#173a6c",
                }}
                to="/"
              >
                click to reload{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 404 End --> */}
    </>
  );
}
