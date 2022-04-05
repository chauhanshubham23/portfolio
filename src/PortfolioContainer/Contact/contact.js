import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1 className=" contactheading">
            <span className="border_bottm">Contact me</span>
          </h1>
          <p className="text-center text-secondary mt-4 mb-4 contactpare">
            <strong>Get in touch!</strong> Want to get in touch? We'd love to
            here from you. Here's how you can reach me. our questions and
            comments are most important to us.
            <span className="d-none d-sm-block">
              {" "}
              Select a topic below, or reach us by phone or email. We've got
              everything covered for your needs.
            </span>{" "}
          </p>

          <iframe
            className="mt-5 w-100 mb-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.162047492156!2d73.08603711662087!3d19.017936430500917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d390c16fad%3A0x45a26096b6c171fd!2sKamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629022060582!5m2!1sen!2sin"
            
            loading="lazy"
          ></iframe>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="contacticon reveal fade-left">
                <i className="fas fa-map-marker-alt icon"></i>
                <h4 className="tag mt-2">Location:</h4>
                <p className="contactpara text-secondary">
                  <i>B/210 Vrindavan Complex, sec-8, Kamothe, Navi mumbai</i>
                </p>

                <i className="far fa-envelope icon"></i>
                <h4 className="tagemail mt-2">Email:</h4>
                <p className="text-secondary contactpara">
                  <a
                    href="mailto:subhamchauhan1586@gmail.com"
                    className="text-secondary"
                  >
                    subhamchauhan1586@gmail.com
                  </a>
                </p>

                <i className="fas fa-mobile-alt icon"></i>
                <h4 className="tagcall mt-2 ">Call:</h4>
                <p className="text-secondary contactpara">
                  <a href="tel:+91 9877609821" className="text-secondary">
                    +91 7651925211
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-8 reveal fade-right">
              <form action="" method="post">
                <div className="row">
                  <div className="col form-group green-border">
                    <label for="subject">
                      Enter name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control my-2"
                      placeholder="Your name"
                      aria-label="Your name"
                      required
                    />
                  </div>
                  <div className="col form-group green-border">
                    <label for="subject">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control my-2 mb-3"
                      placeholder="Your email"
                      aria-label="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group green-border">
                  <label for="subject">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control my-2"
                    id="subject"
                    name="subject"
                    placeholder="Regarding subject"
                    required
                  />
                </div>
                <div className="form-group green-border">
                  <label for="Message">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control my-2"
                    id="message"
                    name="message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="form-group green-border">
                <button type="submit" href="/"  className="btn mt-3 mx-auto d-block w-25 sendmessage">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
