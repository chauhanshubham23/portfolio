import React from "react";
import myimage from "../Resume/myimage1.jpg";
import "./resume.css";

const resume = () => {
  return (
    <>
      <section>
        <div className="container mb-5">
          <h2 className=" resumeheading">
            <span className="border_bottm">RESUME</span>
          </h2>
          <p className="text-center text-secondary mt-4 mb-4 aboutpara">
            Energetic and passionated college student working towards in Web
            development, Software development at VIT (Vellore institute of
            technology).{" "}
            <span className="d-none d-sm-block">
              {" "}
              Eager to learn new technologies and methodologies.
            </span>
          </p>
          <div className="row mt-5">
            <div className="col-sm-6">
              <p className="sumaryPara ml-2">Summary</p>
              <i className="far fa-circle circleinfo"></i>
              <div className="borderleft1">
                <p className="myname3 mx-4">Shubham Chauhan</p>
                <img
                  className=" image3 rounded-circle mx-auto d-block "
                  src={myimage}
                  alt=""
                />
                <p className=" mx-3 text-secondary">
                  <i>
                    Currently I'm pursuing MCA from VIT Vellore, Tamilnadu
                    india. I'm highly interested in web and software
                    development.
                  </i>
                </p>
                <ul className="ml-5 text-secondary">
                  <li>Navi mumbai, Maharashtra, India</li>
                  <li>+91 7651925611</li>
                  <li>subhamchauhan1586@gmail.com</li>
                </ul>
              </div>
              <p className="sumaryPara mt-3 mx-1">Education</p>
              <i className="far fa-circle circleinfo"></i>
              <div className="borderleft2">
                <p className="myname3 mx-4">
                  {" "}
                  10th & 12th Standard (Schooling)
                </p>
                <p className="bacheloryear text-center"> 2015-2017</p>
                <p className="mx-3 text-secondary">
                  <i>SMPIC Deogaon, Azamgarh, Uttar Pradesh.</i>
                </p>
                <p className="mx-3  text-secondary">
                  I completed my schooling from state board from Uttar pradesh.
                  I scored 83% in 10th standard and 72% in 12th standard.{" "}
                </p>
              </div>
              <i className="far fa-circle circleinfo"></i>
              <div className="borderleft3">
                <p className="myname3 mx-4">
                  Bachelor's of Science in Information Technology
                </p>
                <p className="bacheloryear text-center"> 2018-2021</p>
                <p className="mx-3 text-secondary">
                  <i>Pillai College of Arts,Commerce and Science</i>
                </p>
                <p className="mx-3  text-secondary">
                  I Completed my Bsc.IT (Bachelor of science in Information
                  Technology) from Pillai college of Arts, Commerce and Science
                  New panvel, Navi-mumbai. I scored overall 8.60 CGPA in my 3
                  years UG programme.
                </p>
              </div>
              <i className="far fa-circle circleinfo"></i>
              <div className="borderleft4">
                <p className="myname3 mx-4">Master's in Computer Application</p>
                <p className="masteryear text-center"> 2021-2023</p>
                <p className="mx-3 text-secondary">
                  <i>Vellore institute of technology (VIT)</i>
                </p>
                <p className="mx-3  text-secondary">
                  Currently, I'm pursuing MCA from VIT (Vellore institute of
                  technology), Tamilnadu india.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="sumaryPararight ml-2">Professional Experience</p>
              <i className="far fa-circle circleinforight"></i>
              <div className="borderright1">
                <p className="myname3 mx-4">
                  Frontend-development & Designing Specialist
                </p>
                <p className="developmentExpe text-center">2020 - Present</p>
                <p className=" mx-3 text-secondary">
                  <i>Navi mumbai, India</i>
                </p>
                <ul className="ml-5 text-secondary">
                  <li>
                    Building quality website and application using HTML, CSS and
                    javascript.
                  </li>
                  <li>
                    Use some framework and library like Bootstrap, Jquery.
                  </li>
                  <li>
                    Frameworks and library are powerful tools that can make a
                    web developer’s job easier.{" "}
                  </li>
                  <li>
                    I have to complete Front-End Web UI Frameworks and Tools:
                    Bootstrap 4. <i className="fas fa-arrow-right"></i>{" "}
                    <a
                      href="
                             https://www.coursera.org/account/accomplishments/certificate/EKD9CS58NUMK"
                      download="certificate"
                    >
                      Check Certificate <i className="fas fa-certificate"></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>

              <i className="far fa-circle circleinforight"></i>
              <div className="borderright2">
                <p className="myname3 mx-4">
                  Backend-Development (Server-side)
                </p>
                <p className="developmentExpe text-center">2020 - Present</p>
                <p className=" mx-3 text-secondary">
                  <i>Navi mumbai, India</i>
                </p>
                <ul className="ml-5 text-secondary">
                  <li>
                    Make your real time website dynamically working after adding
                    Back-end (server side).
                  </li>
                  <li>
                    Normally I used Django Framework (most popular programming
                    language python) for back-end.
                  </li>
                  <li>
                    I'm also use PHP programming language as back-end for
                    (server-side).
                  </li>
                </ul>
              </div>
              <i className="far fa-circle circleinforight"></i>
              <div className="borderright3">
                <p className="myname3 mx-4">Database</p>
                <p className="developmentExpe text-center">2020 - Present</p>
                <p className=" mx-3 text-secondary">
                  <i>Navi mumbai, India</i>
                </p>
                <ul className="ml-5 text-secondary">
                  <li>
                    I use mysql as well as sqlite3 (database) for storing the
                    data.
                  </li>
                  <li>
                    MySQL works on many operating systems and with many
                    languages including PHP, PERL, C, C++, JAVA, etc.
                  </li>
                  <li>
                    Django uses Sqlite for its configuration by default. Since
                    Sqlite is installed in Python, you do not need to install it
                    separately for supporting your database.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default resume;
