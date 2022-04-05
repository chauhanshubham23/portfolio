import React from "react";
import "./about.css";
import "./animation1.js";
import image from "../About/mine.jpeg";
import gfg from "../About/gfg.jpeg";
import tut_point from "../About/tutorials_point.jpeg";
import github from "../About/github.png";
import s_o_f from "../About/stkoflo.png";

const about = () => {
  return (
    <>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col">
              <h2 className=" aboutheading">
                <span className="border_bottm">ABOUT</span>
              </h2>
              <p className="text-center text-secondary mt-4 mb-4 aboutpara ">
                <span className="d-none d-sm-block">
                  Welcome Everyone! Every person has their own unique story.
                  Here is the glimpse into mine.
                </span>
                I'm <strong>Shubham Chauhan,</strong> And i'm pursuing MCA
                (Master of Computer Application) from VIT Vellore. I scored 8.60
                CGPA in my ug programme.
              </p>
              <div className="row mt-5">
                <div className="col-sm-4 col-md-4">
                  <img src={image} className="image1 my-4" alt="" />
                </div>
                <div className="col-sm-8 col-md-8">
                  <h2 className="webdeveloper mx-3">Full stack Developer</h2>
                  <p className="text-secondary mx-3">
                    <i>
                      Fortunately, the high demand, easy-to-learn,
                      fun-to-experience life of a web developer is always a
                      great choice for someone ready to have an exciting career
                      in code.
                    </i>
                  </p>
                  <div className="row mx-2">
                    <div className="col-sm-6">
                      <p>
                        <b>Birthday: </b>
                        <span className="text-secondary ml-3">
                          5 August 1999
                        </span>
                      </p>
                      <p>
                        <b>Website: </b>
                        <span className="text-secondary  ml-3">
                          www.example.com
                        </span>
                      </p>
                      <p>
                        <b>Phone: </b>
                        <a href="tel:+7651925211" className="linkpara">
                          <span className="text-secondary  ml-3">
                            +91 7651925211
                          </span>
                        </a>
                      </p>
                      <p>
                        <b>City: </b>
                        <span className="text-secondary ml-3">
                          Navi-mumbai, India
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        <b>Age: </b>
                        <span className="text-secondary ml-3">21</span>
                      </p>
                      <p>
                        <b>Degree: </b>
                        <span className="text-secondary ml-2">
                          MCA (Master of Computer Application)
                        </span>
                      </p>
                      <p>
                        <b>Email: </b>
                        <a href="mailto:example@gmail.com" className="linkpara">
                          <span className="text-secondary ml-3">
                            subhamchauhan1586@gmail.com
                          </span>
                        </a>
                      </p>
                      <p>
                        <b>Freelance: </b>
                        <span className="text-secondary ml-3">Available</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-secondary mt-4 d-none d-sm-block skillpara mx-2">
                    I'm looking forward to get an opportunity in software and
                    application development with an esteemed organization where
                    I can prove my talent and outperform with best of my
                    knowledge and ability.
                    <br />
                    My short-term goal is to find a platform to expand my career
                    and grow with the organization. And my long-term goal is to
                    be the cause of the organization's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skills */}
      <section>
        <div className="container reveal fade-left">
          <h2 className="text-center skillheading ">
            <span className="border_bottm">Skills</span>
          </h2>
          <p className="text-center text-secondary mt-4 skillpara">
            {" "}
            I am a quick learner, ambitious and hardworking, with skills in
            programming languages such as Python, Javascript, and C++. Some
            frameworks like Django, Bootstrap and Database.
            <span className="d-none d-sm-block">
              Furthermore, I am adept at handling multiple tasks on a daily
              basis competently and at working well under pressure. A key
              strength is a communication; building strong relationships with
              people in order to deliver the best results.
            </span>
          </p>
          <div className="row">
            <div className="col-sm-6">
              <h6 className="progress-title font-weight-bold mb-4">HTML5</h6>
              <div className="progress info w-100" style={{ height: 20 }}>
                <div
                  className="progressbar  "
                  role="progressbar"
                  style={{ width: 600 }}
                >
                  <i className=" progress-icon text-danger fab fa-html5"></i>
                  <div className="progress-value">
                    <span>100</span>%
                  </div>
                </div>
              </div>
              <h6 className="progress-title font-weight-bold mb-4">CSS3</h6>
              <div className="progress info w-100" style={{ height: 20 }}>
                <div
                  className="progressbar  "
                  role="progressbar"
                  style={{ width: 480 }}
                >
                  <i className="progress-icon text-success fab fa-css3"></i>
                  <div className="progress-value">
                    <span>90</span>%
                  </div>
                </div>
              </div>
              <h6 className="progress-title font-weight-bold mb-4">
                Bootstrap
              </h6>
              <div className="progress info w-100" style={{ height: 20 }}>
                <div
                  className="progressbar  "
                  role="progressbar"
                  style={{ width: 500 }}
                >
                  <i className="progress-icon text-info fab fa-btc"></i>
                  <div className="progress-value">
                    <span>95</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="progress-title font-weight-bold mb-4">
                Javascript
              </h6>
              <div className="progress info w-100" style={{ height: 20 }}>
                <div
                  className="progressbar  "
                  role="progressbar"
                  style={{ width: 330 }}
                >
                  <i className="progress-icon text-warning fab fa-js-square"></i>
                  <div className="progress-value">
                    <span>65</span>%
                  </div>
                </div>
              </div>
              <h6 className="progress-title font-weight-bold mb-4">MySQL</h6>
              <div className="progress info w-100" style={{ height: 20 }}>
                <div
                  className="progressbar  "
                  role="progressbar"
                  style={{ width: 280 }}
                >
                  <i className="progress-icon text-dark fas fa-database"></i>
                  <div className="progress-value">
                    <span>60</span>%
                  </div>
                </div>
              </div>
              <h6 className="progress-title font-weight-bold mb-4">C++</h6>
              <div className="progress info w-100" style={{ height: 20 }}>
                <div
                  className="progressbar  "
                  role="progressbar"
                  style={{ width: 400 }}
                >
                  <b className="progress-icon text-primary">C++</b>
                  <div className="progress-value">
                    <span>70</span>%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* facts */}
      <section>
        <div className="container reveal fade-bottom">
          <h2 className="text-center skillheading ">
            <span className="border_bottm">Facts</span>
          </h2>
          <p className="text-center text-secondary mt-4 skillpara">
            When I was in my College. I did many projects and one of them was
            HOMEPRO (Online home service provider). And do many others projects,
            Attend many Seminars. Everyday I do good work which satisfies me.
          </p>
          <div className="row mt-4">
            <div className="col-sm-4 text-center">
              <h1 className="head">50</h1>
              <p className="text-secondary">Mini projects</p>
            </div>
            <div className="col-sm-4 text-center">
              <h1 className="head">10</h1>
              <p className="text-secondary">Projects</p>
            </div>
            <div className="col-sm-4 text-center">
              <h1 className="head">5</h1>
              <p className="text-secondary">Working of hours daily</p>
            </div>
          </div>
        </div>
      </section>
      {/* fevorite learning */}
      <section>
        <div className="container carouselcontainer reveal fade-bottom">
          <h2 className="text-center skillheading ">
            <span className="border_bottm">Favourite Learning Platform</span>
          </h2>
          <p className="text-center text-secondary mt-4 skillpara">
            {" "}
            There is no time to stop learning for everybody. But for me I can
            choose to learn only the things I’m most interested in and do it
            whenever I want{" "}
            <span className="d-none d-sm-block">
              , without the pressure of deadlines, exams, grades… And with the
              plethora of courses and other study materials available online.
            </span>
          </p>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                className="button1 active"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                className="button1"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                className="button1"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                className="button1"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={gfg}
                  className="mx-auto d-block mt-4  c_image"
                  alt="..."
                />
                <h5 className="text-center mt-3 tutorialheadingpara ">
                  Geeksforgeeks
                </h5>
                <p className="text-secondary mt-4 text-center tutorialpara">
                  <i>
                    {" "}
                    <sup>
                      <i
                        className="fa fa-quote-left doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sup>{" "}
                    GeeksforGeeks has been divided into various categories to
                    make it easily accessible for the users. Whether you want to
                    learn algorithms, data structures or it is the programming
                    language on its own which interests you, It has covered
                    everything!{" "}
                    <sub>
                      <i
                        className="fa fa-quote-right doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sub>
                  </i>
                </p>
              </div>
              <div className="carousel-item">
                <img
                  src={tut_point}
                  className="mx-auto d-block mt-4 c_image"
                  alt="..."
                />
                <h5 className="text-center mt-3 tutorialheadingpara ">
                  Tutorialspoint
                </h5>
                <p className="text-secondary mt-4 text-center tutorialpara">
                  <i>
                    {" "}
                    <sup>
                      <i
                        className="fa fa-quote-left doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sup>{" "}
                    Tutorialspoint.com is a dedicated website to provide quality
                    online education in the domains of Computer Science,
                    Information Technology, Programming Languages, and other
                    Engineering as well as Management subjects.{" "}
                    <sub>
                      <i
                        className="fa fa-quote-right doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sub>
                  </i>
                </p>
              </div>
              <div className="carousel-item">
                <img
                  src={github}
                  className="mx-auto d-block mt-4 c_image"
                  alt="..."
                />
                <h5 className="text-center mt-3 tutorialheadingpara ">
                  Github
                </h5>
                <p className="text-secondary mt-4 text-center tutorialpara">
                  <i>
                    {" "}
                    <sup>
                      <i
                        className="fa fa-quote-left doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sup>{" "}
                    GitHub, Inc. is a provider of Internet hosting for software
                    development and version control using Git. It offers the
                    distributed version control and source code management (SCM)
                    functionality of Git, plus its own features.
                    <sub>
                      <i
                        className="fa fa-quote-right doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sub>
                  </i>
                </p>
              </div>
              <div className="carousel-item">
                <img
                  src={s_o_f}
                  className="mx-auto d-block mt-4 c_image"
                  alt="..."
                />
                <h5 className="text-center mt-3 tutorialheadingpara ">
                  Stackoverflow
                </h5>
                <p className="text-secondary mt-4 text-center tutorialpara">
                  <i>
                    {" "}
                    <sup>
                      <i
                        className="fa fa-quote-left doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sup>{" "}
                    Stack Overflow is a question and answer website for
                    professional and enthusiast programmers. It is the flagship
                    site of the Stack Exchange Network.{" "}
                    <sub>
                      <i
                        className="fa fa-quote-right doublecouts"
                        aria-hidden="true"
                      ></i>
                    </sub>
                  </i>
                </p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
