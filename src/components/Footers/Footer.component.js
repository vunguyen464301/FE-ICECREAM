import React, { Component } from 'react'
import '../../css/componentsCSS/Footer.component.css';
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    return (
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">NguyenAnhVu <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>C</li>
                <li>UI Design</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Android</li>
                <li>Templates</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Contribute</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <hr>
          </hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Nguyen Anh Vu
              Scanfcode.
                  </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><div className="ml-10"><i className="fa fa-facebook"><FaFacebookF /></i></div></li>
                <li><div className="ml-10"><i className="fa fa-twitter"><FaTwitter /></i></div></li>
                <li><div className="ml-10"><i className="fa fa-dribbble"><FaDribbble /></i></div></li>
                <li><div className="ml-10"><i className="fa fa-linkedin"><FaLinkedinIn /></i></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
