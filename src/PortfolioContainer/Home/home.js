import React from 'react';
import './home.css';
import image from '../Home/man1.png';
import { Link } from "react-router-dom";


export default function home() {
  return (
    <>
         <section>
         <div className="background">
         <div className="container">
             <div className="row">
                 <div className="col-sm-12">
                 <img src={image} className='image' alt="" />
                 <div className="name float-left">
                 <div className="style fade-in">
                     <h1 className=" myname"> <span className="head">Hi</span>, I'm <br/>Shubham Chauhan</h1>
               <p className="para text-secondary">I'm a full-stack developer from, india.</p>
               <Link to="/about" className="btn mt-3 defaultbtn">About Me</Link>
              </div>
              </div>
              
                 </div>
             </div>
         </div>
        </div>
     </section>
    </>
  )
}
