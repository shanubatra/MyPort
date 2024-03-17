import React, { useState } from "react";

export default function ContactUs() {
  let [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let [message, setmessage] = useState(" ");
  function getInputData(e) {
    let { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  async function postData(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: {
        "content-type": "application-json",
      },
      body: JSON.stringify(data),
    });

    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setmessage("'Thank You For Your Valuable Feedback!!!!'");
  }
  return (
    <>
      <div id="main">
        <div id="contact" className="contact">
          <div className="container mt-3">
            {" "}
            <div className="section-title pb-0 mt-3">
              <h2 className="page-heading text-center rounded p-2 mb-0">
                Contact
              </h2>
            </div>
            <div className="section-title">
              <p className="text-capitalize text-center text-capitalize fw-bold">
                "Get in touch with me today! Whether you have a project in mind
                or simply have any question, i am excited to connect with
                you!!!"
              </p>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="col-md-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <a
                      href="https://www.google.com/maps"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-location-dot"></i>
                      <h4>Location:</h4>
                      <p>Hno-30/1 Tara Nagar,Sonipat</p>
                    </a>
                  </div>

                  <div className="email">
                    <a
                      href="mailto:shanubatra128@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-envelope"></i>
                      <h4>Email:</h4>
                      <p>Shanubatra128@gmail.com</p>
                    </a>
                  </div>

                  <div className="phone">
                    <a
                      href="tel:+919138363536"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fa fa-mobile"></i>
                      <h4>Call:</h4>
                      <p>+91-9138363536</p>
                    </a>
                  </div>
                  <div className="phone">
                    <a
                      href="https://wa.me/+9138363536"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fab fa-whatsapp"></i>
                      <h4>Whatsapp:</h4>
                      <p>+91-9138363536</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-lg0 d-flex align-items-stretch ">
                <form className="php-email-form" onSubmit={postData}>
                  {message === "" ? (
                    <p className="text-center text-capitalize text-success fw-bold">
                      {message}
                    </p>
                  ) : (
                    <p className="text-center text-capitalize text-success fw-bold">
                      {message}
                    </p>
                  )}
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        onChange={(e) => getInputData(e)}
                        value={data.name}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={(e) => getInputData(e)}
                        value={data.email}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      onChange={(e) => getInputData(e)}
                      value={data.subject}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      onChange={(e) => getInputData(e)}
                      rows="6"
                      value={data.message}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className=" btn-pink btn fw-bold">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
