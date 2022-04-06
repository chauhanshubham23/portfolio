import React from 'react';
import './footer.css';

export default function footer() {
  return (
    <>
         
 <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col mb-1">
        <p className="text-center joinwithus text-muted mt-4"> Join With Me </p>
        <div className="footericons text-center">
        <a href="https://twitter.com/ " className='btn-circle btn-lg'><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/shubham4567 " className='btn-circle btn-lg'><i className="fab fa-facebook  facebook"></i></a>
        <a href="https://www.instagram.com/_shubhamchauhan_19/ " className='btn-circle btn-lg'><i className="fab fa-instagram  insta"></i></a>
        <a href="https://linkedin.com/in/shubham-chauhan-b15a2b156 " className='btn-circle btn-lg'><i className="fab fa-linkedin facebook"></i></a>
        <a href="https://github.com/chauhanshubham23 " className='btn-circle btn-lg'><i className="fab fa-github facebook"></i></a>
        </div>
        <p className="text-center mt-4">&copy; Copyright <b>2022</b>. All Right Reserved</p>
        <p className="text-center">Designed by <span className="head"><b>Shubham.</b></span></p>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
