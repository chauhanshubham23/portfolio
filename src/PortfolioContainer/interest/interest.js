import React from 'react';
import './interest.css';
import cricket from "../interest/cricket.png";

const interest = () => {
  return (
    <>
<div className="container">


 <h2 className=" intereheading"><span className="border_bottm">Interested in Technology</span></h2>
 <p className="text-center text-secondary mt-4 mb-4 interepara">Growing up during the age of rapid technological progress, the reason for my interest in technology and engineering is quite evident.<span className="d-none d-sm-block"> For as long as I can remember, I have been fascinated with the Software and Development Application. </span></p>
 <div className="row">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services settings">
                    <div className="icon"> <div className="htmlradius mx-auto d-block"><i className="fab fa-internet-explorer interecticons"></i></div> </div>
                    <h4>Browsing Internet</h4>
                    <p>Browsing is the act of looking through a set of information quickly.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box d-none d-sm-block">
                <div className="our-services speedup">
                    <div className="icon"> <div className="cssradius mx-auto d-block "><i className="fab fa-css3 interecticons"></i></div> </div>
                    <h4>CSS</h4>
                    <p>CSS is a style sheet language used for giving styles for HTML.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box d-none d-sm-block">
                <div className="our-services privacy">
                    <div className="icon"> <div className="jsradius mx-auto d-block "><i className="fab fa-js-square interecticons"></i></div> </div>
                    <h4>Javascript</h4>
                    <p>JavaScript is the world's most popular programming language. </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="box d-none d-sm-block">
                <div className="our-services backups">
                    <div className="icon">  <div className="databaseradius mx-auto d-block"><i className="fas fa-database interecticons"></i></div> </div>
                    <h4>database</h4>
                    <p>database is an organized collection of data . </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services ssl">
                    <div className="icon">  <div className="pythonradius mx-auto d-block"><i className="fab fa-python interecticons"></i></div> </div>
                    <h4>Python</h4>
                    <p>Python is a high-level programming language.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services database">
                    <div className="icon">  <div className="cradius mx-auto d-block"><i className="fab fa-github interecticons"></i></div> </div>
                    <h4>Github</h4>
                    <p>It is hosting for software development and version control using Git.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="container reveal fade-bottom">
    <h2 className=" intereheading mt-5 "><span className="border_bottm">Others</span></h2>
 <p className="text-center text-secondary mt-4 mb-4 interepara">These are the things where I spend mine mostly of the time after the work. I love to play cricket and other outdoor games like footbol, hockey.  <span className="d-none d-sm-block">and When i am free that i go somewhere to explore new things.</span></p>

 <div className="row ">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services books">
                    <div className="icon"> <div className="bookradius mx-auto d-block"><i className="fas fa-book-reader interecticons"></i></div> </div>
                    <h4>Reading Books</h4>
                    <p>Increases your ability to empathize by reading book. </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services travel">
                    <div className="icon"> <div className="travelradius mx-auto d-block"><i className="fas fa-fighter-jet interecticons"></i></div> </div>
                    <h4>Travelling</h4>
                    <p>You can learn a lot about yourself through travelling.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services cricket">
                <div className="icon"> <div className="crickradius mx-auto d-block"><img src={cricket} className="" alt="" style={{height:50, marginTop:25}}/></div> </div>
                    <h4>Cricket</h4>
                    <p>Cricket is a good sport for developing overall fitness and stamina. </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row rowbottom">
        <div className="col-md-4">
            <div className="box d-none d-sm-block">
                <div className="our-services footbol">
                    <div className="icon">  <div className="footbolradius mx-auto d-block"><i className="fas fa-futbol interecticons"></i></div> </div>
                    <h4>Footboll</h4>
                    <p>Football teaches cooperation and team work. </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box d-none d-sm-block">
                <div className="our-services music">
                    <div className="icon">  <div className="musicradius mx-auto d-block"><i className="fas fa-music interecticons"></i></div> </div>
                    <h4>Music</h4>
                    <p>Music can raise someone's mood, get them excited.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box d-none d-sm-block">
                <div className="our-services running">
                    <div className="icon">  <div className="runningradius mx-auto d-block"><i className="fas fa-running interecticons"></i></div> </div>
                    <h4>Running</h4>
                    <p>Running is a great way to help improve cardiovascular health.</p>
                </div>
            </div>
        </div>
    </div>

</div>

    </>
  )
}

export default interest