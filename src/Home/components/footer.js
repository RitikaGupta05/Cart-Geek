import React from "react";

const Footer = (props) => {
  return (
   <div>
       <footer className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center">
              <img src="../../images/logo.png" />
              </p>
            </div>
          </div>
          <div className="row">
           
              <div className="footer">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">How it works?</a>
                  </li>
                  <li>
                    <a href="#">Menus</a>
                  </li>
                  <li>
                    <a href="#">PRofile</a>
                  </li>
                </ul>
              </div>
            <div className="footer-bottom">
              <p className="text-center">
               
                All Rights Are Reserved © 2021 Lokal Grub | Designed by Cart Geek
              </p>
            </div>
          </div>
        </div>
      </footer>
   </div>
  );
}

export default Footer;
